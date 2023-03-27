function evernumbers(numero:number){
var a:number;
    for(a=0;a<=numero;a++){
        if(a%2!=0){
            console.log(a);
            
        }
}}
function myrevert(array:number[]):number[]{
    let a=array.length;
    let devolver:number[]=[];
    let b=0;
    for (a;a<=0;a--){
        devolver.push(array[b])
        b++;
    }
    return devolver;

}
function israinbow(array:string[]){
    let colores=["rojo","naranja","amarillo","verde","azul","anil","violeta"];
    
    for(let a=0;a<array.length;a++){
        let c=false;
        for(let b=0;b<colores.length;b++){
            if(array[a]==colores[b]){
                console.log("El color:"+array[a]+" "+"esta en el arcoiris");
               c=true;
            }
        }
        if(c=false){
            console.log("El color:"+array[a]+" "+ "no esta en el arcoiris");
            
        }
    }
}
export function add(array:string[]):number{
    let devolver=0;
    for(let a=0;a<array.length;a++){
        devolver+=array[a].length;
    }
    return devolver;
}

