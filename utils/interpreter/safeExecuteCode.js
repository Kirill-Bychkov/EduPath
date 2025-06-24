import * as libraries from "../../libraries";
import { __checkStop__, resetExecutionLimits } from "./checkStop";
import { HedgehogBack } from "../game/hedgehogBack";

export function safeExecuteCode(code, getInput, wrappedConsole) {
  resetExecutionLimits();

  try {
    const main = new Function(
      "__checkStop__",
      "readline",
      "console",
      ...Object.keys(libraries),
      `"use strict";\n${code}\n`
    );

    main(
      __checkStop__,
      getInput,
      wrappedConsole,
      ...Object.values(libraries)
    );

    return null;
  } catch (error) {
    if (error.type === "timeout" || error.type === "iteration") {
      HedgehogBack.interruptQueue(error.message);
      return `Execution stopped: ${error.message}`;
    }
    
    return `Execution error: ${error.message}`;
  }
};
