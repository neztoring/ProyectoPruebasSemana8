



**1.Descripción del contenido del repo:**
****
- El directorio **Pruebas E2E** contiene las pruebas E2E aplicando estrategias de generación de data y las **Pruebas VRT**

- El directorio **PruebasrReconcimiento** contiene las **Pruebas de Reconocimiento Aleatorias/Exploratorias**

- El directorio **Pruebas Manuales** contiene la **Pruebas Manuales**



**2.Pruebas VRT**
******
  
**2.1 Pruebas e2e para tomar screenshots con Playwright**

La pruebas e2e para capturar los screenshots se realizaron utilizando la herramienta Playwright, Los escenarios se implementaron para ejecutarse en las versiones Ghost 3.42 y 5.18.

Para al ejecución de las Pruebas e2e para los screenshots y las Pruebas VRT se deben instalas las versiones de Ghost 3.42 y 5.18.
  
  **Ghost v3.42**
  
  - **Fuentes**: El proyecto se encuentra en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42**
  - **Configuración**: En el archivo **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.4\config.js** se define las propiedades usuario, password y url del ambiente donde se ejecutaran los escenarios de prueba
  - **Escenarios de pruebas** : Se encuentran en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42\escenarios**
  - **Screenshots**: Se encuentran en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42\resultado\[NombreModulo]\[NombreEscenario]**  **NombreModulo** ej: tag, post,member ect. **NombreEsceario** ej: CrearTagPositivo, CrearTagNegativo
  - **Pasos Para Ejecutar:** (Nota: La ejecución de las pruebas VRT incluyen esta ejecución)
      
       - 1. En el archivo **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.4\config.js** colocar la URL de la version de Ghost 3.42 y el usuario y password registrado
       - 2. En un cmd ubicarse en el home del proyecten la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.4\** ejecute el comando **npm install**
       - 3. Posterior a completar la instalación  de manera exitosa, ubicarse en el directrorio que contine los escenarios de prueba  ejecutar el comando **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42\escenarios**
       - 4. Ejecutar el comando **node TagCrearNegativo.js**
       - 5. Después ejecutar el comando node **TagCrearPositivo.js**
       - 6. Validar la generación de los screenshots en las rutas **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42\resultado\tag\CrearTagNegativo** y 
  **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42\resultado\tag\CrearTagPositivo** respectivamente
  
**Ghost v5.18**

  - **Fuentes**: El proyecto se encuentra en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18**
  - **Configuración**: En el archivo **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\config.js** se define las propiedades usuario, password y url del ambiente donde se ejecutaran los escenarios de prueba
  - **Escenarios de pruebas** : Se encuentran en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\escenarios**
  - **Screenshots**: Se encuentran en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\resultado\[NombreModulo]\[NombreEscenario]**  **NombreModulo** ej: tag, post,member ect. **NombreEsceario** ej: CrearTagPositivo, CrearTagNegativo
  - **Pasos Para Ejecutar:** (Nota: La ejecución de las pruebas VRT incluyen esta ejecución)
  
       - 1. En el archivo **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\config.js** colocar la URL de la version de Ghost 5.18 y el usuario y password registrado
       - 2. En un cmd ubicarse en el home del proyecten la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\** ejecute el comando **npm install**
       - 3. Posterior a completar la instalación  de manera exitosa, ubicarse en el directrorio que contine los escenarios de prueba  ejecutar el comando **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\escenarios**
       - 4. Ejecutar el comando **node TagCrearNegativo.js**
       - 5. Después ejecutar el comando node **TagCrearPositivo.js**
       - 6. Validar la generación de los screenshots en las rutas **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\resultado\tag\CrearTagNegativo** y 
  **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\resultado\tag\CrearTagPositivo** respectivamente
  
**2.2 Pruebas VRT**


 A continuación se describen los pasos para la ejecución de las pruebas VRT. Esta ejecución realiza la ejecución de las pruebas para la toma de screenshots.
Para el reporte de comparación de los screenshots de las Pruebas VRT se utiliza **Resemblejs**
 
 1. En el archivo **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.4\config.js** colocar la URL de la version de Ghost 3.42 y el usuario y password registrado
 2. En el archivo **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\config.js** colocar la URL de la version de Ghost 5.18 y el usuario y password registrado
3. En una ventana cmd ubicarse en el directorio **PruebasE2E\VRT\Ghost-PruebasDeRegresion\** y ejecutar el comando  **npm install**
4. Ejecutar el comando **node TestVRT.js
5. Después de teminada la ejecución del comando anterior puede verificar los resultados de la siguiente manera:
   - **Screenshots v3.42**: **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42\resultado\[NombreModulo]\[NombreEscenario]**  **NombreModulo** ej: tag, post,member ect. **NombreEsceario** ej: CrearTagPositivo, CrearTagNegativo
   - **Screnshots 5.18**: **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\resultado\[NombreModulo]\[NombreEscenario]**  **NombreModulo** ej: tag, post,member ect. **NombreEsceario** ej: CrearTagPositivo, CrearTagNegativo
   - **Screenshots Resultantes** : **PruebasE2E\VRT\Ghost-PruebasDeRegresion\results\playwright\[YYYY-MM-DDThh.mm.ssZ]** (Nota: identificar el directorio con el nombre con fecha y hora mas reciente)
   - **Reporte HTML** : **PruebasE2E\VRT\Ghost-PruebasDeRegresion\results\playwright\[YYYY-MM-DDThh.mm.ssZ]\report** (Nota: En este directorio encontrará un reporte en html) por cada escenario de prueba
  
  
  
   
**3. Pruebas de Reconocimiento**
***********************






