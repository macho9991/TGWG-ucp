import {Escudo} from "./Escudo";
export  abstract class UnidadMilitar{
    private vida: number; 
    private escudo: Escudo;

    //aca cambie porque estaba mal antes, no era metodo, no estaba creado
    constructor(VidaInicial:number){
        this.vida = VidaInicial;
        this.escudo = new Escudo(0);
    }

    public asignarEscudo(escudo:Escudo): void {
          this.escudo = escudo;
    }

    //tenia un error de tipografia
    public Disparar(objetivo : UnidadMilitar): void{
        objetivo.recibirDisparo();
    }

     public recibirDisparo(): void{
       this.vida=this.vida-1;
    }


    //me falto el ? que es el que evalua la condicion y la operacion matematica
    public Vivo(): boolean{
        return this.vida > 0;
    }

}