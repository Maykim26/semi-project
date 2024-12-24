let e=[];const t=document.querySelectorAll(".menus button"),s=document.querySelectorAll(".side-menu-list button");t.forEach(e=>e.addEventListener("click",e=>l(e))),s.forEach(e=>e.addEventListener("click",e=>l(e)));let a=300;const l=async t=>{let s=t.target.textContent.toLowerCase(),l=await fetch(`/api/news?category=${s}&page=1`),c=await l.json();e=c.articles,a=c.totalResults,i(),o()},i=()=>{let t=e.map(e=>`<div class="news row">
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
    </div>`).join("");document.getElementById("news-board").innerHTML=t},c=e=>{let t=`<div class="alert alert-danger" role="alert">
    ${e}
    </div>`;document.getElementById("news-board").innerHTML=t},o=()=>{let e=Math.ceil(a/10),t="",s=5*Math.ceil(.2);s>e&&(s=e);let l=s-4<=0?1:s-4;for(let e=l;e<=s;e++)t+=`<li class="page-item ${1===e?"active":""}">
                            <a class="page-link" href="#js-bottom" onclick="moveToPage(${e})">${e}</a>
                        </li>`;1<e&&(t+=`<li class="page-item" onclick="moveToPage(2)">
                            <a class="page-link" href="#js-bottom"> &gt;</a>
                        </li>`),1<e&&(t+=`<li class="page-item" onclick="moveToPage(${s})">
                            <a class="page-link" href="#js-bottom"> &gt;&gt;</a>
                        </li>`),document.querySelector(".pagination").innerHTML=t};(async()=>{try{let t=await fetch("/api/news?page=1"),s=await t.json();if(200===t.status){if(0===s.articles.length)throw Error("No result for this search");e=s.articles,a=s.totalResults,i(),o()}else throw Error(s.message)}catch(e){c(e.message)}})();
//# sourceMappingURL=index.9447860e.js.map
