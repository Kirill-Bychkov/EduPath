import { useRef } from "react";

export function Writeline(setOutput) {
    const checkLog = useRef(false);

    const logCalled = () => checkLog.current;

    const resetCheckLog = () => checkLog.current = false;

    const wrappedConsole = {
        log: (...args) => {
            checkLog.current = true;

            args = args.map(arg => arg === undefined ? "undefined" : arg);

            setOutput(prev => {
                let output = prev.text + (prev.text ? "\n" : "") + args.join(" ");

                return { text: output.replace(/\n+$/, ""), type: "default" };
            });
        },
    };

    return { logCalled, resetCheckLog, wrappedConsole };
};
