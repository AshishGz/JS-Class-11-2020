let API='http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-03&sortBy=publishedAt&apiKey=9b017d9c85e140f58bd094de3f1b99d3';

window.onload=function () {
    onGetNews();
};
function onGetNews() {
    document.getElementById('news')
        .innerHTML=`<p>loading News....</p>`;
    fetch(API).then(
        (response)=>response.json())
        .then((data)=>displayNews(data.articles))
        .catch((error)=>
            document.getElementById('news').innerHTML=onGetErrorDiv()
)


}
function displayNews(news) {
    let news_html='' ;
    news.forEach(function (value) {
        news_html=news_html+
            `<div>
            <h3>${value.title}</h3>
            <p>${value.source.name}</p>
            <img  style="width: 100%" src="${value.urlToImage}"/>
            <p>${formatDate(value.publishedAt)}</p>
            <p>${value.content}</p>
            <a href="${value.url}" target="_blank">Read More</a>
        </div>`;
    })
    document.getElementById('news')
        .innerHTML=news_html;
}

function formatDate(date) {
    let _date=new Date(date);
    return _date.toDateString()


}
function onGetErrorDiv() {
    return `<div>
<p>Something Went Wrong</p>
<button onclick="onGetNews()">Retry</button>
</div>`

}

