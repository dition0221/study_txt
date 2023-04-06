// fetch("https://dummyjson.com/quotes")
// .then(response => response.json())
// .then(json => {
//     const result = document.querySelector("#result");
//     const random = parseInt(Math.random() * 30); // 0~29 랜덤

//     result.querySelector(".quote").innerHTML = `${json.quotes[random].quote}`;
//     result.querySelector(".author").innerHTML = `- ${json.quotes[random].author}`;
// });


async function init() {
    const response = await fetch("https://dummyjson.com/quotes");
    const datas = await response.json();
    
    const result = document.querySelector("#result");
    const random = parseInt(Math.random() * 30); // 0~29 랜덤

    result.querySelector(".quote").innerHTML = `${datas.quotes[random].quote}`;
    result.querySelector(".author").innerHTML = `- ${datas.quotes[random].author}`;
}
init();