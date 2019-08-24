function getDogImage() {
    console.log(dogNumber);
    fetch('https://dog.ceo/api/breeds/image/random/' + dogNumber)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson));
}

function displayResults(responseJson) {
    $('.results-img').remove();
    let dogImageArray = responseJson.message;
    for (i = 0; i < dogNumber; i++) {
        $('div').append(
            `<img src="${dogImageArray[i]}" class="results-img">`
        )
    };
    //display the results section
    $('section').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        dogNumber = document.getElementById("NumberofDogs").value;
        getDogImage();
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});