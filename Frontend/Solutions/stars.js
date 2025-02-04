// const numStars = 100;
//         const stars = [];

//         for (let i = 0; i < numStars; i++) {
//             const star = document.createElement('div');
//             star.classList.add('star');
//             star.style.top = `${Math.random() * window.innerHeight}px`;
//             star.style.left = `${Math.random() * window.innerWidth}px`;
//             document.body.appendChild(star);
//             stars.push(star);
//         }

//         document.addEventListener('mousemove', (e) => {
//             stars.forEach(star => {
//                 const dx = star.offsetLeft - e.clientX;
//                 const dy = star.offsetTop - e.clientY;
//                 const dist = Math.sqrt(dx * dx + dy * dy);
//                 const maxDist = 100;
//                 const scale = Math.max(0, (maxDist - dist) / maxDist);
//                 star.style.transform = `scale(${1 + scale})`;
//             });
//         });

const numStars = 100;
const stars = [];

// Function to create stars
for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.opacity = `${Math.random() * 0.5 + 0.5}`; // Random opacity for twinkling effect
    document.body.appendChild(star);
    stars.push(star);
}

// Mouse movement effect
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        stars.forEach(star => {
            const dx = star.offsetLeft - e.clientX;
            const dy = star.offsetTop - e.clientY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 150; // Increased distance for smoother effect
            const scale = Math.max(0.5, 1 + (maxDist - dist) / maxDist);
            star.style.transform = `scale(${scale})`;
        });
    });
});

// Star twinkling animation
stars.forEach(star => {
    setInterval(() => {
        star.style.opacity = Math.random() * 0.5 + 0.5;
    }, Math.random() * 2000 + 1000); // Random twinkling interval
});

// Resize event to reposition stars dynamically
window.addEventListener('resize', () => {
    stars.forEach(star => {
        star.style.top = `${Math.random() * window.innerHeight}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;
    });
});
