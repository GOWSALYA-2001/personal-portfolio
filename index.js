const projects = document.querySelectorAll('.project');
let currentIndex = 0;

function showProject(index) {
    projects.forEach((project, i) => {
        if (i >= index && i < index + 3) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 3;
        showProject(currentIndex);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < projects.length - 3) {
        currentIndex += 3;
        showProject(currentIndex);
    }
});

showProject(currentIndex);
