import {describe, test, expect} from "vitest";
import {Buque} from "../src/Buque";
import {Soldado} from "../src/Soldado"
import {Pistola} from "../src/Pistola"


describe("pruebas del buque", () => {
    test("debe nacer y morir de 3 disparos", () => {

        const buque = new Buque("AirShip");
        const soldado = new Soldado();
        const pistola = new Pistola();


        expect(buque.Vivo()).toBe(true);
        
        soldado.Disparar(buque,pistola);
       
        expect(buque.Vivo()).toBe(true);

        soldado.Disparar(buque,pistola);
       
        expect(buque.Vivo()).toBe(true);

        soldado.Disparar(buque,pistola);
       
        expect(buque.Vivo()).toBe(false);
 


        
        

    })
})
