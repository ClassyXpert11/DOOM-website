const toggleBtn = document.querySelector(".bar-collapse")
const navbar = document.querySelector(".navbar-container nav")

toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("active")
})