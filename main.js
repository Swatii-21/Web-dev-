 
const monkeyFace = document.getElementById('monkey-face');
const leftEye = document.getElementById('left-eye');
const rightEye = document.getElementById('right-eye');
const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

 
document.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    leftEye.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    rightEye.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});

 
form.addEventListener('submit', (event) => {
    event.preventDefault();  

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        errorMessage.textContent = 'Both fields are required!';
        monkeyFace.style.transform = 'rotate(-10deg)';
        setTimeout(() => {
            monkeyFace.style.transform = 'rotate(10deg)';
        }, 100);
        setTimeout(() => {
            monkeyFace.style.transform = 'rotate(0deg)';
        }, 200);
    } else {
        errorMessage.textContent = '';
        alert('Login successful!');
    }
});

