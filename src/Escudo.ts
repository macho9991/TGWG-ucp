export class Escudo {
    private porcentajeEsc : number;

    constructor(porcentaje: number){

    this.porcentajeEsc = porcentaje;

 }
 public reducirDanio (daño: number): number{
    return danio *(1-this.porcentajeEsc/100)
 }
}
 