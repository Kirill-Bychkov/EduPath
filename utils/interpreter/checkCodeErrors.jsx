import { parse } from "acorn";

export function checkCodeErrors(code) {
  try {
    return {
      output: parse(code, { ecmaVersion: 2020, sourceType: "script" }),
      syntaxError: false
    };
  } catch (error) {
    return {
      output: `Syntax error: ${error.message}`,
      syntaxError: true
    };
  }
};
