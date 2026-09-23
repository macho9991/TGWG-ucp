import {describe, test, expect } from "vitest";
import {Soldado} from "../src/Soldado";
import {Buque} from "../src/Buque"
import {Pistola} from "../src/Pistola"

describe("pueba de la clase Soldado", () => {

    test("debe morir de un disparo", () => {

        //aca se crea el soldado
        const soldado = new Soldado();
        const buque = new Buque("AirShip");
        const pistola = new Pistola();


        expect(soldado.Vivo()).toBe(true);
        
        buque.Disparar(soldado, pistola);
       
        expect(soldado.Vivo()).toBe(false);


    })
});
