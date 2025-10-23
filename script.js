window.addEventListener("scroll", function () {
  const banners = document.querySelectorAll(".banner-1, .banner-2, .banner-3");
  banners.forEach((banner) => {
    let speed = 0.5;
    let offset = window.scrollY * speed;
    banner.style.backgroundPositionY = `${offset}px`;
  });
});

document.querySelector(".hero-btn-1").addEventListener("click", function () {
  document.getElementById("contact-section").scrollIntoView({
    behavior: "smooth",
  });
});

document.querySelector(".hero-btn-2").addEventListener("click", function () {
  document.getElementById("search-section").scrollIntoView({
    behavior: "smooth",
  });
});

function toggleMenu() {
  const sideBar = document.querySelector(".side-bar");
  const menuIcon = document.querySelector(".menu-svg");
  const closeIcon = document.querySelector(".close-svg");

  sideBar.classList.toggle("open");

  if (sideBar.classList.contains("open")) {
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
}

function yearScript() {
  const spanText = document.querySelectorAll(".yearCopyRights");
  const year = new Date().getFullYear();
  spanText.forEach((item) => {
    item.textContent = year;
  });
}
