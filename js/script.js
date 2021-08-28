console.log("Test")
const API_KEY = "B7PbeTmgYEau04BJhV88U9DJojAHJTba";
const BASE_URL = "api.giphy.com/v1/gifs/search";
// const LIMIT = 10;
const search = "hi";
const $img = $('#img');

const promise = $.ajax({
    //url: 'https://www.omdbapi.com/?apikey=8e20198b&t=Frozen'
    url: `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=10&q=${search}`
});

promise.then(
    (data) => {
        console.log(data);
        console.log(data.data[0].images)
        $img.attr("src", data.data[0].images.downsized.url);
    },
    (error) => {
        console.log('bad request: ', error);
    }
);