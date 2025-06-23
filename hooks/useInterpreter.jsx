import { useState, useImperativeHandle } from "react";
import { executeUserCode } from "../utils/interpreter/executeUserCode";
import { Readline, Writeline } from "../libraries";
import * as Clipboard from "expo-clipboard";

export const useInterpreter = (ref) => {
  const [editorKey, setEditorKey] = useState(0);
  const [userCode, setUserCode] = useState(`// Здесь пишите код\n\n\n`);
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

  const clearUserCode = () => {
    setUserCode("");
    setEditorKey(prev => prev + 1);
  };

  const copyUserCode = async () => {
    await Clipboard.setStringAsync(userCode);
  };

  useImperativeHandle(ref, () => ({
    runUserCode,
    clearUserCode,
    copyUserCode
  }));

  return {
    editorKey,
    userCode,
    setUserCode,
    input,
    setInput,
    output,
    setOutput
  };
};
