function comprobarEsPar(n){
    if(n%2==0){
        return true
    }else{
        return false
    }
}
function verCalificacion(n){
    switch(n){
        
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            return "Insuficiente"    
        break;
        
        case 5:
            return "Suficiente"    
        break;
        case 6:
            return "BIEN"  
        break;
        
        case 7:
        case 8:
            return "NOTABLE"    
        break;
        
        case 9:
        case 10:
            return "SOBRESALIENTE"    
        break;
        default:
            return "VALOR INCORRECTO"
    }
}

function verCalificacionDecimal(n){
       
    if(n>=0&&n<5){
        return ("Insuficiente")    

    }else if(n>=5&&n<6){
        return ("Suficiente")    

    }else if(n>=6&&n<7){
        return ("BIEN")    

    }else if(n>=7&&n<9){
        return ("NOTABLE")    

    }else if(n>=9&&n<=10){
        return("SOBRESALIENTE")    

    }else {
        return ("VALOR INCORRECTO")

    }
    
    
    
}


function parametrosCircunferencia(r){
    
    let perimetro = Number((2*Math.PI*r).toFixed(2));
    let area = Number((Math.PI*r*r).toFixed(2))
    
    let objeto ={perimetro:perimetro,area:area} ;
    return objeto;
}

function esBisiesto(n){
    if(n%4==0){
        if(n<400){
            return true;
        }else{
            if(n%100==0){
                if(n%400==0){
                    return true
                }else{
                    return false
                }
            }else{
                return true
            }
        }
    }else{
        return false
    }
}

function hexa2decimal (str){
    let arrayHexadecimal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let numFinal = 0 ;
    str=str.toUpperCase();
    for(let i = 0 ;i<str.length;i++){
        let caracter = str.charAt(i);
        let num = (arrayHexadecimal.indexOf(caracter));
        numFinal+=(num*(Math.pow(16,str.length-1-i)))
    }
    return numFinal;
}


function digitoHexa2Dec(x){
    let arrayHexadecimal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
       if(arrayHexadecimal.includes(x)){
        return arrayHexadecimal.indexOf(x);

       } else{
        throw new Error("Dígito hexadecimal no válido");
         
       }
    
}

function bonoloto(){
    let array=[];
    let numero_random=0;
    let valido=true;

    for(let i = 0;i<6;i++){

        do{
            valido = true;
            numero_random = parseInt((Math.random()*49)+1);

            for(let j = 0 ;j<array.length;j++){
                if(array[j]==numero_random){
                    valido=false;
                }

            }

        }while(!valido);
        array[i]=numero_random;
        array.sort(function(a, b) {return b - a})

    }
    return array;



}

function promedio(array){
    // if(!Array.isArray=='array'){
    //  throw new error("No es un array");
    // }
    if(!(array instanceof Array)){
        throw new Error("No es un array");

    }
    array.forEach(element => {
        if(typeof element==='number'){
            
        }else{
            throw new Error("No es un numero");
        }
    });
    let media = 0;
    array.forEach(element => {
        media+=element;    
    });
            
            
    

        
    

    return media/array.length;
    
}


