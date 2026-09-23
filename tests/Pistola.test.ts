import {describe, test, expect} from "vitest";
import {Pistola} from "../src/Pistola"

describe("pruebas de la pistola", () => {
    test("debe hacer daño cuando tiene munición", () => {
        const pistola = new Pistola();
        const danio =  pistola. dispararBala();
        expect(danio).toBe(1);
    })
})