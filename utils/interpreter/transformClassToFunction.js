import escodegen from "escodegen";
import estraverse from "estraverse";

export function transformClassToFunction(ast) {
  let classAST = null;
  let otherCode = "";

  estraverse.replace(ast, {
    enter(node, parent) {
      if (node.type === "ClassDeclaration") {
        classAST = node;
        return estraverse.VisitorOption.Remove;
      }
    },
  });

  otherCode = escodegen.generate(ast).trim();

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

  const transformedAST = {
    type: "Program",
    body: [constructorFn, ...methods].filter(Boolean),
  };

  const transformedClassCode = escodegen.generate(transformedAST);
  
  return transformedClassCode + "\n" + otherCode;
};
