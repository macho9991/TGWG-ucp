import {UnidadMilitar}  from "./UnidadMilitar"

//aca es como que digo que el soldado hereda lo de unidad militar
export class Soldado extends UnidadMilitar{

    //el super ese indica como la vida del soldado
    //esta parte se va a ejecutar ni bien nace el soldado
    constructor(){super(1)

    }
 }
