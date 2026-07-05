window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");
        const website = document.getElementById("website");

        if (loader) loader.style.display = "none";
        if (website) website.style.display = "block";

    }, 3000);

});
