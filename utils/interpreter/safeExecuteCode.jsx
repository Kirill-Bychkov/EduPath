import * as libraries from "../../libraries";

export function safeExecuteCode(code, getInput, wrappedConsole) {
  try {
    const main = new Function(
      "readline",
      "console",
      ...Object.keys(libraries),
      `"use strict"; ${code}`
    );

    main(
      getInput,
      wrappedConsole,
      ...Object.values(libraries)
    );

    return null;
  } catch (error) {
    return `Execution error: ${error.message}`;
  }
};
