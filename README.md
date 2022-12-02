



**1.Descripción del contenido del repo:**
****
- El directorio **Pruebas E2E** contiene las pruebas E2E aplicando estrategias de generación de data y las **Pruebas VRT**

- El directorio **PruebasrReconcimiento** contiene las **Pruebas de Reconocimiento Aleatorias/Exploratorias**

- El directorio **Pruebas Manuales** contiene la **Pruebas Manuales**



**2.Pruebas VRT**
******
  
**2.1 Pruebas Playwright**
  
  **Ghost v3.42**
  -**Proyecto**: El proyecto se encuentra en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42**
  - **Configuración**: En el archivo Ghost-test-Playwright\Ghost-3.42\config.js se define las propiedades usuario, password y url del ambiente donde se ejecutaran los escenarios de prueba
  - **Escenarios de pruebas** : Se encuentran en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42\escenarios**
  - **Screenshots**: Se encuentran en la ruta **PruebasE2E\VRT\Ghost-test-Playwright\Ghost-3.42\resultado\[NombreModulo]\[NombreEscenario]**  **NombreModulo** ej: tag, post,member ect. **NombreEsceario** ej: CrearTagPositivo, CrearTagNegativo
  
  
**Ghost v5.18**
  - **Configuración**: En el archivo Ghost-test-Playwright\Ghost-5.18\config.cjs se define las propiedades usuario, password y url del ambiente donde se ejecutaran los escenarios de prueba
  - **Escenarios de pruebas** : Se encuentran en la ruta Ghost-Test\Ghost-test-Playwright\Ghost-5.18\ 
  - **Screenshots**: Se encuentran en la ruta Ghost-5.18\resultado\ donde podra encontrar una carpeta por módulo que reune varios escenarios de prueba
  
**2.2 Pruebas VRT**

- En una consola de comando ubicarse en la ruta Ghost-Test\Ghost-PruebasDeRegresion desde el directorio utilizado en el punto anterior
- Ejecutar el comando npm install
- Ejecutar el comado node TagCrearNegativoVRTPlaywright.js (y TagCrearPositivoVRTPlaywright.js)
- Cuando finalice la ejecución ubicarse en la siguiente ruta Ghost-Test\Ghost-PruebasDeRegresion\results\playwright\
- Abrir la ultima carpeta generada - Validar que corresponda a la fecha de ejecución
- Dentro de esta carpeta se ubican las imagenes generadas resultado de la comparación
- Dentro de esa carpeta encontrará una carpeta report que contiene el reporte en html donde se muestraslas imagenes objetos de la comparación, la imagen resultante y la información resultado de la comparación usando Resemblejs
