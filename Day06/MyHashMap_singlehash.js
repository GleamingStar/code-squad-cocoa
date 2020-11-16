class MyHashMap {
    hashMap = [];

    getHash(key) {
        const encryptionVariable1 = 2;
        const encryptionVariable2 = 7;
        return key.split("").reduce((acc, cur) => encryptionVariable1 * (acc + encryptionVariable2 * cur.charCodeAt(0)), 0);
    };

    put(key, value) {
        if (!this.containsKey(key))
            this.hashMap[this.getHash(key)] = { [key]: value };
    };

    remove(key) {
        delete this.hashMap[this.getHash(key)];
    };

    containsKey(key) {
        return this.keys().includes(key);
    };

    get(key) {
        return this.hashMap[this.getHash(key)]
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

    replace(key, value) {
        this.hashMap[this.getHash(key)] = { [key]: value }
    };

    size() {
        return this.hashMap.reduce((acc, cur) => acc + (cur ? 1 : 0), 0);
    };

    clear() {
        this.hashMap = [];
    };
}

const test = new MyHashMap();
test.put('spitz', "front-end");
test.put('joy', "front-end");
test.put('crong', 'front-end')
console.log(test.get('crong'))
console.log(test.keys())
test.remove('joy')
console.log(test.keys())
test.replace('crong', 'front-end master');
console.log(test.get('crong'));
console.log(test.size()) 