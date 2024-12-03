const API_KEY = "610915e3e6cc4331af1972661b12d75c";
let newsList = [];
const menus = document.querySelectorAll(".menus button");
const side_menus = document.querySelectorAll(".side-menu-list button");
menus.forEach((menu) =>
	menu.addEventListener("click", (event) => getNewsByCategory(event))
);
side_menus.forEach((menu) =>
	menu.addEventListener("click", (event) => getNewsByCategory(event))
);
let url = new URL(
	`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
);
let totalResults = 300;
let page = 1;
const pageSize = 10;
const groupSize = 5;

const getNews = async () => {
	try {
		url.searchParams.set("page", page);
		url.searchParams.set("pageSize", pageSize);

		const response = await fetch(url);

		const data = await response.json();
		if (response.status === 200) {
			if (data.articles.length === 0) {
				throw new Error("No result for this search");
			}
			newsList = data.articles;
			totalResults = data.totalResults;
			render();
			paginationRender();
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		errorRender(error.message);
	}
};

const getLatestNews = async () => {
	url = new URL(
		`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
	);

	getNews();
};

const getNewsByCategory = async (event) => {
	const category = event.target.textContent.toLowerCase();
	url = new URL(
		`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
	);
	getNews();
};

const getNewsByKeyword = async () => {
	const keyword = document.getElementById("search-input").value;
	url = new URL(
		`https://newsapi.org/v2/top-headlines?country=us&q=${keyword}&apiKey=${API_KEY}`
	);
	getNews();
};

const render = () => {
	const newsHTML = newsList
		.map(
			(news) => `<div class="news row">
            <div class="col-lg-4">
                <img class="news-img-size"
                    src="${
				news.urlToImage ||
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
			}" />
            </div>
            <div class="col-lg-8">
                <a class="title" target="_blank" href="${news.url}">${
				news.title
			}</a>
                <p class="description">${
			news.description == null || news.description == ""
				? "내용없음"
				: news.description.length > 400
				? news.description.substring(0, 400) + "..."
				: news.description
		}</p>
        <div class="block">
                <div class="name">${news.source.name || "no source"} 
                </div><div class="date">
                ${news.publishedAt.slice(0, 10)}   ${moment(
				news.publishedAt.slice(0, 10) // "2024-04-18" 부분을 추출하여 moment 함수에 전달
			).fromNow()}</div>
            </div></div>
        </div>
`
		)
		.join("");
	document.getElementById("news-board").innerHTML = newsHTML;
};

getLatestNews();
render();

const errorRender = (errorRender) => {
	const errorHTML = `<div class="alert alert-danger" role="alert">
    ${errorRender}
    </div>`;
	document.getElementById("news-board").innerHTML = errorHTML;
};

const paginationRender = () => {
	const totalPages = Math.ceil(totalResults / pageSize); // 총 페이지 수
	const pageGroup = Math.ceil(page / groupSize); // 현재 페이지 그룹
	let paginationHTML = ``;

	let lastPage = pageGroup * groupSize; // 현재 그룹의 마지막 페이지
	if (lastPage > totalPages) {
		lastPage = totalPages;
	}

	let firstPage =
		lastPage - (groupSize - 1) <= 0
			? 1
			: lastPage - (groupSize - 1); // 현재 그룹의 첫 페이지
	// **이전 그룹으로 이동 버튼**
	if (page > 1) {
		// 이전 페이지 버튼 활성화 조건 추가
		paginationHTML += `<li class="page-item" onclick="moveToPage(${firstPage})">
                                <a class="page-link" href="#js-bottom">&lt;&lt; </a>
                            </li>`;
	}
	// **이전 그룹으로 이동 버튼**
	if (page > 1) {
		// 이전 페이지 버튼 활성화 조건 추가
		paginationHTML += `<li class="page-item" onclick="moveToPage(${
			page - 1
		})">
                                <a class="page-link" href="#js-bottom">&lt; </a>
                            </li>`;
	}

	// 현재 페이지 그룹의 번호들 렌더링
	for (let i = firstPage; i <= lastPage; i++) {
		paginationHTML += `<li class="page-item ${
			i === page ? "active" : ""
		}">
                                <a class="page-link" href="#js-bottom" onclick="moveToPage(${i})">${i}</a>
                            </li>`;
	}

	// **다음 그룹으로 이동 버튼**
	if (page < totalPages) {
		// 다음 페이지 버튼 활성화 조건 추가
		paginationHTML += `<li class="page-item" onclick="moveToPage(${
			page + 1
		})">
                                <a class="page-link" href="#js-bottom"> &gt;</a>
                            </li>`;
	} // **다음 그룹으로 이동 버튼**
	if (page < totalPages) {
		// 다음 페이지 버튼 활성화 조건 추가
		paginationHTML += `<li class="page-item" onclick="moveToPage(${lastPage})">
                                <a class="page-link" href="#js-bottom"> &gt;&gt;</a>
                            </li>`;
	}

	// 결과 HTML 적용
	document.querySelector(".pagination").innerHTML = paginationHTML;
};

const moveToPage = (pageNum) => {
	page = pageNum;
	window.scrollTo({ top: 0, behavior: "smooth" });
	getNews();
};
const openNav = () => {
	document.getElementById("mySidenav").style.width = "250px";
};

const closeNav = () => {
	document.getElementById("mySidenav").style.width = "0";
};

const openSearchBox = () => {
	let inputArea = document.getElementById("input-area");
	if (inputArea.style.display === "inline") {
		inputArea.style.display = "none";
	} else {
		inputArea.style.display = "inline";
	}
};
