
fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const projectsGrid = document.querySelector(".projects_grid")
    for (const project of data.projects) {
      console.log(project.title, project.tag, project.image)
      projectsGrid.innerHTML += `   
      <div class="project_item">
      <img src="images/${project.image}" alt="" class="project_img">
      <div class="project_info">
          <div class="project_info_text">
              <h3 class="project_title">${project.title}</h3>
              <h4 class="project_tag">${project.tag}</h4>
          </div>
          <a class="project_link">Ver demo<div class="project_link_bganim"></div></a>
      </div>
  </div>
      `
   


    }
  });







const splashScreen = document.getElementById('splash_screen');

splashScreen.addEventListener('animationend', () => {
    setTimeout(() => {
          splashScreen.style.display = 'none';
    }, 500);
 
});
// Obtener los elementos de los botones y los divs objetivos
const btnProjects = document.getElementById("btn_projects");
const btnContact = document.getElementById("btn_contact");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

// Función que hace scroll hasta un div con un margen superior
function scrollToTarget(target) {
  // Calcular la posición del div objetivo con un margen superior
  const targetTop = target.offsetTop - 20;

  // Hacer scroll hasta la posición calculada con un efecto suave
  window.scroll({
    top: targetTop,
    behavior: "smooth"
  });
}

// Agregar oyentes de eventos de clic a los botones
btnProjects.addEventListener("click", function() {
  scrollToTarget(projects);
});

btnContact.addEventListener("click", function() {
  scrollToTarget(contact);
});


//skills Items delay
const skillItems = document.querySelectorAll(".skill_item");
const delayIncrement = 0.4;

for (let i = 0; i < skillItems.length; i++) {
  skillItems[i].style.animationDelay = `${i * delayIncrement}s`;
}

