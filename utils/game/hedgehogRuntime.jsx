export class HedgehogRuntime {
    static #_current = null;

    static set current(instance) {
        if (this.#_current) {
            throw new Error("Only one instance of the Hedgehog class can be created");
        }

        this.#_current = instance;
    }

    static get current() {
        return this.#_current;
    }

    static clear() {
        this.#_current = null;
    }
}
