// Set the date we're counting down to
var countDownDate = new Date("Nov 27, 2021 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

get_background();

function get_background() {

    page = generateRundomNumber(1, 2)
    randomResult = generateRundomNumber(1, 15)
    var result;
    url = `https://api.pexels.com/v1/search?query=lost&per_page=15&page=` + page
    var response;
    fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "563492ad6f9170000100000135eb08dfcd6a477ea9f7eb0499b85817"
            }
        }).then(function (res) {
            console.log(res);

            return res.json()
        })
        .then(function (data) {
            result = data.photos[randomResult]
            console.log(result)
            document.body.style.backgroundImage = `url('${result.src.landscape}')`
            document.getElementById('bottomleft').innerHTML = `Photo by ${result.photographer}`
        })
    setTimeout(get_background, 30000)
}

function generateRundomNumber(min, max) {
    min = Math.floor(min)
    max = Math.ceil(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}