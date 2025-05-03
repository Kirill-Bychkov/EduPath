import { produce } from "immer";
import { getRandomInt } from "../utils/randomInt";
import { HedgehogRuntime } from "../utils/game/hedgehogRuntime";

export class Hedgehog {
  static #_config = {
    grid: null,
    setGrid: null,
    onMove: null,
    onPortal: null,
    onEat: null,
    onStone: null,
    onBorder: null,
  };

  #_y;
  #_x;
  #_border;
  #_eventQueue;

  constructor() {
    HedgehogRuntime.current = this;

    const { grid } = Hedgehog.#_config;

    this.#_border = grid.length - 2;
    this.#findHedgehog(grid);
    this.#_eventQueue = Promise.resolve();
  }

  static setConfig(config) {
    Hedgehog.#_config = { ...Hedgehog.#_config, ...config };
  }

  #findHedgehog(grid) {
    for (let y = 1; y <= this.#_border; y++) {
      for (let x = 1; x <= this.#_border; x++) {
        if (grid[y][x].objs[0] === "hedgehog") {
          this.#_y = y;
          this.#_x = x;
          return;
        }
      }
    }
  }

  #addEventQueue(event) {
    this.#_eventQueue = this.#_eventQueue.then(() => event());
  }

  #move(dx, dy) {
    this.#addEventQueue(async () => {
      const {
        grid,
        onMove,
        onPortal,
        onEat,
        onStone,
        onBorder,
        setGrid,
      } = Hedgehog.#_config;

      const
        oldY = this.#_y,
        oldX = this.#_x,
        newY = this.#_y + dy,
        newX = this.#_x + dx;

      const angle = Math.atan2(-dx, dy);
  
      await onMove(grid[newY][newX].top, grid[newY][newX].left, angle);
      
      this.#_y = newY;
      this.#_x = newX;
  
      const result = this.#analyzeCell(newX, newY);

      if (result.type === "border") {
        await onBorder(result.cell.id);
        throw new Error("The hedgehog went abroad");
      }
  
      if (result.type === "stone") {
        await onStone(result.cell.objs[0], result.cell.id);
        throw new Error("The hedgehog bumped into a rock");
      }
  
      if (result.type === "portal") {
        const
          emptyCells = this.#findAllEmptyCells(grid),
          [randY, randX] = emptyCells[getRandomInt(emptyCells.length)];
  
        await new Promise(resolve => {
          setGrid(current => produce(current, draft => {
            draft[oldY][oldX].objs = ["empty"];
            draft[oldY][oldX].id = 3;
            draft[randY][randX].objs = ["hedgehog"];
            draft[randY][randX].id = 1;
            resolve();
          }));
        });

        this.#_y = randY;
        this.#_x = randX;
  
        await onPortal(grid[randY][randX].top, grid[randY][randX].left);
        return;
      }
  
      if (result.type === "question" || result.type === "food") {
        const
          nameOpacity = result.cell.objs[0],
          food = result.type === "question"
            ? ["apple", "mushroom"][getRandomInt(2)]
            : nameOpacity;
  
        await new Promise(resolve => {
          setGrid(current => produce(current, draft => {
            draft[oldY][oldX].objs = ["empty"];
            draft[oldY][oldX].id = 3;
            draft[newY][newX].objs = ["hedgehog"];
            draft[newY][newX].id = 1;
            resolve();
          }));
        });

        await onEat(nameOpacity, result.cell.id, food);
        return;
      }

      await new Promise(resolve => {
        setGrid(current => produce(current, draft => {
          draft[oldY][oldX].objs = ["empty"];
          draft[oldY][oldX].id = 3;
          draft[newY][newX].objs = ["hedgehog"];
          draft[newY][newX].id = 1;
          resolve();
        }));
      });
    });
  }  

  #analyzeCell(x, y) {
    const { grid } = Hedgehog.#_config;
    const cell = grid[y][x];

    let type;

    if (y < 1 || y > this.#_border || x < 1 || x > this.#_border) {
      type = "border";
    } else {
      const [obj0, obj1] = cell.objs;
  
      if (obj0 === "stone" || (obj0 === "question" && obj1 === "rip")) {
        type = "stone";
      } else if (obj0 === "portal") {
        type = "portal";
      } else if (obj0 === "apple" || obj0 === "mushroom") {
        type = "food";
      } else if (obj0 === "question") {
        type = "question";
      } else {
        type = obj0;
      }
    }

    return { type, cell };
  }

  #findAllEmptyCells(grid) {
    const coords = [];
    for (let y = 1; y <= this.#_border; y++) {
      for (let x = 1; x <= this.#_border; x++) {
        if (grid[y][x].objs[0] === "empty") {
          coords.push([y, x]);
        }
      }
    }
    return coords;
  }
  
  right() { this.#move(1, 0); }
  left() { this.#move(-1, 0); }
  up() { this.#move(0, -1); }
  down() { this.#move(0, 1); }
}
