const myNumber = 16;
const maxTownNumber = Math.floor(Math.random() * myNumber + 1);
console.log(maxTownNumber);
// const maxTownNumber = 4;

const maxTownSize = 4;

const maxMailboxSize = 4;
let mailboxCounts = 0;

const townList = [];

let townNumber = 0;

let townSizeCounts = 0;
let currentTownSize = 0;

const locationTable = 4 * 4

function makeTown() {
    townNumber++;

    const town = {
        id: townNumber,
        name: String.fromCharCode(64 + townNumber),
        location: getLocation(),
        // location: Math.floor(Math.random() * locationTable + 1), // 중복제거 메일박스처럼 바깥으로 빼자
        size: Math.floor(Math.random() * maxTownSize + 1)
    };

    if (Math.random() > 0.5 && mailboxCounts <= maxMailboxSize) {
        town["mailbox"] = Math.random() * maxMailboxSize + 1;
        mailboxCounts++;
    }
    return town;
}
function getLocation() { // childnode 구현시 필요없는 함수
    const location = Math.floor(Math.random() * locationTable + 1)
    for (let obj of townList)
        if (obj.location === location)
            return getLocation();
    return location
}

function setTown() {
    const town = makeTown();
    const random = makeChild();

    // if (!town)
    //     return

    // if (townSizeCounts === 0)
    //     currentTownSize = town.size;

    // if (random === 0 || currentTownSize === townSizeCounts) { // 최상위요소로 탈출
    //     townSizeCounts = 0;
    //     currentTownSize = 0;
        return town;
    // } else if (random === 1) { // 형제요소 추가
    //     if (townSizeCounts === 0)
    //         return town;
    //     console.log("형제요소 +1")
    //     townSizeCounts++;
    //     return town + setTown();
    // } else if (random === 2) { //아들요소 추가
    //     townSizeCounts++;
    //     const childArray = []
    //     childArray.push(setTown());
    //     return town["childNode"] = childArray;
    // }
}

makeChild = () => Math.floor(Math.random() * 3) // 0,1,2중 하나 리턴

for (let i = 0; townNumber < maxTownNumber; i++) {
    townList.push(setTown());
}

console.log(townList)
console.log(JSON.stringify(townList))
