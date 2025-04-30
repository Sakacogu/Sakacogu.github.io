document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Project clicked:', this.parentNode.querySelector('h3').innerText);
    });
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200 && 
            window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


function showPreview(url) {
    const frame = document.getElementById('projectFrame');
    frame.src = url;
  }
  
const frame = document.getElementById('hungryLlamaFrame');
frame.addEventListener('load', () => {
  const doc = frame.contentWindow.document;
  const newHeight = doc.documentElement.scrollHeight || doc.body.scrollHeight;
  frame.style.height = newHeight + 'px';
});
