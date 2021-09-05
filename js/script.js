console.log("Test")

let userInput;
const API_KEY = "B7PbeTmgYEau04BJhV88U9DJojAHJTba";
const BASE_URL = "http://api.giphy.com/v1/gifs/search";
const $input = $('input[type="text"]')
const $searchBar = $('#type')
const $container = document.querySelector('.container')
const $le = $container.children.length
let giphyData;

function getRandNum() {
    return Math.floor(Math.random() * 24)
}

function getImages(event){
    event.preventDefault()
    userInput = $input.val()
    $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=25&q=${userInput}`
    }).then(
        (data) => {
            giphyData = data
            console.log(data);
            loadImages()
            $('img', $('.container')).each(function () {
                $(this).attr("src", data.data[getRandNum()].images.downsized.url);
            });
        },
        (error) => {
            console.log('bad request: ', error);
        }
    );
    $searchBar.val("")
} 

$('form').on('submit', getImages);

le = $container.children.length

function loadImages(numImages = le + 5) {
    let i = le + 1
    while (i < numImages) {
        const img = document.createElement('img')
        img.setAttribute("id", "img" + i)
        img.src = ("src", giphyData.data[getRandNum()].images.downsized.url);
        img.className = 'img';
        $container.appendChild(img)
        i++
    }
}

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadImages()
    }
});









