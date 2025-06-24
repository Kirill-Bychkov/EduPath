let __startTime__ = Date.now();
let __maxDurationMs__ = 100;
let __maxCalls__ = 100_000;

let __callCount__ = 0;
let __timeCheckInterval__ = 10;

export function resetExecutionLimits(duration = 100, maxCalls = 100_000) {
    __startTime__ = Date.now();
    __maxDurationMs__ = duration;
    __maxCalls__ = maxCalls;
    __callCount__ = 0;
};

export function __checkStop__() {
    __callCount__++;
    if (__callCount__ > __maxCalls__) {
        const error = new Error("too many iterations");
        error.type = "iteration";
        throw error;
    }

    if (__callCount__ % __timeCheckInterval__ === 0) {
        const elapsed = Date.now() - __startTime__;
        if (elapsed > __maxDurationMs__) {
            const error = new Error("time limit exceeded");
            error.type = "timeout";
            throw error;
        }
    }
};
