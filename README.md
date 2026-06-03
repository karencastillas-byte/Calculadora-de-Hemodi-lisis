# 💧 Calculadora de Hemodiálisis

Aplicación web progresiva (PWA) para estimar ganancia hídrica interdialítica, volumen de ultrafiltración (UF) y tasa de ultrafiltración (UFR) en pacientes en hemodiálisis.

## Características

* Cálculo de ganancia hídrica interdialítica (% del peso seco).
* Cálculo de volumen total de ultrafiltración (UF).
* Cálculo de tasa de ultrafiltración (mL/kg/h).
* Clasificación automática del riesgo mediante semáforo clínico.
* Perfiles cardiovasculares:

  * Paciente estándar.
  * Riesgo cardiovascular moderado.
  * FEVI < 40% / riesgo cardiovascular alto.
* Recomendaciones clínicas orientativas según la tasa de UF.
* Cálculo de peso máximo recomendado al ingreso.
* Sugerencias de corrección cuando se superan los límites recomendados.
* Historial local de consultas.
* Funciona sin conexión mediante Progressive Web App (PWA).

## Privacidad

Esta aplicación está diseñada para minimizar el manejo de datos personales.

* No solicita nombres de pacientes.
* No solicita documentos de identidad.
* No solicita números de historia clínica.
* No almacena información personal identificable.
* Los cálculos se realizan localmente en el dispositivo.
* La información se almacena únicamente en el navegador mediante Local Storage.
* No se envían datos a servidores externos.
* No existe sincronización en la nube ni transmisión automática de información.

## Uso previsto

Esta herramienta tiene fines educativos y de apoyo clínico para profesionales de la salud involucrados en el cuidado de pacientes en hemodiálisis.

Los resultados deben interpretarse dentro del contexto clínico individual de cada paciente y no sustituyen el juicio clínico, la valoración médica ni los protocolos institucionales.

## Limitación de responsabilidad

La prescripción de ultrafiltración debe considerar factores adicionales como:

* Estabilidad hemodinámica.
* Función cardíaca.
* Comorbilidades.
* Síntomas del paciente.
* Objetivos de peso seco.
* Protocolos y lineamientos institucionales.

El desarrollador no asume responsabilidad por decisiones clínicas tomadas exclusivamente con base en los resultados generados por esta herramienta.
