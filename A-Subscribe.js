document.addEventListener('DOMContentLoaded', function () {
    var subscribeButton = document.getElementById('A-button');

    subscribeButton.addEventListener('click', function (event) {
        event.preventDefault(); 
         
        var messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerText = 'Thank you for subscribing!';
        messageElement.style.color = 'orange'; 
        messageElement.style.fontSize = '30px'; 
        messageElement.style.paddingTop= '3%' ;
        
        var form = document.querySelector('.A-Form');
        form.parentNode.insertBefore(messageElement, form.nextSibling);
        
        setTimeout(function () {
            messageElement.remove();
        }, 5000);
    });
});