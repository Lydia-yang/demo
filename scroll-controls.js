(function () {
  var controls = document.querySelector(".scroll-controls");
  if (!controls) {
    return;
  }

  var step = 420;

  function pageCanScroll() {
    return document.documentElement.scrollHeight > window.innerHeight + 4;
  }

  function updateControls() {
    controls.classList.toggle("visible", pageCanScroll());
  }

  controls.addEventListener("click", function (event) {
    var button = event.target.closest("[data-scroll]");
    if (!button) {
      return;
    }

    var direction = button.getAttribute("data-scroll") === "up" ? -1 : 1;
    window.scrollBy({
      top: direction * step,
      behavior: "smooth"
    });
  });

  window.addEventListener("resize", updateControls);
  window.addEventListener("load", updateControls);
  updateControls();
})();
