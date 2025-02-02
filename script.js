document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    const hearts = document.querySelector(".heart");

    // Add a click event to show a sweet alert message
    card.addEventListener("click", function () {
        alert("Happy Valentine's Day, my beloved lil girl Gabi! ❤️ You are the love of my life!");
    });

    // Add a pulsing effect when the heart is clicked
    hearts.addEventListener("click", function () {
        hearts.style.transform = "scale(1.5)";
        setTimeout(() => {
            hearts.style.transform = "scale(1)";
        }, 300);
    });
});