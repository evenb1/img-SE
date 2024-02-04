const searchForm = document.getElementById("search");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("showMore");
const accessKey = "0ebS3cbRmq1Nmq-JZQ1XyDOqgKHxuJUDLc6961N9sKw";

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=20`;

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchResult.innerHTML = "";
    }
    const results = data.results;
    results.forEach((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    showMore.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", () => {
    page++;
    searchImages();
});
