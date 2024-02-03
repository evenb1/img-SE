const searchForm = document.getElementsByClassName("search-form");
const searchBox = document.getElementsByClassName("search-box");
const searchResult = document.getElementsByClassName("search-result");
const searchMore = document.getElementsByClassName("show-more");

let keyword="";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}`;
    
}