import {describe, test, expect} from "vitest";
import {Buque} from "../src/Buque";
import {Tanque} from "../src/Tanque"

describe("pruebas del buque", () => {
    test("debe nacer y morir de 3 disparos", () => {

        const buque = new Buque("AirShip");
        const tanque = new Tanque("Panzer");


        expect(buque.Vivo()).toBe(true);
        
        tanque.Disparar(buque);

        expect( buque.Vivo()).toBe(true);
       
        tanque.Disparar(buque);
        
        expect(buque.Vivo()).toBe(true);
       
        tanque.Disparar(buque);

        expect(buque.Vivo()).toBe(false);
        

    })
})