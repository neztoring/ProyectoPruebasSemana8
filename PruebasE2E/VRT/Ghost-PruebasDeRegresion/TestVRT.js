const compareImages = require("resemblejs/compareImages")
const fs = require('fs');
const path = require('path');
const { Console } = require("console");
const config = require("./config.json");

const { options ,versionsCompare} = config;

let resultInfo = []


function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
{
    const childfork = require('child_process');
    return childfork.exec(cmd, handler);
}


function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
  }


  function getFiles(path) {
        return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path+'/'+file).isFile();
      });
  }


function getInfoEscenarios(directorioResultados){
    console.log("Buscando Info Escenarios");
    let infoEscenarios=[];
    try{
        var modulos=getDirectories(directorioResultados);
        console.log(directorioResultados);
        console.log(modulos);
        for (let i = 0; i < modulos.length;i++) {

            console.log(directorioResultados+'/'+modulos[i]);
            var escenarios=getDirectories(directorioResultados+'/'+modulos[i]);
            console.log(escenarios);
            for (let j = 0; j < escenarios.length; j++) {
                
                console.log(directorioResultados+'/'+escenarios[j]);
                var imagenes=getFiles(directorioResultados+'/'+modulos[i]+'/'+escenarios[j]);
                console.log(imagenes);
                if(imagenes!=null &&imagenes.length>0){
                infoEscenarios.push({
                    modulo:modulos[i],
                    escenario:escenarios[j],
                    imagenes:imagenes
                })     
               }
            }
        }   

    }catch(e){}
    
    console.log(infoEscenarios);

    return infoEscenarios;
}



const promiseIntsall = new Promise((resolve, reject) => {

    //Install de los proyectos wque contienen los escenarios de pruebas para cada una de las versiones de Ghost
    exec('cd '+versionsCompare.before+'  & npm install');
    exec('cd '+versionsCompare.after+' & npm install');

    //Ejecuta cada uno de los escenarios(archivos .js) para la versión anterior
    var escenariosBefore=getFiles(versionsCompare.before+'escenarios');
    for (let k=0;k<escenariosBefore.length;k++){
        exec('cd '+versionsCompare.before+'escenarios'+ '& node '+escenariosBefore[k]);
    }

    //Ejecuta cada uno de los escenarios(archivos .js) para la versión posterior
    var escenariosAfter=getFiles(versionsCompare.after+'escenarios');
    for (let l=0;l<escenariosAfter.length;l++){
        exec('cd '+versionsCompare.after+'escenarios'+ ' & node '+escenariosAfter[l]);
    }



    setTimeout(
		() => escenariosBefore.length > 0
			? resolve('OK')
			: reject(new Error('No hay Archivos a ejecutar')),
		60000
	);

});





async function compareImageTest(){


    let datetime = new Date().toISOString().replace(/:/g,".");

    if (!fs.existsSync(`./results/playwright/${datetime}`)){
          fs.mkdirSync(`./results/playwright/${datetime}`, { recursive: true });
      }
  
      if (!fs.existsSync(`./results/playwright/${datetime}/report`)){
          fs.mkdirSync(`./results/playwright/${datetime}/report`, { recursive: true });
      }

      var imagenesv1=getInfoEscenarios(versionsCompare.before+'resultado');
      var imagenesv2=getInfoEscenarios(versionsCompare.after+'resultado');
  
      for (let i=0;i<imagenesv1.length;i++){
          
          let modulo=imagenesv1[i].modulo
          let nombreEscenario= imagenesv1[i].escenario;
   
          for (let j=0;j<imagenesv1[i].imagenes.length;j++){
              let nombreImagen=imagenesv1[i].imagenes[j];
                  const data = await compareImages(
                      fs.readFileSync(versionsCompare.before+'resultado\\'+modulo+'\\'+nombreEscenario+'\\'+nombreImagen),
                      fs.readFileSync(versionsCompare.after+'resultado\\'+modulo+'\\'+nombreEscenario+'\\'+nombreImagen),
                      options
                  );
  
                      
                  resultInfo.push({
                      isSameDimensions: data.isSameDimensions,
                      dimensionDifference: data.dimensionDifference,
                      rawMisMatchPercentage: data.rawMisMatchPercentage,
                      misMatchPercentage: data.misMatchPercentage,
                      diffBounds: data.diffBounds,
                      analysisTime: data.analysisTime,
                      modulo:{modulo},
                      escenario:{nombreEscenario},
                      nombreImagen:{nombreImagen},
                      pathBefore:'..\\..\\..\\..\\'+versionsCompare.before+'resultado\\'+modulo+'\\'+nombreEscenario+'\\'+nombreImagen,
                      pathAfter:'..\\..\\..\\..\\'+versionsCompare.after+'resultado\\'+modulo+'\\'+nombreEscenario+'\\'+nombreImagen,
                      pathCompare: '..\\compare-'+nombreEscenario+'-'+nombreImagen
  
                  }
                  
                  )
                  fs.writeFileSync(`./results/playwright/${datetime}/compare-${nombreEscenario}-${nombreImagen}`, data.getBuffer());
              }
  
          fs.writeFileSync(`./results/playwright/${datetime}/report/report_${nombreEscenario}.html`, createReport(datetime, resultInfo));
          fs.copyFileSync('./index.css', `./results/playwright/${datetime}/report/index.css`);
          resultInfo = [];
      }
  
      console.log('------------------------------------------------------------------------------------')
      console.log("Execution finished. Check the report under the results folder")
  
    
  }



function browser(b, info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="${info.pathBefore}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="${info.pathAfter}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="${info.pathCompare}" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
              
            ${resInfo.map(compareInfo=>browser('Chrome', compareInfo))}

         
            
            </div>
        </body>
    </html>`
}


promiseIntsall.then(result=>compareImageTest()).catch(error => console.error(error));

