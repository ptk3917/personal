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
    <div class="project-top">
      <div><h3>${project.title}</h3></div>
      <span class="badge">${project.badge}</span>
    </div>
    <p class="project-summary">${project.summary}</p>
    <ul class="project-list">${project.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    <div class="project-stack">${project.stack.map(s => `<span>${s}</span>`).join('')}</div>
  </article>
`).join('');

const skillsGrid = document.getElementById('skills-grid');
skillsGrid.innerHTML = data.skills.map(skill => `
  <article class="skill-card"><h3>${skill.title}</h3><p>${skill.body}</p></article>
`).join('');

const educationList = document.getElementById('education-list');
educationList.innerHTML = data.education.map(item => `
  <div class="education-item"><strong>${item.title}</strong><span>${item.detail}</span></div>
`).join('');
