// document.addEventListener("DOMContentLoaded", function () {
//     const searchForm = document.getElementById("searchForm");
//     const searchInput = document.getElementById("searchInput");
//     const moviesContainer = document.getElementById("moviesContainer");

//     searchForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//         const searchValue = searchInput.value.trim();
//         if (!searchValue) return;
//         const ID_KEY = "XQG8YPtEE5TunPmqC_Gf";
//         const SECRET_KEY = "EgT8qwVWE6";
//         axios
//             .get("https://openapi.naver.com/v1/search/news.json", {
//                 params: {
//                     query: searchValue, // 수정된 부분
//                     display: 20,
//                 },
//                 headers: {
//                     "X-Naver-Client-Id": ID_KEY,
//                     "X-Naver-Client-Secret": SECRET_KEY,
//                     // "Access-Control-Allow-Origin": "*",
//                 },
//             })
//             .then(function (response) {
//                 const movies = response.data.items;
//                 moviesContainer.innerHTML = "";

//                 movies.forEach(function (movie) {
//                     const movieElement = document.createElement("div");
//                     movieElement.className = "movie";
//                     movieElement.innerHTML = `
//                     <h3>${movie.title}</h3>
//                     <p>${movie.description}</p>
//                     <p>${movie.pubDate}</p>
//                 `;
//                     moviesContainer.appendChild(movieElement);
//                 });
//             })
//             .catch(function (error) {
//                 console.error("Error fetching movies:", error);
//             });
//     });
// });
