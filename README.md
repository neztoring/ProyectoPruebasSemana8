# **Descripción del contenido del repo:**
****
- El directorio [Pruebas E2E](https://github.com/neztoring/ProyectoPruebasSemana8/tree/main/PruebasE2E) contiene:

    - [Pruebas VRT](#1-pruebas-vrt)
    - [Pruebas E2E aplicando estrategias de generación de data](#2-pruebas-e2e-con-generación-de-data)

- El directorio [PruebasReconcimiento](https://github.com/neztoring/ProyectoPruebasSemana8/tree/main/PruebasrReconocimiento) contiene las [Pruebas de Reconocimiento Aleatorias/Exploratorias](#pruebas-de-reconocimiento)

- El directorio [Pruebas Manuales](https://github.com/neztoring/ProyectoPruebasSemana8/tree/main/PruebasManuales) contiene la [Pruebas Manuales]()

****
## Pruebas E2E:
****
### **1. Pruebas VRT**

  
#### **Pruebas e2e para tomar screenshots con Playwright**

La pruebas e2e para capturar los screenshots se realizaron utilizando la herramienta Playwright, Los escenarios se implementaron para ejecutarse en las versiones Ghost 3.42 y 5.18.

Para al ejecución de las Pruebas e2e para los screenshots y las Pruebas VRT se deben instalas las versiones de Ghost 3.42 y 5.18.
  
  **Ghost v3.42**
  
  - **Fuentes**: El proyecto se encuentra en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42**
  - **Configuración**: En el archivo **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.4\config.js** se define las propiedades usuario, password y url del ambiente donde se ejecutaran los escenarios de prueba
  - **Escenarios de pruebas** : Se encuentran en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42\escenarios**
  - **Screenshots**: Se encuentran en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42\resultado\[NombreModulo]\[NombreEscenario]**  **NombreModulo** ej: tag, post,member ect. **NombreEsceario** ej: CrearTagPositivo, CrearTagNegativo
  - **Pasos Para Ejecutar:** (Nota: La ejecución de las pruebas VRT incluyen esta ejecución)
      
        1. En el archivo PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.4\config.js colocar la URL de la version de Ghost 3.42 y el usuario y password registrado
        2. En un cmd ubicarse en el home del proyecten la ruta PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.4\ejecute el comando npm install
        3. Posterior a completar la instalación  de manera exitosa, ubicarse en el directrorio que contine los escenarios de prueba  ejecutar el comando PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42\escenarios
        4. Ejecutar el comando node TagCrearNegativo.js
        5. Después ejecutar el comando node TagCrearPositivo.js
        6. Validar la generación de los screenshots en las rutas PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3 42\resultado\tag\CrearTagNegativo y **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3 42\resultado\tag\CrearTagPositivo respectivamente
  
**Ghost v5.18**

  - **Fuentes**: El proyecto se encuentra en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18**
  - **Configuración**: En el archivo **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\config.js** se define las propiedades usuario, password y url del ambiente donde se ejecutaran los escenarios de prueba
  - **Escenarios de pruebas** : Se encuentran en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\escenarios**
  - **Screenshots**: Se encuentran en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\resultado\[NombreModulo]\[NombreEscenario]**  **NombreModulo** ej: tag, post,member ect. **NombreEsceario** ej: CrearTagPositivo, CrearTagNegativo
  - **Pasos Para Ejecutar:** (Nota: La ejecución de las pruebas VRT incluyen esta ejecución)
  
        1. En el archivo PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\config.js colocar la URL de la version de Ghost 5.18 y el usuario y password registrado
        2. En un cmd ubicarse en el home del proyecten la ruta PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\ ejecute el comando npm install
        3. Posterior a completar la instalación  de manera exitosa, ubicarse en el directrorio que contine los escenarios de prueba  ejecutar el comando PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\escenarios
        4. Ejecutar el comando node TagCrearNegativo.js
        5. Después ejecutar el comando node TagCrearPositivo.js
        6. Validar la generación de los screenshots en las rutas PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\resultado\tag\CrearTagNegativo y PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\resultado\tag\CrearTagPositivo respectivamente
  
#### **Pruebas VRT**

 A continuación se describen los pasos para la ejecución de las pruebas VRT. Esta ejecución realiza la ejecución de las pruebas para la toma de screenshots.
Para el reporte de comparación de los screenshots de las Pruebas VRT se utiliza **Resemblejs**
 
    1. En el archivo PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.4\config.js colocar la URL de la version de Ghost 3.42 y el usuario y password registrado
    2. En el archivo PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\config.js colocar la URL de la version de Ghost 5.18 y el usuario y password registrado
    3. En una ventana cmd ubicarse en el directorio PruebasE2E\VRT\Ghost-PruebasDeRegresion\ y ejecutar el comando  npm install
    4. Ejecutar el comando node TestVRT.js
    5. Después de teminada la ejecución del comando anterior puede verificar los resultados de la siguiente manera:
       - Screenshots v3.42: PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42\resultado\[NombreModulo]\[NombreEscenario]  NombreModulo ej: tag, post,member ect. NombreEsceario ej: CrearTagPositivo, CrearTagNegativo
       - Screnshots 5.18: PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\resultado\[NombreModulo]\[NombreEscenario] NombreModulo ej: tag, post,member ect. NombreEsceario ej: CrearTagPositivo, CrearTagNegativo
       - Screenshots Resultantes : PruebasE2E\VRT\Ghost-PruebasDeRegresion\results\playwright\[YYYY-MM-DDThh.mm.ssZ] (Nota: identificar el directorio con el nombre con fecha y hora mas reciente)
       - Reporte HTML : PruebasE2E\VRT\Ghost-PruebasDeRegresion\results\playwright\[YYYY-MM-DDThh.mm.ssZ]\report (Nota: En este directorio encontrará un reporte en html) por cada escenario de prueba

#### **2. Pruebas E2E con generación de data**

A continuación se describen los pasos para la ejecución de las pruebas con generación de datos Apriori, aleatorio y seudoaleatorio 

**Ejecutar Tests**

    1. Ejecutar la app ghots v 5.18
    2. En el archivo PruebasE2E\GenerationData\properties.js colocar la URL de la version de Ghost 5.18 y el usuario y password registrado
    3. En la ruta PruebasE2E\GenerationData\ ejecuatar el comando npm install
    3. Ejecución de todos los tests:
      - Ejecutar el comando npx playwright test --headed
      - Despues de terminada la ejecución para visualizar los resultados ejecuar el comando npx playwright show-report
    4. Ejecución de test por funcionalidad:
      - Ejecutar el comando npx playwright test *nombre-archivo*.spec.ts --headed
        Si el test existe en el directorio faker y mockaroo se ejecutaran a la vez y los resultados se visualizarán en el reporte de las ejecución de los 2 tests 
      - Despues de terminada la ejecución para visualizar los resultados ejecuar el comando npx playwright show-report  
  
*********************** 
## Pruebas de Reconocimiento:
***********************
**Instrucciones para ejecutar las pruebas de reconocimiento usando Monkey testing con Cypress**

    1. Abrir una terminal y usar el comando cd para llegar a la carpeta *PruebasrReconocimiento*.
    2. Usar el comando npm install para instalar las dependencias necesarias para correr las pruebas.(Este paso puede tardar debido a que se descarga Cypress)
    3. Cambiar en el archivo PruebasrReconocimiento/cypress/integration/monkey/smart-monkey.js los valores de USERNAME y PASSWORD con los accesos de su cuenta de ghost.
    4. En un cmd ubicarse en el directorio PruebasrReconocimiento y correr el comando npx cypress run para correr el monkey test
    5. Los resultados se encontrarán en el archivo PruebasrReconocimiento/results/monkey-execution.html
    6. Se pueden encontrar los videos en la carpeta PruebasrReconocimiento/cypress/videos

**Instrucciones para ejecutar las pruebas de reconocimiento usando Ripper testing con Pupeteerr**

    1. Abrir una terminal y usar el comando cd para llegar a la carpeta pruebas de reconocimiento.
    2. Usar el comando npm install para instalar las dependencias necesarias para correr las pruebas.(Este paso puede tardar debido a que se descarga Cypress)
    3. Cambiar en el archivo config.json los valores de indentification y password con los accesos de su cuenta de ghost.
    4. Correr el comando node index.js para correr el monkey test
    5. Los resultados se encontraran en la carpeta results

