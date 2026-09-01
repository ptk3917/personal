const data = window.PORTFOLIO_DATA;

const experienceList = document.getElementById('experience-list');
experienceList.innerHTML = data.experience.map(item => `
  <article class="timeline-item">
    <div class="timeline-period">${item.period}</div>
    <div><h3>${item.title}</h3><p>${item.body}</p></div>
  </article>
`).join('');

const projectGrid = document.getElementById('project-grid');
projectGrid.innerHTML = data.projects.map(project => `
  <article class="project-card ${project.featured ? 'featured' : ''}">
    ${project.image ? `<figure class="project-visual"><img src="${project.image}" alt="${project.imageAlt}" loading="lazy"></figure>` : ''}
    <div class="project-content">
    <div class="project-top">
      <div><span class="project-status ${project.statusType}">${project.status}</span><h3>${project.title}</h3></div>
      <span class="badge">${project.badge}</span>
    </div>
    <p class="project-summary">${project.summary}</p>
    <ul class="project-list">${project.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    <div class="project-footer"><div class="project-stack">${project.stack.map(s => `<span>${s}</span>`).join('')}</div><div class="project-links">${project.media ? project.media.map(item => `<a class="evidence-link" href="${item.href}" target="_blank" rel="noreferrer">${item.label} ↗</a>`).join('') : ''}${project.evidence ? `<a class="evidence-link" href="${project.evidence}" target="_blank" rel="noreferrer">근거 문서 ↗</a>` : ''}</div></div>
    </div>
  </article>
`).join('');

const header = document.querySelector('.site-header');
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.site-header nav a')];
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(link => link.classList.toggle('active', link.hash === `#${visible.target.id}`));
}, { rootMargin: '-28% 0px -62%', threshold: [0, .2, .5] });
sections.forEach(section => observer.observe(section));
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 16), { passive: true });

const skillsGrid = document.getElementById('skills-grid');
skillsGrid.innerHTML = data.skills.map(skill => `
  <article class="skill-card"><h3>${skill.title}</h3><p>${skill.body}</p></article>
`).join('');

const educationList = document.getElementById('education-list');
educationList.innerHTML = data.education.map(item => `
  <div class="education-item"><strong>${item.title}</strong><span>${item.detail}</span></div>
`).join('');
