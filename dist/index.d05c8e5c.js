let t=0,e=document.getElementById("playBtn"),n=document.getElementById("userInput"),o=document.getElementById("resultArea"),u=document.getElementById("resetBtn"),d=document.getElementById("chanceArea"),l=5,c=!1,a=[];function r(){console.log("정답",t=Math.floor(100*Math.random()+1))}e.addEventListener("click",function(){let u=parseInt(n.value);if(u<1||u>100){o.textContent="1과 100사이 숫자를 입력해주세요.";return}if(a.includes(u)){o.textContent="이미 입력한 숫자입니다.";return}l--,d.textContent=`\u{B0A8}\u{C740}\u{AE30}\u{D68C}: ${l} \u{BC88}`,u<t?o.textContent="UP! 더 큰 숫자를 시도해보세요.":u>t?o.textContent="DOWN! 더 작은 숫자를 시도해보세요.":(o.textContent="축하합니다! 맞추셨어요!",c=!0),a.push(u),l<1&&(c=!0,o.textContent="게임 오버! 기회를 다 썼습니다. 정답은 "+t+"였습니다."),c&&(e.disabled=!0)}),u.addEventListener("click",function(){n.value="",l=5,c=!1,a=[],r(),o.textContent="결과가 나온당",d.textContent="남은 찬스 : 5",e.disabled=!1}),n.addEventListener("focus",function(){n.value=""}),r();
//# sourceMappingURL=index.d05c8e5c.js.map
