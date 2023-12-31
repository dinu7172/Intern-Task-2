document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon");
    const menuList = document.getElementById("menuList");
  
    // Initialize menu as closed
    menuList.style.display = "none";
    menuIcon.style.backgroundColor = "transparent";
  
    menuIcon.addEventListener("click", () => {
      if (menuList.style.display === "none") {
        menuList.style.display = "flex";
        menuIcon.style.backgroundColor = "rgba(89, 85, 84, 0.1)";
      } else {
        menuList.style.display = "none";
        menuIcon.style.backgroundColor = "transparent";
      }
    });
  
    document.addEventListener("click", (event) => {
      if (!menuIcon.contains(event.target) && !menuList.contains(event.target)) {
        menuList.style.display = "none";
        menuIcon.style.backgroundColor = "transparent";
      }
    });
  
    const menuLinks = menuList.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuList.style.display = "none";
        menuIcon.style.backgroundColor = "transparent";
      });
    });
  });
  