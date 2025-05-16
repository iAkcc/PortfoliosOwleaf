document.addEventListener('DOMContentLoaded', function() {
    const projectBoxes = document.querySelectorAll('.project-box');

    projectBoxes.forEach(box => {
        box.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
}); 