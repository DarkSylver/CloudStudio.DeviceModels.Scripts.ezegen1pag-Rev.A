function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();
    Object.keys(jsonPayload).forEach(function(key){
        env.log(key,jsonPayload[key])
    })

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

    // Procesar JSON de EZE GEN1 (hasta 200 registros por sensor por call)


    //----------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------


  

        //variables PAG ABAJO
        var aromatico = device.endpoints.byAddress(1);
        var aguarras1 = device.endpoints.byAddress(2);
        var aguarras2 = device.endpoints.byAddress(3);
        var recuperado = device.endpoints.byAddress(4);
        var soya = device.endpoints.byAddress(5);
        var xilol = device.endpoints.byAddress(6);

        var tiempoUnix = jsonPayload.timestamp;
        var fecha = new Date(tiempoUnix * 1000);
        var timestamp = fecha.toISOString();
        env.log("LA FECHA ES ----->   ",timestamp);

        
        



       
        
 

/*-------------------------------------------------------------------------------------------------------------------

SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG

-------------------------------------------------------------------------------------------------------------------*/
// Sentencia NODE-RED Para todos los endpoints


if (jsonPayload.ser == "RUT955"){
            const datos = jsonPayload;
            var data = jsonPayload.data;

            const datosSeparados = jsonPayload.data.split(',');
            datosSeparados.forEach(dato => {
            env.log(dato.trim());
            });
            for (let i = 0; i < datosSeparados.length; i++) {
                    env.log("Valor  --> ",[i],datosSeparados[i]);
            }
            var dato3 =parseInt(datosSeparados[2]);
            var dato4 =parseInt(datosSeparados[7]);
            var dato5 =parseInt(datosSeparados[12]);
            var dato6 =parseInt(datosSeparados[17]);
            var dato7 =parseInt(datosSeparados[22]);
            var dato8 =parseInt(datosSeparados[27]);
            //env.log("Valor 3  --> ",dato3);
            //env.log("Time  --> ",timestamp);

            aromatico.updateVolumeSensorStatus(dato3,timestamp);
            env.log("Valor  --> ",dato3);
            
            aguarras1.updateVolumeSensorStatus(dato4,timestamp);
            env.log("Valor  --> ",dato4);

            aguarras2.updateVolumeSensorStatus(dato5,timestamp);
            env.log("Valor  --> ",dato5);

            recuperado.updateVolumeSensorStatus(dato6,timestamp);
            env.log("Valor  --> ",dato6);

            xilol.updateVolumeSensorStatus(dato7,timestamp);
            env.log("Valor  --> ",dato7);

            soya.updateVolumeSensorStatus(dato8,timestamp);
            env.log("Valor  --> ",dato8);
            
                            
                                                         
    }



  
}