import { produce } from "immer";

export class HedgehogBack {
  static #_config = {
    grid: null,
    setGrid: null,
    foodRef: null,
    setFoodBacklightVisible: null,
    onMovement: null,
    onTeleportation: null,
    onDeathHedgehog: null,
    onMonumentInstallation: null,
    onCleaningCell: null,
    onBacklight: null
  };

  static #_queue = null;
  static #_interrupted = false;

  static setConfig(config) {
    this.#_config = { ...this.#_config, ...config };
  }

  static resetQueue() {
    this.#_queue = Promise.resolve();
    this.#_interrupted = false;
  }

  static interruptQueue(reason) {
    this.#_interrupted = true;
    this.#_queue = Promise.reject(new Error(reason));
  }

  static isInterrupted() {
    return this.#_interrupted;
  }

  static getQueue() {
    return this.#_queue;
  }

  static getGrid() {
    return this.#_config.grid.map(
      row => row.map(cell => cell.obj)
    );
  }

  static addToQueue(actions) {
    this.#_queue = this.#_queue
      .then(() => actions.reduce(
        (p, action) => p.then(() =>
          Array.isArray(action)
            ? Promise.all(action.map(fn => fn()))
            : action()
        ),
        Promise.resolve()
      ))
      .catch(error => Promise.reject(error));
  }
  
  static changingGrid = (
    fromObj, from,
    toObj, to
  ) => async () => {
    if (this.isInterrupted()) throw new Error("Execution limit exceeded");

    const { setGrid } = this.#_config;
    await setGrid(current => produce(current, draft => {
      draft[from.y][from.x].obj = fromObj.obj;
      draft[from.y][from.x].id = fromObj.id;
      draft[to.y][to.x].obj = toObj.obj;
      draft[to.y][to.x].id = toObj.id;
    }));
  };

  static movement = (to, angle) => async () => {
    if (this.isInterrupted()) throw new Error("Execution limit exceeded");

    const { grid, onMovement } = this.#_config;
    const cell = grid[to.y][to.x];
    await onMovement(cell.top, cell.left, angle);
  };

  static teleportation = (to) => async () => {
    if (this.isInterrupted()) throw new Error("Execution limit exceeded");

    const { grid, onTeleportation } = this.#_config;
    const cell = grid[to.y][to.x];
    await onTeleportation(cell.top, cell.left);
  };

  static deathHedgehog = () => async () => {
    if (this.isInterrupted()) throw new Error("Execution limit exceeded");

    const { onDeathHedgehog } = this.#_config;
    await onDeathHedgehog();
  };

  static monumentInstallation = (reason) => async () => {
    if (this.isInterrupted()) throw new Error("Execution limit exceeded");

    const { onMonumentInstallation } = this.#_config;
    await onMonumentInstallation(reason);

    switch (reason) {
      case "border":
        throw new Error("The hedgehog went beyond the boundary of the playing field");
      case "stone":
        throw new Error("The hedgehog bumped into a rock");
      default:
        throw new Error("The hedgehog died. The reason is unknown");
    }
  };

  static cleaningCell = (to) => async () => {
    if (this.isInterrupted()) throw new Error("Execution limit exceeded");

    const { grid, onCleaningCell } = this.#_config;
    const cell = grid[to.y][to.x];
    await onCleaningCell(cell.obj, cell.id);
  };

  static renderingFoodBacklight = (check, food = "") => async () => {
    if (this.isInterrupted()) throw new Error("Execution limit exceeded");

    const { foodRef, setFoodBacklightVisible } = this.#_config;
    foodRef.current = food;
    await setFoodBacklightVisible(check);
  };

  static backlight = () => async () => {
    if (this.isInterrupted()) throw new Error("Execution limit exceeded");

    const { onBacklight } = this.#_config;
    await onBacklight();
  };
}
