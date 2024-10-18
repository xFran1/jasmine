describe("Testeo de funciones del boletin",function(){

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

    describe("Testeo de la funcion esBisiesto()",()=>{
   
        const datos3 = [
            
            {anio:2004,esperado:true},
            {anio:2006,esperado:false},
            {anio:1900,esperado:false},
            {anio:2000,esperado:true},
            {anio:1904,esperado:true},
            
        ]


        datos3.forEach((element) =>{
            it(('Los parametros'), () => {
                expect(esBisiesto(element.anio)).toEqual(element.esperado);

            });
        });

        
    });  

    describe("Testeo de la funcion hexa2decimal()",()=>{
   
        const datos4 = [
            
            {str:"04A",esperado:74},
            {str:"08A",esperado:138},
            {str:"05B",esperado:91},
            {str:"01C",esperado:28},
            {str:"14A",esperado:330},
            
        ]


        datos4.forEach((element) =>{
            it(('Los parametros'), () => {
                expect(hexa2decimal(element.str)).toEqual(element.esperado);

            });
        })

        
    });  
    describe("Testeo de la funcion parametrosCircunferencia()",()=>{
   
        const datos5 = [
            
            {str:"1",esperado:1},
            {str:"4",esperado:4},
            {str:"5",esperado:5},
            {str:"8",esperado:8},
            {str:"B",esperado:11},
            
        ]


        datos5.forEach((element) =>{
            it(('Los parametros'), () => {
                expect(digitoHexa2Dec(element.str)).toEqual(element.esperado);

            });
        })

        
    });

});