document.addEventListener('DOMContentLoaded', function () {
    
    console.log('JavaScript Loaded');

   
    const shopNowButton = document.getElementById('shopNowBtn');
    const buyNowButtons = document.querySelectorAll('.buy-btn');

    
    buyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            const name = prompt("Enter your full name:");
            if (!name) {
                alert("Order canceled. Delivery information is required.");
                return;
            }

            const address = prompt("Enter your delivery address:");
            if (!address) {
                alert("Order canceled. Delivery information is required.");
                return;
            }

            const phone = prompt("Enter your contact number:");
            if (!phone || isNaN(phone)) {
                alert("Order canceled. A valid phone number is required.");
                return;
            }

           
            const paymentMethod = confirm("Do you want to proceed with Cash on Delivery? Click 'OK' for Yes or 'Cancel' for No.");
            
            if (paymentMethod) {
                
                alert(`Thank you for your order, ${name}!\n\nDelivery Address: ${address}\nContact Number: ${phone}\nPayment Method: Cash on Delivery\n\nYour order is on the way!`);
            } else {
                alert("Order canceled. You chose not to proceed with payment.");
            }
        });
    });

    
    if (shopNowButton) {
        shopNowButton.addEventListener('click', () => {
            window.location.href = 'store.html'; 
        });
    }

   
    const wrapper = document.querySelector('.wrapper');
    const loginBtn = document.querySelector('.login-btn');
    const closeIcon = document.querySelector('.icon-close');
    const toggleFormLinks = document.querySelectorAll('.toggle-form');
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');

  
    loginBtn.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    
    closeIcon.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    
    toggleFormLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.classList.toggle('hidden');
            registerForm.classList.toggle('hidden');
        });
    });

   
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault(); on

        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        try {
            
            console.log('Logged in:', { email, password });
            
            window.location.href = 'home.html'; 
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    });

   
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = registerForm.querySelector('input[type="text"]').value;
        const email = registerForm.querySelector('input[type="email"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;

        try {
           
            console.log('User registered:', { username, email, password });
           
            alert("Registration successful! Please log in.");
            
            wrapper.classList.remove('active');
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        } catch (error) {
            console.error('Error registering:', error.message);
        }
    });
});
