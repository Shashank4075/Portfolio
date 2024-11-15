// Script for collapsible sections with background color toggle
const coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;

        // Toggle the display of the content
        if (content.style.display === "block") {
            content.style.display = "none";
            content.classList.remove("active-content"); // Remove active background color when collapsed
        } else {
            content.style.display = "block";
            content.classList.add("active-content"); // Add active background color when expanded
        }
    });
}
