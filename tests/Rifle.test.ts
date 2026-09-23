import {describe, test, expect} from "vitest";
import {Rifle} from "../src/Rifle"

describe("pruebas del rifle", () => {
    test("debe hacer daño cuando tiene munición", () => {
        const rifle = new Rifle();
        const danio =  rifle. dispararBala();
        expect(danio).toBe(2);

    })
    test("sin municion no debe hacer daño", ()=>{
        const rifle = new Rifle();
        for(let i=0; i<5; i++){
            rifle.dispararBala();//el for repite el disparo 5 veces
        }
        const danio= rifle.dispararBala();
        expect(danio).toBe(0);
    })
})