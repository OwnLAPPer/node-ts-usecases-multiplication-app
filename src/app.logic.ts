import fs from 'node:fs';
import { yarg } from './config/plugins/args.plugin';

const {b:base,s:mostrarTabla,l:limit}=yarg;

const Tablamultiplicar =(base:number,showTable:boolean,limit:number)=>{
    const respuestatxt:string[]=[];

    const header:string= `
=====================
    tabla del ${base} 
===================== \n`

    if (showTable) {
        console.log(header)
    }
    
    
    for (let index = 1; index < limit+1; index++) {
            respuestatxt.push(`${base} X ${index} = ${index*base}`);
        if (showTable) {
                console.log(`${yarg.b} X ${index} = ${index*base}`) 
        }
            
    } 

    const path ='outputs';
    fs.mkdirSync(path,{recursive:true});
    fs.writeFileSync(`${path}/tabla-${base}.txt`,header+respuestatxt.join('\n'))
}


Tablamultiplicar(base,mostrarTabla,limit);