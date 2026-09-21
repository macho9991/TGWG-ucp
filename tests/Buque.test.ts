import {describe, test, expect} from "vitest";
import {Buque} from "../src/Buque";
import {Soldado} from "../src/Soldado"

describe("pruebas del buque", () => {
    test("debe nacer y morir de 3 disparos", () => {

        const buque = new Buque("AirShip");
        const soldado = new Soldado();

        expect(buque.Vivo()).toBe(true);
        
        soldado.Disparar(buque);
       
        expect(buque.Vivo()).toBe(true);
 


        
        

    })
})
