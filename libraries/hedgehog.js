import { HedgehogBack } from "../utils/game/hedgehogBack";
import { HedgehogStorage } from "../utils/game/hedgehogStorage";
import { randomInt } from "../utils/randomInt";
import { deepCopy } from "../utils/deepCopy";

export class Hedgehog {
    #_grid;
    #_y;
    #_x;

    constructor() {
        HedgehogStorage.current = this;

        const grid = HedgehogBack.getGrid();
        this.#_grid = deepCopy(grid);

        const { y, x } = this.#findHedgehog();
        this.#_y = y;
        this.#_x = x;
    }

    #findHedgehog() {
        for (let y = 1; y <= this.#_grid.length - 2; y++) {
            for (let x = 1; x <= this.#_grid.length - 2; x++) {
                if (this.#_grid[y][x] === "hedgehog") {
                    return { y, x };
                }
            }
        }
    }

    #analyzeCell(y, x) {
        let obj = this.#_grid[y][x];

        if (obj === "question") {
            obj = ["apple", "mushroom", "stone"][randomInt(3)];
        }

        return obj;
    }

    #findRandomEmpty() {
        const coords = [];
        for (let y = 1; y <= this.#_grid.length - 2; y++) {
            for (let x = 1; x <= this.#_grid.length - 2; x++) {
                if (this.#_grid[y][x] === "empty") {
                    coords.push({ y, x });
                }
            }
        }
        
        return coords[randomInt(coords.length)];
    }

    #defineActions(nextObj, newY, newX) {
        const actions = [];
        let
            fromObj = { id: 0, obj: "empty" },
            from = { y: this.#_y, x: this.#_x },
            toObj = { id: 1, obj: "hedgehog" },
            to = { y: newY, x: newX };

        this.#_grid[from.y][from.x] = fromObj.obj;

        const angle = Math.atan2(from.x - to.x, to.y - from.y);
        actions.push(HedgehogBack.movement(to, angle));

        if (nextObj === "border" || nextObj === "stone") {
            actions.push(
                nextObj === "border"
                    ? HedgehogBack.deathHedgehog()
                    : [
                        HedgehogBack.deathHedgehog(),
                        HedgehogBack.cleaningCell(to)
                    ]
            );

            toObj.id = 404;
            toObj.obj = "rip";

            actions.push(
                HedgehogBack.changingGrid(fromObj, from, toObj, to),
                HedgehogBack.monumentInstallation(nextObj)
            );
        } else if (nextObj === "portal") {
            to = this.#findRandomEmpty();

            actions.push(
                HedgehogBack.teleportation(to),
                HedgehogBack.changingGrid(fromObj, from, toObj, to)
            );
        } else if (nextObj === "apple" || nextObj === "mushroom") {
            actions.push(
                HedgehogBack.cleaningCell(to),
                HedgehogBack.changingGrid(fromObj, from, toObj, to),
                HedgehogBack.renderingFoodBacklight(true, nextObj),
                HedgehogBack.backlight(),
                HedgehogBack.renderingFoodBacklight(false)
            );
        } else {
            actions.push(HedgehogBack.changingGrid(fromObj, from, toObj, to));
        }

        this.#_grid[to.y][to.x] = toObj.obj;
        this.#_y = to.y;
        this.#_x = to.x;

        return actions;
    }

    moveIn(newY, newX) {
        const
            nextObj = this.#analyzeCell(newY, newX),
            actions = this.#defineActions(nextObj, newY, newX);

        HedgehogBack.addToQueue(actions);
    }

    getGrid() {
        return Object.freeze(
            this.#_grid.map(row => Object.freeze([...row]))
        );
    }

    getPos() {
        return Object.freeze({
            y: this.#_y,
            x: this.#_x
        });
    }
}
