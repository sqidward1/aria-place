function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const button = document.querySelector('.theme-toggle');
    button.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form handling
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message!');
    event.target.reset();
}

// Greeting based on time of day
function setGreeting() {
    const hour = new Date().getHours();
    const greetings = {
        morning: 'Good morning',
        afternoon: 'Good afternoon',
        evening: 'Good evening'
    };
    
    let greeting;
    if (hour < 12) greeting = greetings.morning;
    else if (hour < 18) greeting = greetings.afternoon;
    else greeting = greetings.evening;

    document.querySelector('#home h1').textContent = 
        `${greeting}, Welcome to Aria's Place`;
}

setGreeting();