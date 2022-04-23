export default function initAnimationScroll() {
    const sections = document.querySelectorAll("[data-anime='js-scroll']");
  
    if (sections.length) {
      function animaScroll() {
        sections.forEach((section) => {
          const halfSection = window.innerHeight * 0.6;
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = sectionTop - halfSection < 0;
          if (isSectionVisible) {
            section.classList.add("animation");
          } else if(section.classList.contains("animation")){
            section.classList.remove("animation");
          }
        });
      }
      animaScroll();
      window.addEventListener("scroll", animaScroll);
    }
  }