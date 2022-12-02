



**1.Descripción del contenido del repo:**
****
- El directorio **Pruebas E2E** contiene las pruebas E2E aplicando estrategias de generación de data y las **Pruebas VRT**

- El directorio **PruebasrReconcimiento** contiene las **Pruebas de Reconocimiento Aleatorias/Exploratorias**

- El directorio **Pruebas Manuales** contiene la **Pruebas Manuales**



**2.Pruebas VRT**
******
  
**2.1 Pruebas Playwright**

La pruebas e2e para capturar los screenshots se realizaron utilizando la herramienta Playwright, Los escenarios se implementaron para ejecutarse en las versiones Ghost 3.42 y 5.18
  
  **Ghost v3.42**
  
  - **Fuentes**: El proyecto se encuentra en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42**
  - **Configuración**: En el archivo **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.4\config.js** se define las propiedades usuario, password y url del ambiente donde se ejecutaran los escenarios de prueba
  - **Escenarios de pruebas** : Se encuentran en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42\escenarios**
  - **Screenshots**: Se encuentran en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42\resultado\[NombreModulo]\[NombreEscenario]**  **NombreModulo** ej: tag, post,member ect. **NombreEsceario** ej: CrearTagPositivo, CrearTagNegativo
  
  
**Ghost v5.18**

  - **Fuentes**: El proyecto se encuentra en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18**
  - **Configuración**: En el archivo **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\config.js** se define las propiedades usuario, password y url del ambiente donde se ejecutaran los escenarios de prueba
  - **Escenarios de pruebas** : Se encuentran en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\escenarios**
  - **Screenshots**: Se encuentran en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-5.18\resultado\[NombreModulo]\[NombreEscenario]**  **NombreModulo** ej: tag, post,member ect. **NombreEsceario** ej: CrearTagPositivo, CrearTagNegativo
  
**2.2 Pruebas VRT**

- En una consola de comando ubicarse en la ruta Ghost-Test\Ghost-PruebasDeRegresion desde el directorio utilizado en el punto anterior
- Ejecutar el comando npm install
- Ejecutar el comado node TagCrearNegativoVRTPlaywright.js (y TagCrearPositivoVRTPlaywright.js)
- Cuando finalice la ejecución ubicarse en la siguiente ruta Ghost-Test\Ghost-PruebasDeRegresion\results\playwright\
- Abrir la ultima carpeta generada - Validar que corresponda a la fecha de ejecución
- Dentro de esta carpeta se ubican las imagenes generadas resultado de la comparación
- Dentro de esa carpeta encontrará una carpeta report que contiene el reporte en html donde se muestraslas imagenes objetos de la comparación, la imagen resultante y la información resultado de la comparación usando Resemblejs
