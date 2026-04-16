// Language management system
let currentLanguage = localStorage.getItem('language') || 'pt';

// Language data embedded directly
const languages = {
  "pt": {
    "home": "Início",
    "projects": "Projetos",
    "experiences": "Experiências",
    "education": "Educação",
    "contact": "Contato",
    "title": "Pierre Brito | Desenvolvedor",
    "softwareEngineer": "Analista de Sistemas",
    "description": "Motivado por <span class=\"text-emphasis\">curiosidade</span>, impulsionado por tecnologia e construído para impacto.",
    "recentProjects": "Projetos",
    "recentProjectsTitle": "Recentes",
    "yearsExperience": "anos de experiência",
    "projectsCount": "projetos",
    "software": "Sistema",
    "engineer": "Analista",
    "softwareDescription": "Com profunda curiosidade por tecnologia e mentalidade forte em resolução de problemas, crio soluções escaláveis e eficientes que transformam ideias em experiências digitais impactantes.",
    "gtigAlumni": "Telemedy",
    "gtigAlumniDesc": "Plataforma healthtech com telemedicina, prescrições digitais e gerenciamento clínico com IA.",
    "ciandT": "CI&T",
    "ciandTDesc": "Desenvolvido microservices com Java, Python, Node.js. Construído features React. Implementado testes e Git/CI-CD.",
    "hootzpa": "Hootzpá",
    "hootzpaDesc": "Website institucional para uma aceleradora de IA, mostrando sua missão, serviços e inovação.",
    "ipcTitle": "Instituto de Perícia Científica",
    "ipcDesc": "Ecossistema digital com landing page, blog e marketplace para serviços de expertise científica.",
    "gtiSistemas": "GTI Sistemas",
    "gtiSistemasDesc": "Website institucional para uma empresa de rastreamento. Construído para uma experiência responsiva e amigável.",
    "experienceTitle": "2 anos",
    "experienceSubtitle": "Experiência",
    "ciAndT": "CI&T",
    "ciAndTDesc": "Como estagiário de Engenheiro de Software, colaborei em projetos reais, ganhei experiência prática em código e melhorei minhas habilidades de resolução de problemas em um ambiente profissional.",
    "ciAndTDate": "Março 2025 - Atualmente",
    "freelancing": "Freelancing",
    "freelancingDesc": "Desenvolvi soluções de integração usando Make, Zapier e N8N. Além disso, construí websites com Elementor e Webflow, criando designs modernos e responsivos. Também desenvolvo scripts em Python para automatizar tarefas.",
    "freelancingDate": "Novembro 2023 - Dezembro 2024",
    "formalEducation": "Educação",
    "educationTitle": "Formal",
    "systemsAnalysis": "Análise de Sistemas e Desenvolvimento",
    "systemsAnalysisDesc": "Análise e desenvolvimento de sistemas refere-se ao processo de examinar, projetar e construir sistemas de informação para resolver problemas ou melhorar a eficiência. Envolve compreender as necessidades dos usuários, analisar sistemas existentes e desenvolver novas soluções através de programação, testes e implementação.",
    "educationDate": "Março 2024 - Atualmente",
    "servicesTitle": "Atuação",
    "servicesSubtitle": "Área",
    "sistema": "Sistema",
    "sistemaDesc": "Crio soluções sob medida que resolvem problemas específicos do seu negócio, entregando sistemas robustos, escaláveis e confiáveis.",
    "processAutomation": "Automação de Processos",
    "processAutomationDesc": "Automatizo fluxos de trabalho eliminando tarefas repetitivas, economizando tempo e reduzindo erros em suas operações.",
    "websites": "Websites",
    "websitesDesc": "Desenvolvo websites profissionais e responsivos com tecnologias modernas, criando soluções digitais personalizadas para suas necessidades.",
    "support": "Suporte Técnico",
    "supportDesc": "Ofereço suporte técnico contínuo, manutenção e melhorias em seus sistemas, garantindo desempenho ótimo e atualizações permanentes.",
    "ufrn": "Universidade Federal do Rio Grande do Norte",
    "copyright": "&copy; Pierre Brito 2025"
  },
  "en": {
    "home": "Home",
    "projects": "Projects",
    "experiences": "Experiences",
    "education": "Education",
    "contact": "Contact",
    "title": "Pierre Brito | Developer",
    "softwareEngineer": "System Analyst",
    "description": "Driven by <span class=\"text-emphasis\">curiosity</span>, powered by technology, and built for impact.",
    "recentProjects": "Recent",
    "recentProjectsTitle": "Projects",
    "yearsExperience": "years of experience",
    "projectsCount": "projects",
    "software": "System",
    "engineer": "Analyst",
    "softwareDescription": "With a deep curiosity for technology and a strong problem-solving mindset, I craft scalable and efficient solutions that transform ideas into impactful digital experiences.",
    "gtigAlumni": "Telemedy",
    "gtigAlumniDesc": "Healthtech platform with telemedicine, digital prescriptions, and AI-driven clinical management.",
    "ciandT": "CI&T",
    "ciandTDesc": "Developed microservices with Java, Python, Node.js. Built React features. Implemented tests and Git/CI-CD.",
    "hootzpa": "Hootzpá",
    "hootzpaDesc": "Developed an institutional website for an AI accelerator, showcasing its mission, services, and innovation.",
    "ipcTitle": "Instituto de Perícia Científica",
    "ipcDesc": "Digital ecosystem with landing page, blog platform, and marketplace for scientific services.",
    "gtiSistemas": "GTI Sistemas",
    "gtiSistemasDesc": "Developed an institutional website for a tracking company. Built for a responsive and user-friendly experience.",
    "experienceTitle": "2 years",
    "experienceSubtitle": "Experience",
    "ciAndT": "CI&T",
    "ciAndTDesc": "As a Software Engineer Intern, I collaborated on real-world projects, gained hands-on coding experience, and improved my problem-solving skills in a professional environment.",
    "ciAndTDate": "March 2025 - Currently",
    "freelancing": "Freelancing",
    "freelancingDesc": "I have developed integration solutions using Make, Zapier, and N8N. Additionally, I have built websites with Elementor and Webflow, creating modern and responsive designs. I also develop scripts in Python to automate tasks.",
    "freelancingDate": "November 2023 - December 2024",
    "formalEducation": "Formal",
    "educationTitle": "Education",
    "systemsAnalysis": "Systems Analysis and Development",
    "systemsAnalysisDesc": "Systems analysis and development refers to the process of examining, designing, and building information systems to solve problems or improve efficiency. It involves understanding user needs, analyzing existing systems, and developing new solutions through programming, testing, and implementation to meet specific requirements.",
    "educationDate": "March 2024 - Currently",
    "servicesTitle": "Performance",
    "servicesSubtitle": "What I Deliver",
    "sistema": "System Development",
    "sistemaDesc": "I create tailored solutions that solve your specific business challenges, delivering robust, scalable, and reliable systems.",
    "processAutomation": "Process Automation",
    "processAutomationDesc": "I automate workflows eliminating repetitive tasks, saving time and reducing errors in your operations.",
    "websites": "Websites",
    "websitesDesc": "I develop professional and responsive websites with modern technologies, creating digital solutions tailored to your business needs.",
    "support": "Technical Support",
    "supportDesc": "I offer continuous technical support, maintenance and improvements to your systems, ensuring optimal performance and permanent updates.",
    "ufrn": "Federal University of Rio Grande do Norte",
    "copyright": "&copy; Pierre Brito 2025"
  }
};

