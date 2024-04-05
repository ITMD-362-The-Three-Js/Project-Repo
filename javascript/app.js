document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector('.nojs');
    element.classList.remove('nojs');
    element.classList.add('js');
    const form = document.querySelector('form');    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = form.elements['email'].value.trim();
        const username = form.elements['username'].value.trim();
        const password = form.elements['password'].value.trim();
        const confirmPassword = form.elements['confirm_password'].value.trim();
        const ToS = form.elements['ToS'].checked;

        if (email === '' || username === '' || password === '' || confirmPassword === '' || !ToS) {
            alert('Please fill out all fields and agree to the terms of service.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Here you can add additional validation or form submission logic
        
        // If all validations pass, you can submit the form
        form.submit();
    });
});
function menu(x){
      x.classList.toggle("change");
    }
document.getElementById("toDownload").addEventListener("click", function(){
        window.location.href = "downloads.html";
    });
