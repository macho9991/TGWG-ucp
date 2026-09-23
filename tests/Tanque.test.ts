import {describe, test, expect} from "vitest";
import {Buque} from "../src/Buque";
import {Tanque} from "../src/Tanque"
import {Pistola} from "../src/Pistola"

describe("pruebas del buque", () => {
    test("debe nacer y morir de 2 disparos", () => {

       
        const tanque = new Tanque("Panzer");
        const pistola = new Pistola();
        const buque = new Buque("Airship")


        expect(tanque.Vivo()).toBe(true);
        
        buque.Disparar(tanque, pistola);

        expect(tanque.Vivo()).toBe(true);
       
        buque.Disparar(tanque,pistola);
        

        expect(tanque.Vivo()).toBe(false);
        

    })
})