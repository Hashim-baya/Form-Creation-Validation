//DOMContentLoaded ensures that all the html is loaded first//

document.addEventListener('DOMContentLoaded', () => {

    //Access the form and feedbackDiv

    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    function validation(){

         //Get the value of the input fields and trim any whitespaces.

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;

        //Declare an empty array to store the error messages.

        let messages = [];

        //Validate username length.

        if(username.length < 3){
            messages.push("The username should have at least 3 characters!");
            isValid = false;
        }

        //Validate email address to ensure it contains @ and '.'

        let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)/;

        if(!regex.test(email)){
            messages.push("Enter a valid email address!");
            isValid =false;
        }

        //Validate password.

        if(password.length < 8){
            messages.push("Password should have at least 8 characters!");
            isValid = false;
        }

        feedbackDiv.style.display = 'block';

        if(isValid){
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = '#28a745';
            form.submit();
        }else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }

        
    }
    //Listen for the submit event
    form.addEventListener('submit', (event) => {
        event.preventDefault();

       
        validation();
        
    });
});