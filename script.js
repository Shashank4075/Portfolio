// JavaScript for Individual Project Collapsibles
document.addEventListener("DOMContentLoaded", function() {
    const projectCollapsibles = document.getElementsByClassName("project-collapsible");
    
    Array.from(projectCollapsibles).forEach(button => {
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
