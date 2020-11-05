
function filterId(arr) {
    const reg = RegExp(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi);

    let filteredArray = [];

    arr.filter(id => !reg.test(id)).forEach(function (id) {
        filteredArray.push(id.replace(/[0-9]/g, ""));
    });

    console.log(filteredArray);
};

function filterId2(arr) {
    const reg = RegExp(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g);

    let filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!reg.test(arr[i]))
            filteredArray.push(arr[i].replace(/[0-9]/g, ""));
    }
    console.log(filteredArray);
};
const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];

filterId(peoples);
filterId2(peoples);