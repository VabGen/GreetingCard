window.addEventListener("load", () => {
    setTimeout(function () {
        let preloader = document.getElementById("preloader");
        // preloader.classList.add("loader");
        preloader.style.transition = "visibility 0s 0s";
        preloader.style.visibility = "hidden";
    }, 1000);
})



