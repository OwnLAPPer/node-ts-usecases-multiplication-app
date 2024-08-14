
//reglas qeu tiene que cumplir
export interface CreateTableUseCase{
    // sera executed y lo que tiene que regresar es un string
    execute:( option:CreateTableOptions)=>string;
}

export interface CreateTableOptions{
    base:number,
    limit:number,
}

export class CreateTable implements CreateTableUseCase{

    constructor(){
        //DI- dependency injection

    }

    //metodo caso de uso
    execute({base,limit}:CreateTableOptions){
        let respuestatxt='';
        for (let index = 1; index < limit+1; index++) {
            respuestatxt+=(`${base} X ${index} = ${index*base}\n`);  
        } 
        return respuestatxt;
    }
}   