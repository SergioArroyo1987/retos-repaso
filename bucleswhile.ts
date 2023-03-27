 function haseven(b:number[]):boolean{
    let devolver=false;
    let a=0;
    while(a<b.length){
        
        if(b[a]%2==0){
            devolver=true;
        }
       a++; 
    }
    return devolver;
}
function startwithm(array:string[]):boolean{
    let devolver=false;
    let a=0;
    while(a<array.length){
        if(array[a].charAt(0)=="m"){
            devolver=true;
        }else{
            devolver=false;
        }
        a++;
    }
    return devolver;
}