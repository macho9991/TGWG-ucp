export class Tanque {
    private vida: number;
    private destruccion: boolean = false;

    constructor(
        public modelo: string, 
        public vidamax: number = 100,

    ){
        this.vida = vidamax;
    }

    recibirBala(daño = 1): void {
    this.vida = Math.max(0, this.vida - daño);
    
    } 



}