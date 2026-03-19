# Hoja de Ejercicios 3: Fundamentos de CSS I 🎨

Este directorio contiene las soluciones a la Hoja 3 del bootcamp, centrada en asimilar los conceptos base de CSS. A lo largo de 8 ejercicios, hemos pasado de aplicar estilos en línea a construir una mini interfaz integradora usando variables y funciones matemáticas.

## 📂 Estructura del Trabajo

El trabajo está dividido en cuatro fases incrementales, gestionadas a través de diferentes ramas y unificadas en `main` usando *Conventional Commits*:

### Fase 1: Formas de insertar CSS (Ejercicios 1, 2 y 3)
* **Ejercicio 1:** Aplicación de CSS en línea mediante el atributo `style`. Útil para pruebas rápidas, pero difícil de mantener.
* **Ejercicio 2:** Uso de la etiqueta `<style>` en el `<head>` del documento. Introducción a selectores básicos (etiquetas y clases) y agrupación de selectores.
* **Ejercicio 3:** El estándar de la industria. Creación de una hoja de estilos externa (`styles.css`) enlazada al HTML mediante la etiqueta `<link>`.

### Fase 2: Cascada, Herencia y Unidades (Ejercicios 4 y 5)
* **Ejercicio 4:** Laboratorio de pruebas para entender la cascada y la especificidad. Comprobación práctica de cómo una clase (`.destacado`) o un selector contextual (`section p`) tienen más peso que un selector de etiqueta general (`p`).
* **Ejercicio 5:** Abandono de la dependencia exclusiva de los píxeles (`px`). Creación de una tarjeta de aviso combinando unidades relativas y absolutas:
  * `rem` para tipografías escalables.
  * `%` para anchos fluidos.
  * `vh` para asegurar la altura mínima de la pantalla.
  * `px` para detalles rígidos como bordes.

### Fase 3: Variables y Funciones CSS (Ejercicios 6 y 7)
* **Ejercicio 6:** Declaración de *Custom Properties* (variables) en la pseudoclase `:root`. Creación de un sistema de diseño reutilizable para colores y espaciados (`--primary-color`, `--avg-distance`, etc.), facilitando la consistencia y el mantenimiento.
* **Ejercicio 7:** Introducción de lógica matemática en CSS:
  * `calc()` para calcular anchos dinámicos combinando porcentajes y píxeles.
  * `clamp()` para lograr tipografías fluidas con topes mínimos y máximos.
  * `min()` y `max()` para restringir el tamaño de cajas secundarias.

### Fase 4: Proyecto Integrador (Ejercicio 8)
* **Ejercicio 8:** Construcción de una interfaz completa ("Presentación de una formación") aplicando todos los conceptos anteriores.
  * Integración de fuentes externas desde Google Fonts con familias de respaldo.
  * Uso intensivo de variables CSS para mantener una paleta de colores coherente.
  * Creación de un botón interactivo (Call to Action) estructurado con `display: inline-block`.
  * Aplicación de fondos avanzados como `linear-gradient`.

## 🛠️ Tecnologías y Herramientas
* HTML5 Semántico
* CSS3
* Git & GitHub (Flujo de ramas por fases y Conventional Commits)