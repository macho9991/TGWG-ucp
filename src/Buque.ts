import {UnidadMilitar} from "./UnidadMilitar";

export class Buque extends UnidadMilitar{
    constructor (public modelo: string){
        super(3)
    }
}