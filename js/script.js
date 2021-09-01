console.log("Test")
let userInput;
const API_KEY = "B7PbeTmgYEau04BJhV88U9DJojAHJTba";
const BASE_URL = "api.giphy.com/v1/gifs/search";
const $imgOne = $('#imgOne');
const $imgTwo = $('#imgTwo');
const $imgThree = $('#imgThree');
const $imgFour = $('#imgFour');
const $input = $('input[type="text"]')
const $searchBar = $('#type')

function getImages(event){
    event.preventDefault()
    userInput = $input.val()
    $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=4&q=${userInput}`
    }).then(
        (data) => {
            console.log(data);
            console.log(data.data[0].images)
            $imgOne.attr("src", data.data[0].images.downsized.url);
            $imgTwo.attr("src", data.data[1].images.downsized.url);
            $imgThree.attr("src", data.data[2].images.downsized.url);
            $imgFour.attr("src", data.data[3].images.downsized.url);
        },
        (error) => {
            console.log('bad request: ', error);
        }
    );
    $searchBar.val("")
} 

$('form').on('submit', getImages);








