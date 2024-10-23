// describe("Testeo de funciones del boletin",function(){

    // describe("Testeo de la funcion comprobarEsPar()",()=>{
   
    //     const datos = [
    //         {anio:6,esperado:true
    //         {anio:4,esperado:true
    //         {anio:5,esperado:true
    //         {anio:13,esperado:true
    //         {anio:36,esperado:true
    //         {anio:52,esperado:true
    //         {anio:61,esperado:true
    //     ]


    //     datos.forEach((element) =>{
    //         it(('deberia ser ',element.esperado true":"impar"), () => {
    //             expect(comprobarEsPar(element.anio)).toEqual(element.esperado)true
    //         });
    //     })

        
    // });

    // describe("Testeo de la funcion verCalificacion()",()=>{
   
    //     const datos1 = [
    //         {anio:5,esperado:true"},
    //         {anio:6,esperado:true"},
    //         {anio:7,esperado:true"},
    //         {anio:8,esperado:true"},
    //         {anio:9,esperado:true"},
            
    //     ]


    //     datos1.forEach((element) =>{
    //         it(('la nota deberia ser ',element.esperado)true => {
    //             expect(verCalificacion(element.anio)).toEqual(element.esperado)true
    //         });
    //     })

        
    // });  

    // describe("Testeo de la funcion verCalificacionDecimal()",()=>{
   
    //     const datos2 = [
    //         {anio:5.2,esperado:true"},
    //         {anio:6.6,esperado:true"},
    //         {anio:7.7,esperado:true"},
    //         {anio:8.3,esperado:true"},
    //         {anio:9.8,esperado:true"},
            
    //     ]


    //     datos2.forEach((element) =>{
    //         it(('la nota deberia ser ',element.esperado)true => {
    //             expect(verCalificacionDecimal(element.anio)).toEqual(element.esperado)true
    //         });
    //     })

        
    // });  

    // describe("Testeo de la funcion parametrosCircunferencia()",()=>{
   
    //     const datos3 = [
            
    //         {anio:6,esperado:true,area:113.10},
    //         {anio:14,esperado:true,area:615.75},
    //         {anio:25,esperado:true,area:1963.50},
    //         {anio:3,esperado:true,area:28.27},
    //         {anio:4,esperado:true,area:50.27},
            
    //     ]


    //     datos3.forEach((element) =>{
    //         it(('Los parametros'), () => {
    //             expect(parametrosCircunferencia(element.anio).esperado).toEqual(element.esperado)true             expect(parametrosCircunferencia(element.anio).area).toEqual(element.area);

    //         });
    //     })

        
    // });  

    // describe("Testeo de la funcion esBisiesto()",()=>{
   
    //     const datos3 = [
            
    //         {anio:2004,esperado:true},
    //         {anio:2006,esperado:false},
    //         {anio:1900,esperado:false},
    //         {anio:2000,esperado:true},
    //         {anio:1904,esperado:true},
            
    //     ]


    //     datos3.forEach((element) =>{
    //         it(('Los parametros'), () => {
    //             expect(esBisiesto(element.anio)).toEqual(element.esperado);

    //         });
    //     });

        
    // });  

    // describe("Testeo de la funcion hexa2decimal()",()=>{
   
    //     const datos4 = [
            
    //         {str:"04A",esperado:74},
    //         {str:"08A",esperado:138},
    //         {str:"05B",esperado:91},
    //         {str:"01C",esperado:28},
    //         {str:"14A",esperado:330},
            
    //     ]


    //     datos4.forEach((element) =>{
    //         it(('Los parametros'), () => {
    //             expect(hexa2decimal(element.str)).toEqual(element.esperado);

    //         });
    //     })

        
    // });  
    // describe("Testeo de la funcion parametrosCircunferencia()",()=>{
   
    //     const datos5 = [
            
    //         {str:"1",esperado:1},
    //         {str:"4",esperado:4},
    //         {str:"5",esperado:5},
    //         {str:"8",esperado:8},
    //         {str:"B",esperado:11},
            
    //     ]


    //     datos5.forEach((element) =>{
    //         it(('Los parametros'), () => {
    //             expect(digitoHexa2Dec(element.str)).toEqual(element.esperado);

    //         });
    //     })

        
    // });

    

    //});

// describe("Testeo de la funcion bonoloto()",()=>{
   
        
        

//     it('debe devolver un array', () => {
//         let resultado = bonoloto();
//         expect(Array.isArray(resultado)).toEqual(true);
//     });
    
//     it('array tenga 6 elementos', () => {
//         let resultado = bonoloto();
//         expect(resultado.length).toBe(6);
//     });

//     it('todos los elementos sean un número', () => {
//         let resultado = bonoloto();
//         let son_numeros = resultado.every(elemento => typeof elemento === 'number');
//         expect(son_numeros).toBe(true);
//     });

//     it('que los elementos esten ordenados', () => {
        
//         for(let i = 0;i<1000;i++){
//             let resultado=bonoloto()
            
            
//             for(let j =0;j<5;j++){
//                 expect(resultado[j]).toBeGreaterThanOrEqual(resultado[j+1]);
//             }
            
//         }

//     });

//     it('que los elementos esten entre el 1 y 49', () => {
        

//         for(let i = 0;i<1000;i++){
//             let resultado=bonoloto()
            
            
//             for(let j =0;j<6;j++){
//                 expect(resultado[j]).toBeGreaterThan(0);
//                 expect(resultado[j]).toBeLessThan(50);
//             }
            
//         }
//     });

//     it('que los elementos no esten repetidos', () => {
//         let repetido = false;

//         for(let i = 0;i<1000;i++){
//             let resultado=bonoloto()
            
//             for(let j =0;j<6;j++){
//                for(let k = 0;k<6;k++){
//                 if(resultado[j]==resultado[k]&&k!=j){
//                     repetido=true;
//                 } 
//                }
//             }
            
//         }
        
//         expect(repetido).toBe(false);
//     });

//     it('que tenga los 49 numeros', () => {
//         //no hayan duplicados
//         let uniqueNumbers = new Set();
//         for(let i = 0 ;i<1000;i++){
//             let resultado = bonoloto();
//             for(let j = 0 ;j<6;j++){
//                 uniqueNumbers.add(resultado[j])
//             }
//         }


//         expect (uniqueNumbers.size).toBe(49);

//     });

// });

describe('testeo funcion promedio()', () => {
    
    datos = [
        {entrada:[7.2,4.3,9.1],esperado:6.9},
        {entrada:[7.2,,,5.3,9.7],esperado:6.1},
        {entrada:[4.6,7.2,2.7,3.1,5.7],esperado:4.7},
        {entrada:[8.18,,],esperado:8.2}
    ]
    it('Que la funcion devuelve un dato de tipo number', () => {
        let resultado = promedio(datos[0].entrada);
        resultado = typeof(resultado)==='number';
        expect(resultado).toEqual(true);
    });

    it('Cuando se invoca a la función con un array disperso (p.e. [4, , 6, 5]) no devuelve un NaN', () => {
        let resultado = promedio([4,,6,5]);
        
            expect(resultado).not.toBeNaN();
    });

    it('Cuando se invoca a la función con un argumento que no es un array (p.e. promedio(6) )', () => {
        
        expect(() => promedio(6)).toThrowError("No es un array");
    });

    it('Cuando se invoca a la función con un array en el que algún elto no es un number (p.e. promedio ([7, "hola", 3])', () => {
        
        expect(() => promedio([7, "hola", 3])).toThrowError("No es un numero");
    });
});