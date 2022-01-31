
var minutesElement = document.getElementById('minutes');
var secondsElement = document.getElementById('seconds');
var container = document.getElementById('displayed');


var minutesCount = 2;
var secondsCount = 0;


function updateSeconds() {

    if (secondsCount === 0 && minutesCount > 0 ) {
        secondsCount = 60;
        minutesCount--;

        minutesElement.innerText = minutesCount < 10 ? "0" + minutesCount : minutesCount; 
    }
    secondsCount = secondsCount - 1;

    if (secondsCount < 10) {
        secondsElement.innerText = "0" + secondsCount;
    } else {
        secondsElement.innerText = secondsCount;
    }

    if (minutesCount === 0  && secondsCount === 0) {
            
        stopCount()
        container.style.backgroundColor = 'red'
        // alert('time for a break')
        function showNotification(){
            const notification = new Notification('New message from Todo Timer', {
                    body:'Time for a break!'
            });
        }


        if (Notification.permission === 'granted') {
            // alert('we have permission');    
            showNotification();
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                
                if (permission === 'granted'){
                    showNotification();
                } 
            })
        }
        return  
    }
}


var buttonCount = 0;
var intervalId;

var startButton = document.getElementById('start-timer')
startButton.addEventListener("click", function () {
    if (buttonCount < 1) {
        
        intervalId = setInterval(updateSeconds, 1000)
    }
    buttonCount++;
    
})

function stopCount(){
    clearInterval(intervalId)
    buttonCount = 0;
}
