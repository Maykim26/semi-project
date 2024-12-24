let t=document.getElementById("task-input"),e=document.getElementById("add-btn"),n=document.querySelectorAll(".task-tabs div"),l=document.getElementById("underline"),i=[],o="all",s=[];e.addEventListener("mousedown",d),t.addEventListener("keydown",function(t){13===t.keyCode&&d(t)});for(let t=1;t<n.length;t++)n[t].addEventListener("click",function(t){!function(t){if(t&&(o=t.target.id,l.style.width=t.target.offsetWidth+"px",l.style.left=t.target.offsetLeft+"px",l.style.top=t.target.offsetTop+(t.target.offsetHeight-4)+"px"),s=[],"ongoing"==o)for(let t=0;t<i.length;t++)!1===i[t].isComplete&&s.push(i[t]);else if("done"==o)for(let t=0;t<i.length;t++)!0===i[t].isComplete&&s.push(i[t]);a()}(t)});function d(){let e=t.value;if(""===e)return alert("할일을 입력해주세요");let n={id:"_"+Math.random().toString(36).substr(2,9),isComplete:!1,taskContent:e};i.push(n),t.value="",a()}function a(){let t="";list=[],"all"===o?list=i:("ongoing"===o||"done"===o)&&(list=s);for(let e=0;e<list.length;e++)!0==list[e].isComplete?t+=` <div class="task task-done">
            <div>${list[e].taskContent}</div>
            <div>
                <button class="checkBtn" onclick="toggleComplete('${list[e].id}')"></button> <button class="deleteBtn" onclick="deleteTask('${list[e].id}')"></button>
            </div>
        </div>`:t+=` <div class="task">
        <div>${list[e].taskContent}</div>
        <div>
            <button class="checkBtn" onclick="toggleComplete('${list[e].id}')"></button> <button class="deleteBtn" onclick="deleteTask('${list[e].id}')"></button>
        </div>
    </div>`;document.getElementById("task-board").innerHTML=t}
//# sourceMappingURL=index.8b0889a1.js.map
