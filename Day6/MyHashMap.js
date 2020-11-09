class MyHashMap {
    constructor() {
        this.hashMap = [];
    };

    getHash(key) {
        let hash = 0;
        let chr = 0;
        for (let i = 0; i < key.length; i++) {
            chr = key.charCodeAt(i);
            // hash = 11 * hash + chr;
            hash += 17*chr;
        }
        return hash;
    }

    put(key, value) {
        if (!this.containsKey(key))
            this.hashMap[this.getHash(key)] = {[key] : value};
    };

    remove(key) {
        delete this.hashMap[this.getHash(key)];
    };

    containsKey(key) {
        if (this.hashMap[this.getHash(key)])
            return true;
        else
            return false;

    };

    get(key) {
        return this.hashMap[this.getHash(key)]
    };

    isEmpty() {
        if (Object.keys(this.hashMap).length === 0)
            return true;
        else
            return false;
    };

    keys() {
        const keysArray = [];
        for (const obj of this.hashMap)
            if (obj)
                keysArray.push(Object.keys(obj));
        return keysArray;
    };

    replace(key, value) {
        this.hashMap[this.getHash(key)] = {[key]: value}
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
test.put('rash', "front-end");
test.put('crong', 'front-end')
console.log(test.get('crong'))
console.log(test.keys())
test.remove('rash')
console.log(test.keys())
test.replace('crong', 'front-end master');
console.log(test.get('crong'));
console.log(test.size())