import {describe, test, expect } from "vitest";
import { Soldado } from "../src/Soldado";

describe("pueba de la clase Soldado"), () => {
    test("debe morir de un disparo", () => {

        //aca se crea el soldado
        const soldado = new Soldado();

        //aca como que se confirma que nace
        expect(soldado.Vivo()).toBe(true)

        //
        soldado.RecibirDisparo();
    })
}