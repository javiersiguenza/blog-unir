---
layout: post
title: "La precisión del diseño: selectores de clase y ID"
date: 2025-10-24 16:00:00 +0100 
categories: [css, html, selectores]
---

Cuando escribimos CSS, necesitamos saber exactamente **a qué elementos queremos aplicar el estilo**. Aquí es donde entran en juego los selectores.

### Tipos de selectores

Existen tres tipos principales de selectores que te permiten apuntar a elementos específicos de tu HTML:

1.  **Selector de etiqueta (tipo):** Apunta a todos los elementos de un tipo específico.
    * *Ejemplo CSS:* `p { color: gray; }` (Afecta a **todos** los párrafos).
2.  **Selector de clase:** Apunta a todos los elementos que tienen un atributo `class` específico. Se usa con un punto (`.`). Permite reutilizar estilos.
    * *Ejemplo HTML:* `<button class="btn-principal">Botón</button>`
    * *Ejemplo CSS:* `.btn-principal { background-color: blue; }`
3.  **Selector de ID:** Apunta a un **único** elemento que tiene un atributo `id` específico. Se usa con una almohadilla (`#`). Solo debe haber un elemento con ese ID.
    * *Ejemplo HTML:* `<div id="menu-superior">...</div>`
    * *Ejemplo CSS:* `#menu-superior { height: 60px; }`

![Sintaxis de selectores CSS](https://lenguajecss.com/css/selectores/selectores-basicos/sintaxis-basica.png)

### El poder de las clases

En un blog, las **clases** son especialmente útiles. Por ejemplo, si tienes varios párrafos de cita, puedes crear una clase para darles un estilo especial, como un borde lateral y una fuente cursiva:

```css
.cita-destacada {
    border-left: 3px solid #333;
    font-style: italic;
    padding-left: 15px;
}