// JavaScript for Collapsible Sections
document.addEventListener("DOMContentLoaded", function() {
    const collapsibles = document.getElementsByClassName("collapsible");
    
    Array.from(collapsibles).forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
