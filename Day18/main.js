class MailboxModel {
    constructor(inputNum) {
        this.TotalTown = Math.floor(Math.random() * inputNum + 1);
        this.setTown();
    }

    maxMailboxSize = 4;
    mailboxCounts = 0;

    townList = [];

    townNumber = 0;

    root = {
        name: "root",
        top: 1000,
        left: 1000,
        size: 200
    };
    currentParent = this.root;
    currentSibling = [];

    getRandomInt = (max, min = 1) => Math.floor(Math.random() * max) + min;

    makeTown() {
        this.townNumber++;

        const town = {
            id: this.townNumber,
            name: String.fromCharCode(64 + this.townNumber),
            parent: "root"
        };

        if (Math.random() > 0.5 && this.mailboxCounts <= this.maxMailboxSize) {
            town["mailbox"] = Math.random() * this.maxMailboxSize + 1;
            this.mailboxCounts++;
        }
        return town;
    }

    isDuplicate(obj) {
        let duplicate = false;
        this.currentSibling.forEach(({ top, left, size }) => {
            const verticalDuplicate = Boolean((top < obj.top && obj.top < (top + size)) || (top < (obj.top + obj.size) && (obj.top + obj.size) < (top + size)) || (top < obj.top && (obj.top + obj.size) < (top + size)));
            const horizontalDuplicate = Boolean((left < obj.left && obj.left < (left + size)) || (left < (obj.left + obj.size) && (obj.left + obj.size) < (left + size)) || (left < obj.left && (obj.left + obj.size) < (left + size)));
            if (verticalDuplicate && horizontalDuplicate)
                duplicate = true;
        })
        return duplicate;
    }

    setLocation(obj, parentSize, checkSibling = false) {
        obj.top = this.getRandomInt(parentSize);
        obj.left = this.getRandomInt(parentSize);
        obj.size = this.getRandomInt((obj.top >= obj.left) ? parentSize - obj.top : parentSize - obj.left);
        if (checkSibling && this.isDuplicate(obj))
            return this.setLocation(obj, parentSize, checkSibling)
    }

    setTown() {
        if (this.townNumber === this.TotalTown)
            return
        const town = this.makeTown();
        const random = Math.floor(Math.random() * 3); // 0,1,2 랜덤

        if (random === 0 || this.townList.length === 0) { // 최상위요소로 탈출
            this.currentParent = this.root;
            this.currentSibling = [];
            this.townList.forEach((town) => {
                if (town.parent === "root")
                    this.currentSibling.push(town);
            })
            this.setLocation(town, 500, true);

            this.townList.push(town);
            return this.setTown();
        } else if (random === 1) { // 형제요소 추가
            town.parent = this.currentParent.name;

            this.setLocation(town, this.currentParent.size, true)

            this.currentSibling.push(town);

            this.townList.push(town);
            return this.setTown();

        } else if (random === 2) { //아들요소 추가
            this.currentParent = this.townList[this.townList.length - 1];
            town.parent = this.currentParent.name;

            this.setLocation(town, this.currentParent.size)

            this.currentSibling = [];
            this.currentSibling.push(town);

            this.townList.push(town);
            return this.setTown();
        }
    }
    getTownList() {
        return this.townList;
    }
}


///////////////////////////////

class MailboxView{
    constructor(input) {
        this.townList = input;
        console.log(this.townList);
        this.render(this.townList);
    }
    render(townList) {//렌더링과정에서 우체통 추가할것
        for (let obj of townList) {
            let template = `<div class="town" id='${obj.name}'></div>`;
            if (obj.parent === 'root')
                document.querySelector(`.container`).innerHTML += template
            else
                document.querySelector(`#${obj.parent}`).innerHTML += template
            const town = document.querySelector(`#${obj.name}`)
            town.style.cssText += `top:${obj.top}px; left:${obj.left}px; width:${obj.size}px; height:${obj.size}px;`
        }
    
    }
}
new MailboxView(new MailboxModel(16).getTownList())
