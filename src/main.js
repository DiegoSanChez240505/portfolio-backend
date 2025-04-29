import './style.css';
import { contactSection } from './components/contact.js';
import { skillsSection } from './components/skills.js';
import { programmingLanguagesSection } from './components/languages.js';
import { educationSection } from './components/education.js';
import { experienceSection } from './components/experience.js';
import { toolsSection } from './components/tools.js';
import { certificatesSection } from './components/certificates.js';
import { projects } from './components/projects.js';

document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        contact: contactSection,
        skills: skillsSection,
        languages: programmingLanguagesSection,
        education: educationSection,
        experience: experienceSection,
        tools: toolsSection,
        certificates: certificatesSection,
        projects: projects
    };

    // Inserta el contenido HTML en cada sección
    for (const id in sections) {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
            sectionElement.innerHTML = sections[id];
        }
    }

    // Observador para detectar el scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.2
    });

    // Aplica la animación a cada sección
    Object.keys(sections).forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.classList.add('hidden-section'); // Estilo inicial oculto
            observer.observe(section);
        }
    });
});
