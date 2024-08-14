import fs from 'fs';
//caso de uso, metodo executed y devolvera un boolean
export interface SaveFileUseCase{
    execute:(option:Options)=>boolean;
}
//opciones del caso de uso
export interface Options{
    fileContent:string;
    destination?:string;
    fileName?:string;
}


export class SaveFile implements SaveFileUseCase{
    constructor(){
        //storage repo
    }

    execute ({
        fileContent,
        destination='outputs',
        fileName='table'
    }: Options):boolean{

        try {
            fs.mkdirSync(destination,{recursive:true});
            fs.writeFileSync(`${destination}/${fileName}.txt`,fileContent);
            console.log('archivo creado')  
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
        
    }
}