// Script for collapsible sections
document.addEventListener("DOMContentLoaded", function() {
    const coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");

            // Select the content element following the button
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none"; // Hide the content
            } else {
                content.style.display = "block"; // Show the content
            }
        });
    }
});
