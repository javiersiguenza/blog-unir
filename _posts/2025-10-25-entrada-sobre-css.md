---
layout: post
title: "Dándole estilo a la web: fundamentos del CSS"
date: 2025-10-25 14:30:00 +0100 
categories: [css, diseño]
---

Si HTML es el esqueleto, **CSS (Cascading Style Sheets)** es la piel, la ropa y el maquillaje. Es el lenguaje encargado de la presentación visual: colores, tipografía, márgenes, y cómo se posicionan los elementos.

![Estructura de una regla CSS](https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/reglacss_xl.png)

### El modelo de caja (Box Model)

Todo elemento HTML en la web se renderiza como una caja rectangular. Entender el **modelo de caja** es la clave para la maquetación.

El modelo se compone de cuatro partes, de dentro hacia afuera:

1.  **Contenido:** El contenido real (texto, imagen, video).
2.  **Padding (Relleno):** El espacio entre el contenido y el borde.
3.  **Border (Borde):** La línea visible que enmarca el elemento.
4.  **Margin (Margen):** El espacio transparente alrededor del borde, que separa el elemento de otros.

En tu archivo CSS, puedes definirlo así:

```css
.contenedor-principal {
    width: 80%;
    padding: 20px;
    border: 1px solid #ccc;
    margin: 0 auto; /* Centrar el contenedor */
}