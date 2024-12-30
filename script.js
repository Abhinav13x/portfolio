// Let's add some fun interactions!
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for future navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add some animation to goals
    const goals = document.querySelectorAll('.goal');
    goals.forEach(goal => {
        goal.addEventListener('mouseenter', () => {
            goal.style.transform = 'translateY(-5px)';
        });
        goal.addEventListener('mouseleave', () => {
            goal.style.transform = 'translateY(0)';
        });
    });

    // Fun little console message
    console.log("👋 Hey there, fellow developer! Thanks for checking out my portfolio!");
});