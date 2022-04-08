export default function initAccordion() {
    const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
  
    if (accordionList.length) {
      accordionList[0].classList.add("accordion-active");
      accordionList[0].nextElementSibling.classList.add("accordion-active");
  
      function activeAccordion() {
        this.classList.toggle("accordion-active");
        this.nextElementSibling.classList.toggle("accordion-active");
      }
  
      accordionList.forEach((item) => {
        item.addEventListener("click", activeAccordion);
      });
    }
  }