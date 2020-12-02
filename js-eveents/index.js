let isCall=true;
function promiseExample() {
    return new Promise(
        function (resolve,reject) {
            setInterval(function () {
                if(isCall){
                    resolve('The Promise is Siccess')
                }else {
                    reject('The Promise is fail')
                }
            },1000)


        }
    )
}

function callPromise() {
    promiseExample().then(function (value) {
       console.log(value);
    }).catch(function (error) {
        console.log(error);
    });
    console.log('------');
}

function filterEx() {
    const words = ['spray',
        'limit', 'elite', 'exuberant',
        'destruction', 'present'];

    const result =
        words.filter(word => word.length < 6);

    console.log(result);

}

function filterEx2() {
    let ary=[
        {id:13},
        {id:2},
        {id:1},
        {id:0},
        {id:14},
        {id:18},
        {id:20},
        {id:17},
        {id:16},
        {id:23},
    ];
    let newARRAY=ary.filter(filterBYNymber);
    console.log(newARRAY);

}
function filterBYNymber(item) {
    if(item.id%2==0){
        return true;
    }

}
