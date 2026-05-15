export default function Scroll() {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      let element = document.getElementById("scrollContent");    
      let systemSettings = document.getElementById("scroll-systemSettings");
      let scrollBar = document.getElementById("scroll-bar");

      if (scrollBar) {
        let scrollTop = window.scrollY;
        let docHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrollPercent = (scrollTop / docHeight) * 100;

        scrollBar.style.width = scrollPercent + "%";
      }

      let screenSize = window.innerHeight;
      let top = element.getBoundingClientRect().top;

      if (top < screenSize) { 
      } else {
        element.classList.remove("visible");
      }

      if (systemSettings?.getBoundingClientRect().top < screenSize) {
        systemSettings?.classList.add("visible");
      } else {
        systemSettings?.classList.remove("visible");
      }
    });
  }
}
