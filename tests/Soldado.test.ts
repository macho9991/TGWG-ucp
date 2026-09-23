import {describe, test, expect } from "vitest";
import {Soldado} from "../src/Soldado";
import {Buque} from "../src/Buque"
import {Pistola} from "../src/Pistola"
import {Escudo} from "../src/Escudo";

describe("pueba de la clase Soldado", () => {

    test("con escudo debe sobrevivir a un disparo ", () => {

        //aca se crea el soldado
        const soldado = new Soldado();
        const buque = new Buque("AirShip");
        const pistola = new Pistola();
        const escudo = new Escudo(50);
        
        soldado.asignarEscudo(escudo);


        expect(soldado.Vivo()).toBe(true);
        
        buque.Disparar(soldado, pistola);
       
        expect(soldado.Vivo()).toBe(true);


    })
});
