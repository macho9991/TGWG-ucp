import {describe, test, expect} from "vitest";
import {Buque} from "../src/Buque";
import {Tanque} from "../src/Tanque"
import {Pistola} from "../src/Pistola"

describe("pruebas del buque", () => {
    test("debe nacer y morir de 3 disparos", () => {

        const buque = new Buque("AirShip");
        const tanque = new Tanque("Panzer");
        const pistola = new Pistola();


        expect(buque.Vivo()).toBe(true);
        
        tanque.Disparar(buque, pistola);

        expect( buque.Vivo()).toBe(true);
       
        tanque.Disparar(buque,pistola);
        
        expect(buque.Vivo()).toBe(true);
       
        tanque.Disparar(buque,pistola);

        expect(buque.Vivo()).toBe(false);
        

    })
})