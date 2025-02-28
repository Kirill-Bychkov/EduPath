import { checkCodeErrors } from "./checkCodeErrors";
import { safeExecuteCode } from "./safeExecuteCode";
import { transformClassToFunction } from "./transformClassToFunction";

export function executeUserCode(userCode, getInput, wrappedConsole) {
  const result = checkCodeErrors(userCode);
  if (result.syntaxError) {
    return result.output;
  }

  const ast = result.output;
  const transformedCode = transformClassToFunction(ast);

  return safeExecuteCode(transformedCode, getInput, wrappedConsole);
};
