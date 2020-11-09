class MyHashMap {
    constructor() {
        this.hashMap = [];
    };

    getHash(key) {
        let hash = 0;
        for (let i in key) {
            hash += key.charCodeAt(i);
        }
        return hash % 71;
    };

    getDoubleHash(hash) {
        hash = hash + hash % 17
        hash = hash > 71 ? hash - 71 : hash;
        return hash;
    };

    put(key, value, hash) {
        if (!hash)
            hash = this.getHash(key);
        if (this.size() >= 71)
            console.log("Hashtable이 꽉 찼습니다.");
        else if (this.hashMap[hash])
            this.put(key, value, this.getDoubleHash(hash));
        else if (!this.containsKey(key))
            this.hashMap[hash] = { [key]: value };
    };

    remove(key, hash) {
        if (!hash)
            hash = this.getHash(key);
        if (key == Object.keys(this.hashMap[hash]))
            delete this.hashMap[hash];
        else if (this.containsKey(key))
            this.remove(key, this.getDoubleHash(hash));
        else
            console.log("remove 실패 : 잘못된 key값 입력");
    };

    containsKey(key) {
        return this.keys().includes(key);
    };

    get(key, hash) {
        if (!hash)
            hash = this.getHash(key);
        if (key == Object.keys(this.hashMap[hash]))
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
                keysArray.push(Object.keys(obj));
        return keysArray;
    };

    replace(key, value, hash) {
        if (!hash)
            hash = this.getHash(key);
        if (key == Object.keys(this.hashMap[hash]))
            this.hashMap[hash] = { [key]: value }
        else if (this.containsKey(key))
            this.replace(key, value, this.getDoubleHash(hash));
        else
            console.log("replace 실패 : 잘못된 key값 입력");
    };

    size() {
        let count = 0;
        for (const obj of this.hashMap)
            if (obj)
                count++;
        return count;
    };

    clear() {
        this.hashMap = [];
    };
}

const test = new MyHashMap();
test.put('spitz', "front-end");
test.put('joy', "front-end");
test.put('crong', 'front-end');
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