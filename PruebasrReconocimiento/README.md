**3. Pruebas de Reconocimiento**
***********************
**3.2 Instrucciones para ejecutar las pruebas de reconocimiento usando Monkey testing con Cypress**

- Abrir una terminal y usar el comando cd para llegar a la carpeta *PruebasrReconocimiento*.
- Usar el comando npm install para instalar las dependencias necesarias para correr las pruebas.
   (Este paso puede tardar debido a que se descarga Cypress)
- Cambiar en el archivo **PruebasrReconocimiento/cypress/integration/monkey/smart-monkey.js** los valores de USERNAME y PASSWORD con los accesos de su cuenta de ghost.
- En un cmd ubicarse en el directorio **PruebasrReconocimiento** y correr el comando **npx cypress run** para **correr el monkey test
- Los resultados se encontrarán en el archivo **PruebasrReconocimiento/results/monkey-execution.html
- Se pueden encontrar los videos en la carpeta **PruebasrReconocimiento/cypress/videos**

**3.2 Instrucciones para ejecutar las pruebas de reconocimiento usando Ripper testing con Pupeteerr**

- Abrir una terminal y usar el comando cd para llegar a la carpeta pruebas de reconocimiento.
- Usar el comando npm install para instalar las dependencias necesarias para correr las pruebas.
   (Este paso puede tardar debido a que se descarga Cypress)
- Cambiar en el archivo config.json los valores de indentification y password con los accesos de su cuenta de ghost.
- Correr el comando node index.js para correr el monkey test
- Los resultados se encontraran en la carpeta results