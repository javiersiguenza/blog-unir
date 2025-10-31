// Datos de los artículos completos
const articlesData = {
    1: {
        title: "El futuro de la inteligencia artificial",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
        category: "Tecnología",
        date: "28 Oct 2025",
        content: `
            <p>La inteligencia artificial (IA) está revolucionando todos los aspectos de nuestra vida cotidiana. 
            Desde los asistentes virtuales en nuestros teléfonos hasta los sistemas de recomendación en plataformas 
            de streaming, la IA se ha convertido en una tecnología omnipresente.</p>
            
            <h3>¿Qué es la Inteligencia Artificial?</h3>
            <p>La IA es la capacidad de las máquinas para realizar tareas que normalmente requieren inteligencia 
            humana, como el aprendizaje, el razonamiento y la resolución de problemas. Las técnicas de machine 
            learning y deep learning han permitido avances significativos en los últimos años.</p>
            
            <h3>Aplicaciones Actuales</h3>
            <p>Hoy en día, la IA se utiliza en múltiples campos:</p>
            <ul>
                <li><strong>Medicina:</strong> Diagnóstico de enfermedades y desarrollo de tratamientos personalizados</li>
                <li><strong>Transporte:</strong> Vehículos autónomos y optimización de rutas</li>
                <li><strong>Finanzas:</strong> Detección de fraudes y análisis de mercados</li>
                <li><strong>Educación:</strong> Sistemas de aprendizaje adaptativo y tutorías personalizadas</li>
            </ul>
            
            <h3>El Futuro de la IA</h3>
            <p>Los expertos predicen que la IA seguirá transformando nuestra sociedad en las próximas décadas. 
            Desde la automatización de trabajos hasta la creación de nuevas formas de arte y entretenimiento, 
            las posibilidades son infinitas. Sin embargo, también es importante considerar los desafíos éticos 
            y sociales que plantea esta tecnología.</p>
            
            <p>La clave está en desarrollar IA de manera responsable, asegurando que beneficie a toda la humanidad 
            y respete nuestros valores fundamentales.</p>
        `
    },
    2: {
        title: "Guía completa de HTML5 y CSS3",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
        category: "Desarrollo web",
        date: "25 Oct 2025",
        content: `
            <p>HTML5 y CSS3 son las tecnologías fundamentales que todo desarrollador web debe dominar. 
            Estas herramientas permiten crear páginas web modernas, accesibles y visualmente atractivas.</p>
            
            <h3>HTML5: La Estructura de la Web</h3>
            <p>HTML5 introdujo muchas mejoras sobre versiones anteriores, incluyendo nuevos elementos semánticos 
            que hacen que el código sea más claro y mantenible:</p>
            <ul>
                <li><code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code> para una mejor estructura</li>
                <li><code>&lt;article&gt;</code>, <code>&lt;section&gt;</code> para organizar el contenido</li>
                <li><code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code> para multimedia nativa</li>
                <li>APIs como Canvas, Geolocation y LocalStorage</li>
            </ul>
            
            <h3>CSS3: El Diseño Visual</h3>
            <p>CSS3 ha revolucionado la forma en que diseñamos sitios web con características como:</p>
            <ul>
                <li><strong>Flexbox y Grid:</strong> Sistemas de layout poderosos y flexibles</li>
                <li><strong>Animaciones y Transiciones:</strong> Efectos visuales sin JavaScript</li>
                <li><strong>Variables CSS:</strong> Tematización y mantenimiento más fácil</li>
                <li><strong>Media Queries:</strong> Diseño responsive adaptable a cualquier dispositivo</li>
            </ul>
            
            <h3>Mejores Prácticas</h3>
            <p>Al trabajar con HTML5 y CSS3, es importante seguir estas recomendaciones:</p>
            <ol>
                <li>Usa elementos semánticos apropiados para mejorar la accesibilidad</li>
                <li>Mantén la separación entre estructura (HTML) y presentación (CSS)</li>
                <li>Optimiza el rendimiento minimizando archivos y usando técnicas modernas</li>
                <li>Prueba tu sitio en diferentes navegadores y dispositivos</li>
                <li>Sigue los estándares web y valida tu código regularmente</li>
            </ol>
            
            <p>Dominar HTML5 y CSS3 es el primer paso para convertirte en un desarrollador web completo. 
            Con estas herramientas, podrás crear experiencias web increíbles que funcionen perfectamente 
            en cualquier dispositivo.</p>
        `
    },
    3: {
        title: "JavaScript: de principiante a experto",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
        category: "Programación",
        date: "20 Oct 2025",
        content: `
            <p>JavaScript es el lenguaje de programación que da vida a las páginas web. Es el único lenguaje 
            que se ejecuta nativamente en todos los navegadores, lo que lo hace esencial para el desarrollo web.</p>
            
            <h3>Fundamentos de JavaScript</h3>
            <p>Para empezar con JavaScript, debes comprender estos conceptos básicos:</p>
            <ul>
                <li><strong>Variables y Tipos de Datos:</strong> let, const, números, strings, booleanos, objetos</li>
                <li><strong>Funciones:</strong> Bloques de código reutilizables que realizan tareas específicas</li>
                <li><strong>Control de Flujo:</strong> if/else, switch, bucles for y while</li>
                <li><strong>Arrays y Objetos:</strong> Estructuras de datos para organizar información</li>
            </ul>
            
            <h3>Conceptos Intermedios</h3>
            <p>Una vez domines lo básico, es hora de avanzar:</p>
            <ul>
                <li><strong>DOM Manipulation:</strong> Interactuar con elementos HTML dinámicamente</li>
                <li><strong>Eventos:</strong> Responder a acciones del usuario como clicks y teclas</li>
                <li><strong>Asincronía:</strong> Callbacks, Promises y async/await para operaciones asíncronas</li>
                <li><strong>ES6+ Features:</strong> Arrow functions, destructuring, template literals</li>
            </ul>
            
            <h3>Nivel Avanzado</h3>
            <p>Para convertirte en un experto en JavaScript, necesitas dominar:</p>
            <ol>
                <li><strong>Programación Funcional:</strong> map, filter, reduce y composición de funciones</li>
                <li><strong>Closures y Scope:</strong> Entender cómo funciona el contexto en JavaScript</li>
                <li><strong>Prototipos y Clases:</strong> Programación orientada a objetos en JS</li>
                <li><strong>Módulos:</strong> Organizar código en archivos separados y reutilizables</li>
                <li><strong>Testing:</strong> Escribir pruebas para asegurar la calidad del código</li>
            </ol>
            
            <h3>Frameworks y Librerías</h3>
            <p>El ecosistema de JavaScript es enorme. Algunas tecnologías populares incluyen:</p>
            <ul>
                <li>React, Vue, Angular para aplicaciones frontend</li>
                <li>Node.js para desarrollo backend</li>
                <li>Express.js para crear servidores web</li>
                <li>TypeScript para añadir tipado estático</li>
            </ul>
            
            <p>El camino de principiante a experto en JavaScript requiere práctica constante y curiosidad. 
            Construye proyectos reales, lee código de otros desarrolladores y nunca dejes de aprender. 
            JavaScript evoluciona constantemente, y mantenerse actualizado es clave para el éxito.</p>
        `
    }
};

