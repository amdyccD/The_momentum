const quotes = [
    {
        quote:"세상이 너를 버렸다고 생각하지마라 세상은 너를 가진적이 없다.",
        author:"미상"
    },
    {
        quote:"생각하는 대로 살지 않으면 사는 대로 생가하게 된다.",
        author:"폴 부르제(프랑스 작가, 비평가)"
    },
    {
        quote:"어제와 똑같이 살면서 미래를 기대하는것은 정신병 초기증세다.",
        author:"아인슈타인(물리학자)"
    },
    {
        quote:"불가사의한 승리는 있지만 불가사의한 패배는 없다.",
        author:"노무라 가쓰야(일본 야구선수, 감독)"
    },
    {
        quote:"인생은 고릴라와 레슬링 하는 것과 비슷하다. 당신이 지쳤다고 끝나는 게 아니라 고릴라가 지쳐야 끝난다.",
        author:"로버트 스트라우스(미국 배우)"
    },
    {
        quote:"무언가를 정말 하고 싶다면, 당신은 방법을 찾을 것이다. 그렇지 않다면, 변명을 찾을 것이다.",
        author:"짐 론(기업가)"
    },
    {
        quote:"조용하고 침착하게 생각하면 어떤 매듭도 안풀려지는 것이 없다.",
        author:"해럴드 맥밀런(전 영국의 총리)"
    },
    {
        quote:"현명한 사람이 되려거든 사리에 맞게 묻고, 조심스럽게 듣고, 침착하게 대답하라. 그리고 더 할 말이 없으면 침묵하기를 배워라.",
        author:"라파엘로 산치오(이탈리아 예술가)"      
    },
    {
        quote:"너의 기분은 너의 태도가 되면 안된다.",
        author:"지민석(작가)"
    },
    {
        quote:"겸손은 미덕 따위가 아니다. 살아남기 위한 처세술일 뿐이다.",
        author:"미상"
    }
]

const todayQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

const quote = document.querySelector("div #quote");
const author = document.querySelector("div #author");

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
