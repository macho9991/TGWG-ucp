import { describe, it, expect, test } from "vitest";
import { Tanque } from "../src/Tanque";

describe("pruebas del tanque", () => {
    test("debe nacer y morir de 2 disparos", () => {
        const tanque = new Tanque("Panzer");
        expect(tanque.Vivo()).toBe(true);
        tanque.RecibirDisparo();
       
        expect(tanque.Vivo()).toBe(true);
        tanque.RecibirDisparo();

        
        expect(tanque.Vivo()).toBe(false);
        
        

    })
})
