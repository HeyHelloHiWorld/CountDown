// JavaScript code for countdown logic
document.getElementById('end-date').addEventListener('change', function() {
    updateCountdown();
});

function updateCountdown() {
    var endDateInput = document.getElementById('end-date');
    var endDate = new Date(endDateInput.value);
    var now = new Date();

    var timeDifference = endDate.getTime() - now.getTime();

    if (timeDifference < 0) {
        document.getElementById('countdown').innerHTML = "Countdown expired";
        return;
    }

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}
