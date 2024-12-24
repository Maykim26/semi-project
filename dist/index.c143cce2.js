let t=document.getElementById("task-input"),e=document.getElementById("add-btn"),n=document.querySelectorAll(".task-tabs div"),l=document.getElementById("underline"),o=[],d="all",i=[];e.addEventListener("mousedown",s),t.addEventListener("keydown",function(t){13===t.keyCode&&s(t)});for(let t=1;t<n.length;t++)n[t].addEventListener("click",function(t){t&&(d=t.target.id,l.style.width=`${t.target.offsetWidth}px`,l.style.left=`${t.target.offsetLeft}px`,l.style.top=`${t.target.offsetTop+t.target.offsetHeight-4}px`),i=o.filter(t=>"ongoing"===d?!t.isComplete:t.isComplete),a()});function s(){let e=t.value;if(""===e)return alert("할일을 입력해주세요");let n={id:"_"+Math.random().toString(36).substr(2,9),isComplete:!1,taskContent:e};o.push(n),t.value="",a()}function a(){let t="",e="all"===d?o:i;for(let n=0;n<e.length;n++){let l=e[n];t+=`
            <div class="task ${l.isComplete?"task-done":""}">
                <div>${l.taskContent}</div>
                <div>
                    <button class="checkBtn" onclick="toggleComplete('${l.id}')"></button>
                    <button class="deleteBtn" onclick="deleteTask('${l.id}')"></button>
                </div>
            </div>`}document.getElementById("task-board").innerHTML=t}
//# sourceMappingURL=index.c143cce2.js.map
