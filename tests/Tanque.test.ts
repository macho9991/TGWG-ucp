import {describe, test, expect} from "vitest";
import {Buque} from "../src/Buque";
import {Tanque} from "../src/Tanque"

describe("pruebas del buque", () => {
    test("debe nacer y morir de 3 disparos", () => {

        const buque = new Buque("AirShip");
        const tanque = new Tanque("Panzer");


        expect(tanque.Vivo()).toBe(true);
        
        buque.Disparar(buque);

        expect(tanque.Vivo()).toBe(true);
       
        
        

    })
})