const navbar = document.querySelector(".nav");

const scrollBehavior = () => {
  console.log("first");
  if (window !== undefined) {
    let windowHeight = window.scrollY;
    windowHeight > 10
      ? navbar.classList.add("sticky")
      : navbar.classList.remove("sticky");
  }
};

window.addEventListener("scroll", scrollBehavior);
