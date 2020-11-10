class MyHashMap {
    hashMap = [];

    constructor(tableSize) {
        this.tableSize = tableSize;
    };

    getHash(key) {
        return key.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0) % this.tableSize;
    };

    getDoubleHash(hash) {
        hash = hash + hash % 17
        hash = hash > this.tableSize ? hash - this.tableSize : hash;
        return hash;
    };

    put(key, value, hash = this.getHash(key)) {
        if (this.size() >= this.tableSize)
            console.log("Hashtable이 꽉 찼습니다.");
        else if (this.hashMap[hash])
            this.put(key, value, this.getDoubleHash(hash));
        else if (!this.containsKey(key))
            this.hashMap[hash] = { [key]: value };
    };

    remove(key, hash = this.getHash(key)) {
        if (key === Object.keys(this.hashMap[hash])[0])
            delete this.hashMap[hash];
        else if (this.containsKey(key))
            this.remove(key, this.getDoubleHash(hash));
        else
            console.log("remove 실패 : 잘못된 key값 입력");
    };

    containsKey(key) {
        return this.keys().includes(key);
    };

    get(key, hash = this.getHash(key)) {
        if (key === Object.keys(this.hashMap[hash])[0])
            return this.hashMap[hash];
        else if (this.containsKey(key))
            this.get(key, this.getDoubleHash(hash));
        else
            console.log("get 실패 : 잘못된 key값 입력");
    };

    isEmpty() {
        return Boolean(this.keys().length === 0);
    };

    keys() {
        const keysArray = [];
        for (const obj of this.hashMap)
            if (obj)
                keysArray.push(Object.keys(obj)[0]);
        return keysArray;
    };

    replace(key, value, hash = this.getHash(key)) {
        if (key === Object.keys(this.hashMap[hash])[0])
            this.hashMap[hash] = { [key]: value }
        else if (this.containsKey(key))
            this.replace(key, value, this.getDoubleHash(hash));
        else
            console.log("replace 실패 : 잘못된 key값 입력");
    };

    size() {
        return this.hashMap.reduce((acc, cur) => {
            if (cur)
                return acc + 1;
        }, 0)
    };

    clear() {
        this.hashMap = [];
    };
}

const test = new MyHashMap(71);
test.put('spitz', "front-end");
test.put('joy', "front-end");
test.put('crong', 'front-end');
test.put('spizt', 'test')
console.log(test.size());
console.log(test.get('crong'));
console.log(test.keys());
test.remove('joy');
console.log(test.keys());
test.replace('crong', 'front-end master');
console.log(test.get('crong'));
console.log(test.size());
// test.remove('crong');
// test.remove('spitz');
// test.clear();
// console.log(test.isEmpty());