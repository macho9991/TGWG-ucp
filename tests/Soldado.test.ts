import {describe, test, expect } from "vitest";
import {Soldado} from "../src/Soldado";
import {Buque} from "../src/Buque"

describe("pueba de la clase Soldado", () => {

    test("debe morir de un disparo", () => {

        //aca se crea el soldado
        const soldado = new Soldado();
        const buque = new Buque("AirShip");


        expect(soldado.Vivo()).toBe(true);
        
        buque.Disparar(soldado);
       
        expect(soldado.Vivo()).toBe(false);


    })
});
