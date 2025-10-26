# Blog UNIR - Javier Sigüenza

Blog personal creado con Jekyll como parte de la **Actividad 1: Laboratorio - Creación de un blog** de la asignatura **Desarrollo de Aplicaciones en Red** de la Universidad Internacional de La Rioja (UNIR).

## 🎯 Objetivo del proyecto

El objetivo principal de esta actividad es poner en práctica los conceptos básicos relacionados con la programación web (HTML+CSS). A través de este proyecto, se desarrollan las habilidades necesarias para crear un sitio web sencillo desde cero.

## 🛠️ Tecnologías utilizadas

- **Jekyll**: Generador de sitios estáticos
- **Ruby**: Lenguaje de programación base para Jekyll
- **Markdown**: Para la redacción de contenido
- **HTML/CSS**: Para la estructura y estilos
- **GitHub Pages**: Para el despliegue del sitio

## 📝 Contenido del blog

El blog incluye tres entradas que cubren conceptos fundamentales del desarrollo web:

1. **La estructura es clave: entendiendo el HTML semántico** (23 Oct 2025)
   - Etiquetas esenciales y semántica
   - Contenido multimedia

2. **La precisión del diseño: selectores de clase y ID** (24 Oct 2025)
   - Tipos de selectores
   - El poder de las clases

3. **Dándole estilo a la web: fundamentos del CSS** (25 Oct 2025)
   - El modelo de caja (Box Model)
   - Propiedades CSS básicas

## 🚀 Instalación y uso local

### Prerrequisitos

- Ruby (versión 3.1 o superior)
- Bundler

### Pasos para ejecutar localmente

1. Clonar el repositorio:
```bash
git clone https://github.com/javiersiguenza/blog-unir.git
cd blog-unir
```

2. Instalar las dependencias:
```bash
bundle install
```

3. Ejecutar el servidor de desarrollo:
```bash
bundle exec jekyll serve
```

4. Abrir el navegador en: `http://localhost:4000`

## 🌐 Sitio en producción

El blog está desplegado en GitHub Pages y disponible en:

**https://javiersiguenza.github.io/blog-unir/**

## 📁 Estructura del proyecto

```
jekyll_blog/
├── _config.yml          # Configuración principal de Jekyll
├── _posts/              # Entradas del blog
│   ├── 2025-10-23-entrada-sobre-html.md
│   ├── 2025-10-24-selectores-y-clases.md
│   └── 2025-10-25-entrada-sobre-css.md
├── _layouts/            # Plantillas personalizadas
│   └── home.html
├── about.markdown       # Página "Acerca de"
├── index.markdown       # Página principal
├── Gemfile              # Dependencias de Ruby
└── .github/
    └── workflows/
        └── jekyll.yml   # Workflow para despliegue automático

```

## 👨‍🎓 Autor

**Javier Sigüenza**

- Asignatura: Desarrollo de Aplicaciones en Red
- Universidad: UNIR (Universidad Internacional de La Rioja)
- Actividad: Laboratorio 1 - Creación de un blog

## 📄 Licencia

Este proyecto es parte de una actividad académica para la UNIR.
