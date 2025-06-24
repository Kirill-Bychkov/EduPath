import { checkCodeErrors } from "./checkCodeErrors";
import { safeExecuteCode } from "./safeExecuteCode";
import { transformAndInjectControl } from "./transformCodeAST";

export function executeUserCode(userCode, getInput, wrappedConsole) {
  const result = checkCodeErrors(userCode);
  if (result.syntaxError) {
    return result.output;
  }

  const ast = result.output;
  const transformedCode = transformAndInjectControl(ast);
  
  return safeExecuteCode(transformedCode, getInput, wrappedConsole);
};
