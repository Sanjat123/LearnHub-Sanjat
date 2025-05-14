// auth.js - Authentication functionality
document.addEventListener('DOMContentLoaded', function() {
    // Password visibility toggle
    const togglePassword = document.getElementById('togglePassword');
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const passwordInput = document.getElementById('password');
            const icon = this.querySelector('i');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }

    // Form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.querySelector('input[name="remember"]').checked;
            
            // Simple validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // In a real app, you would make an actual API call here
                console.log('Login attempt with:', { email, password, rememberMe });
                
                // For demo purposes, we'll just redirect after a delay
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Success!';
                
                setTimeout(() => {
                    window.location.href = 'index.html'; // Redirect to home page
                }, 1000);
                
            }, 1500);
        });
    }
    
    // Social login buttons
    document.querySelectorAll('.btn-social').forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.querySelector('i').classList[1].replace('fa-', '');
            alert(`In a real app, this would redirect to ${provider} authentication`);
        });
    });
});