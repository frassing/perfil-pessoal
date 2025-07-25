// Toggle MENU OPEN/HIDDEN
const menu = document.querySelector('.profile--menu')
const menuBtn = document.getElementById('menu-toggle')
menuBtn.addEventListener('click', () => {
	menu.classList.toggle('open')
})

// Create a project card and append to the container
function createCard(project) {
	const projectsSection = document.getElementById("projects-container")
	let cardContainer = document.createElement('div')
	cardContainer.classList.add('project-card--container')

	cardContainer.innerHTML = `
	<img class="project-card--img" src=${project.thumb} alt=${project.alt}/>
	<div class="project-card--content">
		<h3 class="project-card--title">${project.title}</h3>
		<p class="project-card--desc">${project.description}</p>
		<div class="project-card--btn">
			<a href="${project.repo}">Repositório</a>
			<a href="${project.deploy}">Deploy</a>
		</div>
	</div>`

	projectsSection.appendChild(cardContainer)
}

// Gets projects list
fetch("./assets/projects.json")
.then(data => data.json())
.then(data => (
	data["projetos"].forEach(project => createCard(project))
))
