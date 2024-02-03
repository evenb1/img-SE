const searchForm = document.getElementsByClassName("search-form");
const searchBox = document.getElementsByClassName("search-box");
const searchResult = document.getElementsByClassName("search-result");
const searchMore = document.getElementsByClassName("show-more");
const accessKey = "0ebS3cbRmq1Nmq-JZQ1XyDOqgKHxuJUDLc6961N9sKw";

let keyword="";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acessKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

const results = data.results;
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
    })
}

searchForm.addEventListener("Submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
});