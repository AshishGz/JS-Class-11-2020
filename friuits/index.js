let API_URL='https://www.fruitmap.org/api/trees';
window.onload = function () {
    onGetFruits();
};
function onGetFruits() {
    document.getElementById('fruits')
        .innerHTML=`<div style="padding: 20px">loading...</div>`
    fetch(API_URL,{
        method:'GET',
    }).
    then(
        response=>response.json()).
    then(
        data=>onDisplayData(data)).
    catch(function (error) {
        document.getElementById('fruits')
            .innerHTML=onGetErrorDiv();

    });
}
function onDisplayData(fruits) {
    let fruits_html='';
    fruits.forEach(function (value) {
        fruits_html=fruits_html+
            `<div style="border: 1px solid ${value.color}">${value.count}
<br/>${value.name}</div>`
    });
    document.getElementById('fruits')
        .innerHTML=fruits_html;

}
function onGetErrorDiv() {

    return `<div style="padding: 30px">
<div>Something Went Wrong. Please Try Again</div>
<button onclick="onGetFruits()">Retry</button>
</div>`

}

