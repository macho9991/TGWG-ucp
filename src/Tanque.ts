import {UnidadMilitar} from "./UnidadMilitar";

export class Tanque extends UnidadMilitar{
    constructor (public modelo: string){
        super(2)
    }
}