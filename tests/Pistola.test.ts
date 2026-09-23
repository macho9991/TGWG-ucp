import {describe, test, expect} from "vitest";
import {Pistola} from "../src/Pistola"

describe("pruebas de la pistola", () => {
    test("debe hacer daño cuando tiene munición", () => {
        const pistola = new Pistola();
        const danio =  pistola. dispararBala();
        expect(danio).toBe(1);

    })
    test("sin municion no debe hacer daño", ()=>{
        const pistola = new Pistola();
        for(let i=0; i<10; i++){
            pistola.dispararBala();//el for repite el disparo 10 veces
        }
        const danio= pistola.dispararBala();
        expect(danio).toBe(0);
    })
})