/*document.addEventListener("DOMContentLoaded", () => {
  fetch('element.json')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("heading").innerHTML = data.hero.headline;
      document.getElementById("subheading").innerHTML = data.hero.subheadline;
      const btnGrp = document.getElementById("btn-grp");
      data.hero.ctaButtons.forEach((button) => {
        const btn = document.createElement("a");
        btn.textContent = button.text;
        btn.href = button.link;
        btnGrp.appendChild(btn);
      });
      generateFeatures(data.features);
    });
});*/

// mobile nav bar

const burgerBtn = document.querySelector(".burger-btn-wrapper");
const links = document.querySelector(".links");
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  links.classList.toggle("active");
});

//nav bar fixed to top

document.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const toggleClass = "is-sticky";
  const scrollY = window.scrollY;

  if (scrollY > 0) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

//dark mode

const toggleBtn = document.querySelector(".mode-toggler");
const body = document.querySelector(".main-container");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  body.classList.toggle("active");
});

function generateFeatures(features) {
  const featuresList = document.getElementById("features-list");
  features.forEach((feature, index) => {
    // console.log(feature);
    const featureDiv = document.createElement("div");
    featureDiv.classList.add("features");
    featureDiv.setAttribute("data-aos", "fade-right");

    // Construct inner HTML
    featureDiv.innerHTML = `
      <div class="title-wrapper">
        <div class="title-type-icon-${index + 1}">
          <img src="${feature.icon}" alt="Icon for ${feature.title}">
        </div>
        <div class="title">${feature.title}</div>
      </div>
      <div class="desc">
        ${feature.description}
      </div>
    `;

    featuresList.appendChild(featureDiv);
  });
}
