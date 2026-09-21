import {describe, test, expect} from "vitest";
import {Buque} from "../src/Buque";

describe("pruebas del buque", () => {
    test("debe nacer y morir de 3 disparos", () => {

        const buque = new Buque("AirShip");

        expect(buque.Vivo()).toBe(true);
        buque.RecibirDisparo();
       
        expect(buque.Vivo()).toBe(true);
        buque.RecibirDisparo();

        expect(buque.Vivo()).toBe(true);
        buque.RecibirDisparo();


        
        expect(buque.Vivo()).toBe(false);
        
        

    })
})
