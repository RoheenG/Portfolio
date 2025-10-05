function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Scroll buttons for projects
document.addEventListener("DOMContentLoaded", function() {
  // Sequential typing animation for 'Hello, I'm' then 'Roheen Ghafuri'
  const helloText = "Hello, I'm";
  const nameText = "Roheen Ghafuri";
  const roleText = "Software Developer";
  const typedHello = document.getElementById("typed-hello");
  const typedCursor = document.getElementById("typed-cursor");
  const typedName = document.getElementById("typed-name");
  const typedCursorName = document.getElementById("typed-cursor-name");
  const typedRole = document.getElementById("typed-role");
  const typedCursorRole = document.getElementById("typed-cursor-role");
  let helloIndex = 0;
  let nameIndex = 0;
  let roleIndex = 0;
  function typeHello() {
    if (typedHello && typedCursor) {
      if (helloIndex <= helloText.length) {
        typedHello.textContent = helloText.slice(0, helloIndex);
        helloIndex++;
  setTimeout(typeHello, 120);
      } else {
        typedCursor.style.display = "none";
        // Start name typing after hello
        if (typedCursorName) typedCursorName.style.display = "inline";
        typeName();
      }
    }
  }
  function typeName() {
    if (typedName && typedCursorName) {
      if (nameIndex <= nameText.length) {
        typedName.textContent = nameText.slice(0, nameIndex);
        nameIndex++;
  setTimeout(typeName, 120);
      } else {
        typedCursorName.style.display = "none";
        // Start role typing after name
        if (typedCursorRole) typedCursorRole.style.display = "inline";
        typeRole();
      }
    }
  }
  function typeRole() {
    if (typedRole && typedCursorRole) {
      if (roleIndex <= roleText.length) {
        typedRole.textContent = roleText.slice(0, roleIndex);
        roleIndex++;
  setTimeout(typeRole, 120);
      } else {
        typedCursorRole.style.display = "none";
      }
    }
  }
  typeHello();
  const tracker = document.getElementById("carousel-tracker");
  const scrollContainer = document.getElementById("projects-scroll");
  const scrollLeft = document.querySelector(".scroll-btn.left");
  const scrollRight = document.querySelector(".scroll-btn.right");
  const track = scrollContainer.querySelector(".carousel-track");
  const projectCards = Array.from(track.querySelectorAll('.details-container'));
  let startIndex = 0;
  const projectsPerSet = 3;

  function showProjects(start) {
    // Update tracker dots
    const totalSets = Math.ceil(projectCards.length / projectsPerSet);
    const currentSet = Math.floor(start / projectsPerSet);
    tracker.innerHTML = "";
    for (let i = 0; i < totalSets; i++) {
      const dot = document.createElement("span");
      dot.className = "carousel-dot" + (i === currentSet ? " active" : "");
      tracker.appendChild(dot);
    }
    for (let i = 0; i < projectCards.length; i++) {
      if (i >= start && i < start + projectsPerSet) {
        projectCards[i].style.visibility = "visible";
        projectCards[i].style.opacity = "1";
        setTimeout(() => {
          projectCards[i].style.display = "block";
        }, 400);
      } else {
        projectCards[i].style.opacity = "0";
        projectCards[i].style.visibility = "hidden";
        setTimeout(() => {
          projectCards[i].style.display = "none";
        }, 400);
      }
    }
  }
  showProjects(startIndex);

  scrollLeft.addEventListener("click", () => {
    if (startIndex - projectsPerSet >= 0) {
      startIndex -= projectsPerSet;
      showProjects(startIndex);
    }
  });
  scrollRight.addEventListener("click", () => {
    if (startIndex + projectsPerSet < projectCards.length) {
      startIndex += projectsPerSet;
      showProjects(startIndex);
    }
  });
});
