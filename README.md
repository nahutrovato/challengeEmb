# challengeEmb
Proyecto Cypress con Cucumber

Este es un proyecto de automatización de pruebas utilizando Cypress y Cucumber en JavaScript.
Instalación

Clona este repositorio en tu máquina local:

    git clone https://github.com/nahutrovato/challengeEmb.git

Navega al directorio del proyecto:

    cd tu-repositorio

Instala todas las dependencias del proyecto:

    npm install

Ejecución de Pruebas

Para ejecutar las pruebas, puedes utilizar Cypress. Puedes abrir el runner de Cypress con el siguiente comando:

    npx cypress open

Esto abrirá la interfaz de usuario de Cypress, donde podrás ver y ejecutar tus pruebas de forma interactiva.

Una vez finalizadas las pruebas puedes generar los archivos de reportes utilizando la dependencia cucumber-html-report. Ejecutando desde la consola en la ruta del proyecto:

    node ./cypress/support/generateReport.js

Esto generara un archivo HTML en la base donde esta alojado el proyecto con informacion relevante de las pruebas. Una vez finalizadas las mismas se abrira un navegador mostrando el reporte y deberias de ver esto en la consola

    🚀 Cucumber HTML report cypress/reports/cucumber-json.html generated successfully 👍
 

Estructura del Proyecto

    cypress/e2e/cucumber/Pages: Contiene todos los archivos POM del proyecto.
    cypress/e2e/Tests: Contiene subdirectorios con archivos cucumber y steps definitions.
    cypress/fixtures: Contiene datos utilizados para la generacion de las pruebas.