const e="610915e3e6cc4331af1972661b12d75c";let t=[];const s=document.querySelectorAll(".menus button"),a=document.querySelectorAll(".side-menu-list button");s.forEach(e=>e.addEventListener("click",e=>o(e))),a.forEach(e=>e.addEventListener("click",e=>o(e)));let i=new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${e}`),l=300;const c=async()=>{try{i.searchParams.set("page",1),i.searchParams.set("pageSize",10);let e=await fetch(i),s=await e.json();if(200===e.status){if(0===s.articles.length)throw Error("No result for this search");t=s.articles,l=s.totalResults,n(),d()}else throw Error(s.message)}catch(e){r(e.message)}},o=async t=>{let s=t.target.textContent.toLowerCase();i=new URL(`https://newsapi.org/v2/top-headlines?country=us&category=${s}&apiKey=${e}`),c()},n=()=>{let e=t.map(e=>`<div class="news row">
            <div class="col-lg-4">
                <img class="news-img-size"
                    src="${e.urlToImage||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"}" />
            </div>
            <div class="col-lg-8">
                <a class="title" target="_blank" href="${e.url}">${e.title}</a>
                <p class="description">${null==e.description||""==e.description?"내용없음":e.description.length>400?e.description.substring(0,400)+"...":e.description}</p>
        <div class="block">
                <div class="name">${e.source.name||"no source"} 
                </div><div class="date">
                ${e.publishedAt.slice(0,10)}   ${moment(e.publishedAt.slice(0,10)).fromNow()}</div>
            </div></div>
        </div>
`).join("");document.getElementById("news-board").innerHTML=e};(async()=>{i=new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${e}`),c()})(),n();const r=e=>{let t=`<div class="alert alert-danger" role="alert">
    ${e}
    </div>`;document.getElementById("news-board").innerHTML=t},d=()=>{let e=Math.ceil(l/10),t="",s=5*Math.ceil(.2);s>e&&(s=e);let a=s-4<=0?1:s-4;for(let e=a;e<=s;e++)t+=`<li class="page-item ${1===e?"active":""}">
                                <a class="page-link" href="#js-bottom" onclick="moveToPage(${e})">${e}</a>
                            </li>`;1<e&&(t+=`<li class="page-item" onclick="moveToPage(2)">
                                <a class="page-link" href="#js-bottom"> &gt;</a>
                            </li>`),1<e&&(t+=`<li class="page-item" onclick="moveToPage(${s})">
                                <a class="page-link" href="#js-bottom"> &gt;&gt;</a>
                            </li>`),document.querySelector(".pagination").innerHTML=t};
//# sourceMappingURL=index.b9b059c2.js.map
