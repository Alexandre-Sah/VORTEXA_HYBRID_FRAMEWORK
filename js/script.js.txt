document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para Tema Escuro/Claro ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para aplicar o tema salvo ou o padrão
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    // Carrega o tema do localStorage (se houver) ou define como 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Adiciona evento de clique para alternar o tema
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- Lógica para Navegação Suave do Sumário ---
    const sidebarLinks = document.querySelectorAll('#sidebar nav a');
    const mainHeader = document.getElementById('main-header');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link (pular direto)
            const targetId = this.getAttribute('href').substring(1); // Pega o ID da seção (ex: "introduction")
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calcula a posição de rolagem, ajustando para o cabeçalho fixo
                const headerOffset = mainHeader ? mainHeader.offsetHeight : 0;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 10; // -10px para um pequeno espaçamento extra

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' // Rolagem suave
                });
            }
        });
    });

    // --- Lógica para Tradução de Conteúdo (será complementada em lang-content.js) ---
    const langButtons = document.querySelectorAll('.lang-button');
    const sidebarTitle = document.getElementById('sidebar-title');
    const footerTextElement = document.querySelector('footer p');

    // Mapeamento de textos para tradução (parte do script.js, mas o grosso estará em lang-content.js)
    const translations = {
        'pt': {
            'sidebar-title': 'Sumário',
            'footer-text': '&copy; 2025 VORTEXA HYBRID TECH FRAMEWORK. Todos os direitos reservados.'
            // Outras chaves serão carregadas de lang-content.js
        },
        'en': {
            'sidebar-title': 'Summary',
            'footer-text': '&copy; 2025 VORTEXA HYBRID TECH FRAMEWORK. All rights reserved.'
        },
        'it': {
            'sidebar-title': 'Indice',
            'footer-text': '&copy; 2025 VORTEXA HYBRID TECH FRAMEWORK. Tutti i diritti riservati.'
        }
    };

    // Função para aplicar as traduções
    const applyTranslations = (lang) => {
        // Atualiza o título do sumário
        if (sidebarTitle && translations[lang]['sidebar-title']) {
            sidebarTitle.textContent = translations[lang]['sidebar-title'];
        }
        // Atualiza o texto do rodapé
        if (footerTextElement && translations[lang]['footer-text']) {
            footerTextElement.innerHTML = translations[lang]['footer-text'];
        }

        // Atualiza todos os elementos com data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            // Verifica se a chave existe nas traduções globais (que serão estendidas por lang-content.js)
            if (window.globalTranslations && window.globalTranslations[lang] && window.globalTranslations[lang][key]) {
                // Para links, atualiza o texto; para outros, o innerHTML
                if (element.tagName === 'A') {
                    element.textContent = window.globalTranslations[lang][key];
                } else {
                    element.innerHTML = window.globalTranslations[lang][key];
                }
            } else if (translations[lang][key]) { // Fallback para traduções básicas definidas aqui
                 if (element.tagName === 'A') {
                    element.textContent = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Marca o botão de idioma ativo
        langButtons.forEach(button => {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        localStorage.setItem('lang', lang); // Salva o idioma selecionado
    };

    // Event Listeners para botões de idioma
    langButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedLang = event.target.dataset.lang;
            applyTranslations(selectedLang);
        });
    });

    // Carrega o idioma salvo ou define como 'pt' ao carregar a página
    const savedLang = localStorage.getItem('lang') || 'pt';

    // Para garantir que globalTranslations esteja carregado antes de aplicar as traduções,
    // vamos chamar applyTranslations após o lang-content.js ser carregado.
    // Por enquanto, apenas definimos a função. A chamada inicial será no lang-content.js.
    window.applyInitialTranslations = () => applyTranslations(savedLang);
});