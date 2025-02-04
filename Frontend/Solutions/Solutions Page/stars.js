const numStars = 100;
        const stars = [];

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${Math.random() * window.innerHeight}px`;
            star.style.left = `${Math.random() * window.innerWidth}px`;
            document.body.appendChild(star);
            stars.push(star);
        }

        document.addEventListener('mousemove', (e) => {
            stars.forEach(star => {
                const dx = star.offsetLeft - e.clientX;
                const dy = star.offsetTop - e.clientY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 100;
                const scale = Math.max(0, (maxDist - dist) / maxDist);
                star.style.transform = `scale(${1 + scale})`;
            });
        });