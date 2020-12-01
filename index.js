function clicked(){
    alert('This is clicke');
}

function getSwitchResult() {
    let data = new Date();
    switch (data.getDay().toString()) {
        case '0':
            document.write("Sunday");
            break;

        case '1':


            document.write("Monday");
            break;

        case '2':
            document.write("Tuesday");
            break;

        case '3':
            document.write("Wednesday");
            break;

        case '4':
            document.write("Thrusday");
            break;

        case '5':
            document.write("Friday");
            break;
        case '6':
            document.write("Saturday");
            break;

        default:
            document.write("---")
    }
}

let fruits = ['Mango', 'Orange', 'Apple'];
fruits.forEach(function (value, index) {
    console.log(index);
    console.log(value);
});
fruits.forEach(
    value => console.log(value));



let person = {fname:"John",
    lname:"Doe",
    age:25,address:'Baneshwor'};




// let x;
// for (x in person) {
//     console.log(x);
//     console.log(person[x]);
//
// }


// let a=1;
// if(a==1){
//     console.log('1');
// }else if(a==2){
//     console.log('2');
// }else {
//     console.log('none')
// }
 let i=2;
do{
    console.log(i);
    i++;
}while (i==1);
//
// let fruits=['Mango','Orange','Apple'];
// console.log(fruits);
//fruits.pop();
//fruits.push('Kiwi');
//fruits[2]='Kiwi';
//delete fruits[1];
//fruits.splice(2, 1, "Lemon", "Kiwi");
// let arr1 = ["Cecilie", "Lone"];
// let arr2 = ["Emil", "Tobias", "Linus"];
// let arr3 = ["Robin", "Morgan"];
// let myChildren = arr3.concat(arr2, arr1)
// console.log(myChildren);
//
// console.log(fruits);

// function book(title, author) {
//     this.title = title;
//     this.author  = author;
// }
// let myBook = new book("Ashish", "Book");
// console.log(myBook.title);
// console.log(myBook.author);
// console.log(myBook);


// let a=true;
// let b='1';
// console.log(a==b);
// console.log(a===b);

// for(let i=1;i<10;i++){
//     console.log(i);
// }
// console.log(i);
// console.log('-----------');

// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);


// var varVariale="this is var";
// let letVariale="this is let";
// const contVariale="this is Const";
//
// console.log(window.varVariale);
// console.log(window.letVariale);
// console.log(window.contVariale);
// console.log(letVariale);
// var fruits = ["Banana", "Orange",
//     "Lemon", "Apple", "Mango"];
//var citrus = fruits.slice(2, 5);
//console.log(fruits.reverse());
