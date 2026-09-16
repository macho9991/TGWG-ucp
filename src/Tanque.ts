class Tanque {
    private vida: number;
    private destruccion: boolean = false;

    constructor(
        public modelo: string; 
        public vidamax: number = 1000;

    ){
        this.vida = vidamax;
    }

    recibirBala:(daño: number): void {
        

    } 



}