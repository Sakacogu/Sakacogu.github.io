document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('.project-link').forEach((link)=>{
    link.addEventListener('click', function() {
        console.log('Project clicked:', this.parentNode.querySelector('h3').innerText);
    });
});
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    let currentSection = '';
    sections.forEach((section)=>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight) currentSection = section.getAttribute('id');
    });
    navLinks.forEach((link)=>{
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) link.classList.add('active');
    });
});
// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode');
});
// Quote Generator
const quotes = [
    "The faster you run in the wrong direction, the faster you realise it's the wrong direction and turn around.",
    "It's not just a boulder, it's a rock!",
    "Good code is its own best documentation.",
    "Simplicity is the ultimate sophistication."
];
const quoteBox = document.getElementById('quote-box');
function rotateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.textContent = quotes[randomIndex];
}
// Initialize first quote
rotateQuote();
// Change quote every 8 seconds
setInterval(rotateQuote, 8000);
// Optional: Update mascot behavior based on section if desired.
// For now, the mascot stays constant but its color toggles via CSS dark mode.
function showPreview(url) {
    const frame = document.getElementById('projectFrame');
    frame.src = url;
}
const frame = document.getElementById('hungryLlamaFrame');
frame.addEventListener('load', ()=>{
    // Once the iframe's document is ready, read its body height:
    const doc = frame.contentWindow.document;
    const newHeight = doc.documentElement.scrollHeight || doc.body.scrollHeight;
    frame.style.height = newHeight + 'px';
});

//# sourceMappingURL=Sakacogu.github.io.44983732.js.map
