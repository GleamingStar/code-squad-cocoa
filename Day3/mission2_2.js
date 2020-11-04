
function filterId(arr) {
    const reg = RegExp(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi);
    
    // let filteredArray = arr.filter(function(id) {
    //     return !reg.test(id);
    // });

    // let filteredArray2 = [];

    // filteredArray.forEach(function(id) {
    //     filteredArray2.push(id.replace(/[0-9]/g, ""));
    // });

    // console.log(filteredArray2);

    let filteredArray = [];

    arr.filter(function(id) {
        return !reg.test(id);
    }).forEach(function(id) {
        filteredArray.push(id.replace(/[0-9]/g, ""));
    });

    console.log(filteredArray);
}
const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"]

filterId(peoples);
//두가지버전?  for while문 가지고?