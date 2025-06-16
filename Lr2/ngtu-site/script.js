document.addEventListener('DOMContentLoaded', function() {
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    const animateElements = document.querySelectorAll('.faculty-card, .news-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    if (document.getElementById('feedback-form')) {
        document.getElementById('feedback-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Пожалуйста, заполните все поля!');
                return;
            }
            
            // Здесь должна быть отправка на сервер
            console.log('Форма отправлена:', { name, email, message });
            
            this.reset();
            alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        });
    }
    document.getElementById('feedback-form').addEventListener('submit', function(e) {
  const email = document.getElementById('email').value;
  if (!email.includes('@')) {
    alert('Пожалуйста, введите корректный email');
    e.preventDefault();
  }
});
});