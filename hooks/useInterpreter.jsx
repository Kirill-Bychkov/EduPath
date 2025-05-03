import { useState, useImperativeHandle } from "react";
import { executeUserCode } from "../utils/interpreter/executeUserCode";
import { Readline, Writeline } from "../libraries";

export const useInterpreter = (ref) => {
  const [userCode, setUserCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState({ text: "", type: "default" });
  const { logCalled, resetCheckLog, wrappedConsole } = Writeline(setOutput);
  
  const runUserCode = () => {
    setOutput({ text: "", type: "default" });
    resetCheckLog();
    
    let executionError = executeUserCode(
      userCode,
      Readline(input, wrappedConsole),
      wrappedConsole
    );

    setInput("");
    
    setOutput(prev => {
      if (executionError) {
        return { text: executionError, type: "error" };
      }
    
      if (!logCalled()) {
        return { text: "The code was executed successfully, but nothing was output",
                  type: "success" };
      }
    
      return prev;
    });
  };

  useImperativeHandle(ref, () => ({ runUserCode }));

  return {
    userCode,
    setUserCode,
    input,
    setInput,
    output,
    setOutput
  };
};
