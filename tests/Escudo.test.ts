import {describe, test, expect} from "vitest";
import {Escudo} from "../src/Escudo";

describe("prueba del escudo", () => {
    test("debe reducir el daño un 50%", ()=>{
        const escudo = new Escudo(50); //esto basicamente es como que crea un escudo que reduce el daño en 50 %
        expect(escudo.reducirDanio(10)).toBe(5);
    })
})