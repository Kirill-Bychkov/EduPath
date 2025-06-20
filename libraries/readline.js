export function Readline(input, wrappedConsole) {
    const createInputStack = (value) => value.split(";");

    const wrappedReadline = (value) => {
        if (value === undefined) {
            value = "";
        }

        if (typeof value !== "string") {
            throw new Error(
                `readline expects either a string value or no value, but received: `
                + typeof value
            );
        }
        
        let item = inputStack.length == 0 ? "" : inputStack.shift();
        wrappedConsole.log(value + item);

        return item;
    };

    let inputStack = createInputStack(input);
    
    return wrappedReadline;
};
