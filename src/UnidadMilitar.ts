export class UnidadMilitar{
    private vida: number; 

    //aca cambie porque estaba mal antes, no era metodo, no estaba creado
    constructor(VidaInicial:number){
        this.vida = VidaInicial
    }

    //tenia un error de tipografia
    public RecibirDisparo(): void{
        this.vida = this.vida > 0 ? this.vida -1 : 0;
    }

    //me falto el ? que es el que evalua la condicion y la operacion matematica
    public Vivo(): boolean{
        return this.vida > 0;
    }

}