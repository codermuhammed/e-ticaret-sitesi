window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        headerElement.classList.add("scroll")
    } else {
        headerElement.classList.remove("scroll")        
    }
})