// Update all text content based on current language
function updatePageLanguage() {
    if (!languages) {
        console.error('Languages not loaded');
        return;
    }

    const translation = languages[currentLanguage];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translation[key]) {
            if (element.tagName === 'TITLE') {
                element.textContent = translation[key];
            } else {
                // Check if element contains HTML (has innerHTML with tags)
                if (key === 'description' || key === 'systemsAnalysisDesc') {
                    element.innerHTML = translation[key];
                } else {
                    element.textContent = translation[key];
                }
            }
        }
    });

    // Update page title
    if (translation.title) {
        document.title = translation.title;
    }

    // Update language switcher active state
    const ptBtn = document.getElementById('lang-pt');
    const enBtn = document.getElementById('lang-en');
    if (ptBtn && enBtn) {
        if (currentLanguage === 'pt') {
            ptBtn.classList.add('active');
            enBtn.classList.remove('active');
        } else {
            ptBtn.classList.remove('active');
            enBtn.classList.add('active');
        }
    }

    // Save to localStorage
    localStorage.setItem('language', currentLanguage);
}

// Set language
function setLanguage(lang) {
    currentLanguage = lang;
    updatePageLanguage();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updatePageLanguage();
    
    const ptBtn = document.getElementById('lang-pt');
    const enBtn = document.getElementById('lang-en');
    
    if (ptBtn) {
        ptBtn.addEventListener('click', function(e) {
            e.preventDefault();
            setLanguage('pt');
        });
    }
    
    if (enBtn) {
        enBtn.addEventListener('click', function(e) {
            e.preventDefault();
            setLanguage('en');
        });
    }
});