// Toggle tema oscuro/claro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Animación del botón
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

// Filtrado de artículos
const filterButtons = document.querySelectorAll('.filter-btn');
const articleCards = document.querySelectorAll('.article-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Añadir clase active al botón clickeado
        button.classList.add('active');
        
        const category = button.dataset.category;
        
        articleCards.forEach(card => {
            if (category === 'todos' || card.dataset.category === category) {
                card.classList.remove('hidden');
                // Animación de entrada
                setTimeout(() => {
                    card.style.animation = 'fadeInUp 0.5s ease';
                }, 10);
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Función para scroll suave a artículos
function scrollToArticles() {
    document.getElementById('articulos').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Abrir modal con artículo completo
function openArticle(articleId) {
    const modal = document.getElementById('articleModal');
    const modalBody = document.getElementById('modalBody');
    const article = articlesData[articleId];
    
    modalBody.innerHTML = `
        <div class="modal-article">
            <img src="${article.image}" alt="${article.title}">
            <span class="article-badge">${article.category}</span>
            <h2>${article.title}</h2>
            <p class="article-meta">
                <span>📅 ${article.date}</span>
            </p>
            ${article.content}
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('articleModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer click fuera del contenido
window.addEventListener('click', (e) => {
    const modal = document.getElementById('articleModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Efecto parallax en el hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Animación de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar las tarjetas de artículos
articleCards.forEach(card => {
    observer.observe(card);
});

// Contador de visitas (simulado con localStorage)
window.addEventListener('load', () => {
    let visits = localStorage.getItem('visits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('visits', visits);
    console.log(`¡Bienvenido! Esta es tu visita número ${visits}`);
});

// Like button (interactividad adicional)
let likes = {};
articleCards.forEach(card => {
    const articleId = card.dataset.id;
    likes[articleId] = parseInt(localStorage.getItem(`likes-${articleId}`)) || 0;
});

// Smooth scroll para todos los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mensaje de bienvenida en consola
console.log('%c¡Bienvenido a Mi Blog! 🚀', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cBlog creado con HTML, CSS y JavaScript', 'font-size: 14px; color: #8b5cf6;');
console.log('%cActividad UNIR - Desarrollo Web', 'font-size: 12px; color: #6b7280;');
