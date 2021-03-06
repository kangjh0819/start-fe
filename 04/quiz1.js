var todayPhoto = [
    {"url":"http://media.daum.net/photo/2841","img":"http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg","title":"&quot;뜨면 끝장&quot; 최강 공격헬기 성능이 설마","id":"20120516082207657"}
    ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100320","img":"http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg","title":"&#39;오늘만&#39; 필리핀 새댁 5개국어 능통 엄친딸","id":"20120516091011626"}
    ,{"url":"http://media.daum.net/photo/4010","img":"http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg","title":"[북한 결혼식 풍경] 신랑·신부 &quot;행복합니다&quot;","id":"20120516092605081"}
    ,{"url":"http://sports.media.daum.net/general/gallery/gagsports/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg","title":"&#39;내가 더 잘해&#39; 후보GK 경기 난입해 선방","id":"20120516100608409"}
    ,{"url":"http://sports.media.daum.net/general/gallery/0516ufc/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg","title":"양동이의 하이킥에 타바레스 &#39;주춤&#39;","id":"20120516093313331"}
    ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100539","img":"http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg","title":"이승철 아내와 딸 사진 공개 &quot;사주에. .&quot;","id":"20120516093918544"}
    ,{"url":"http://media.daum.net/photo/3899","img":"http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg","title":"생후 6개월에 프랑스로 입양됐던 아이가..","id":"20120516030614331"}
    ,{"url":"http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg","title":"&#39;교생&#39; 김연아, 스승의날에도 인기폭발","id":"20120516092003892"}
];

var num = 0; // 사진을 전환하기 위한 전역 변수

var backBtn = document.getElementById('backBtn');
var nextBtn = document.getElementById('nextBtn');
var wrap = document.getElementById('wrap');

function back() // 좌 버튼 함수
{       
if (num >= 1) // num이 1 이상일 때만 작동
{
    num--; 
    print(num);
}
else { }     
}

function next() // 우 버튼 함수
{     
num++;
print(num);
}

backBtn.addEventListener("click", back);
nextBtn.addEventListener("click", next);

function text(num) // 가운데 텍스트가 바뀌는 함수
{
var count = ( (num%8)+1 + " / " + todayPhoto.length );
document.getElementById('text').innerHTML = count; // id=text 를 찾아 텍스트를 집어 넣는다.   
}

function print(num) {
var str = ''; // str 초기화 
for(i=num; i<num+3; i++)
{
    str += '<img src="'+todayPhoto[i%8].img+'"> ' + todayPhoto[i%8].title + " ";
}    
wrap.innerHTML = str; 
text(num);
}

print(num);   