const quotes = [
    {
      quote: "훌륭한 패자가 되는 것은 이기는 방법을 배우는 것이다.",
      author: "칼 샌드버그",
    },
    {
      quote: "영리함이 현명함은 아니다.",
      author: "에우리피데스",
    },
    {
      quote: "면전의 아첨꾼과 배후의 험담꾼은 똑같다.",
      author: "알프레드 테니슨",
    },
    {
      quote: "진실한 말 한미디는 연설만큼 위력이 있다.",
      author: "찰스 디킨스",
    },
    {
      quote: "명성과 성공을 혼돈하지 말라.",
      author: "에르마 봄벡",
    },
    {
      quote: "성공은 동료들에 대한 용서받지 못할 죄이다.",
      author: "앰브로즈 비어스",
    },
    {
      quote: "우정은 두 몸에 사는 하나의 영혼이다.",
      author: "아리스토텔레스",
    },
    {
      quote: "우정과 돈은 물과 기름 같다.",
      author: "마리오 푸조",
    },
    {
      quote: "모든 사람에게 친구인 사람은 누구에게도 친구가 아니다.",
      author: "아리스토텔레스",
    },
    {
      quote: "모든일이 그렇다. 쉽기 전에는 어렵다.",
      author: "토마스 풀러",
    },
];
  
  // const quote = document.querySelector("#quote span:first-child");
  // const author = document.querySelector("#quote span:last-child");
  // const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  // quote.innerText = todaysQuote.quote;
  // author.innerText = todaysQuote.author;

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todaysQuote.quote} -${todaysQuote.author}-`;

