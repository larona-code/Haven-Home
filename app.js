(function () {
  // Keep behavior simple for an assignment:
  // - No scroll-reveal animations
  // - No slideshow autoplay/fades
  // - Only highlight the active nav link (instant)

  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link[data-nav]"));
  var path = (window.location.pathname || "").split("/").pop();

  var activeByPage = {
    "about.html": "about",
    "design.html": "design",
    "shop.html": "shop",
    "contact.html": "contact",
    "feedback.html": "feedback",
    "home.html": "home",
    "index.html": "home",
  };

  var current = activeByPage[path] || "home";
  navLinks.forEach(function (a) {
    a.classList.toggle("is-active", a.getAttribute("data-nav") === current);
  });

  // Prototype form handling (no backend).
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var thanks = document.getElementById("contact-thanks");
      if (thanks) thanks.hidden = false;

      // Disable inputs after submission (prototype UX).
      contactForm
        .querySelectorAll('input, textarea, button, select')
        .forEach(function (el) {
          el.disabled = true;
        });
    });
  }

  var feedbackForm = document.getElementById("feedback-form");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var thanks = document.getElementById("feedback-thanks");
      if (thanks) thanks.hidden = false;

      feedbackForm
        .querySelectorAll('input, textarea, button, select')
        .forEach(function (el) {
          el.disabled = true;
        });
    });
  }
})();

