import estraverse from "estraverse";
import escodegen from "escodegen";

export function transformAndInjectControl(ast) {
  let classAST = null;

  estraverse.replace(ast, {
    enter(node) {
      if (node.type === "ClassDeclaration") {
        classAST = node;
        return estraverse.VisitorOption.Remove;
      }
    }
  });
  
  estraverse.traverse(ast, {
    enter(node) {
      const shouldInjectInLoop = (
        node.type === "WhileStatement" ||
        node.type === "ForStatement" ||
        node.type === "DoWhileStatement" ||
        node.type === "ForInStatement" ||
        node.type === "ForOfStatement"
      );

      const shouldInjectInFunction = (
        node.type === "FunctionDeclaration" ||
        node.type === "FunctionExpression" ||
        node.type === "ArrowFunctionExpression"
      );

      const checkStopCall = {
        type: "ExpressionStatement",
        expression: {
          type: "CallExpression",
          callee: { type: "Identifier", name: "__checkStop__" },
          arguments: [],
        },
      };

      if (shouldInjectInLoop) {
        if (node.body.type === "BlockStatement") {
          node.body.body.unshift(checkStopCall);
        } else {
          node.body = {
            type: "BlockStatement",
            body: [checkStopCall, node.body],
          };
        }
      }

      if (shouldInjectInFunction && node.body && node.body.type === "BlockStatement") {
        node.body.body.unshift(checkStopCall);
      }
    },
  });

  const otherCode = escodegen.generate(ast).trim();

  if (!classAST) return otherCode;

  const className = classAST.id.name;
  const methods = [];
  let constructorFn = null;

  for (const method of classAST.body.body) {
    if (method.kind === "constructor") {
      constructorFn = {
        type: "FunctionDeclaration",
        id: { type: "Identifier", name: className },
        params: method.value.params,
        body: method.value.body,
      };
    } else {
      methods.push({
        type: "ExpressionStatement",
        expression: {
          type: "AssignmentExpression",
          operator: "=",
          left: {
            type: "MemberExpression",
            object: {
              type: "MemberExpression",
              object: { type: "Identifier", name: className },
              property: { type: "Identifier", name: "prototype" },
              computed: false,
            },
            property: { type: "Identifier", name: method.key.name },
            computed: false,
          },
          right: method.value,
        },
      });
    }
  }

  const transformedClassAST = {
    type: "Program",
    body: [constructorFn, ...methods].filter(Boolean),
  };

  const transformedClassCode = escodegen.generate(transformedClassAST);

  return transformedClassCode + "\n" + otherCode;
};
