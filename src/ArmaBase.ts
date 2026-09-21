export abstract class ArmaBase {
    private bala : number;
    private impacto : number;

     
    constructor(balaInicial:number, impactoInicial: number){
        this.bala = balaInicial
        this.impacto = impactoInicial 
    }

    public dispararBala(): number{
        const impactoCausado = this.bala > 0 ? this.impacto : 0;
        this.bala = this.bala > 0 ? this.bala -1 : 0;
        return impactoCausado;
    }

}