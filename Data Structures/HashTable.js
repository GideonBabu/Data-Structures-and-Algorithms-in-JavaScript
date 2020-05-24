// HashTable implementation
class HashTable {
	constructor() {
		this.data = new Array(50);
	}

	// simple hash function to randomly generate unique Hash address
	_hash(key) {
		if (!key) {
			throw new Error('cannot prepare hash without key');
			return undefined;
		}
		const hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	// set key and value to the hashtable
	set(key, value) {
		if (!key || !value) {
			throw new Error('either key or value is not passed to set');
			return undefined;

		}
		const hashKey = this._hash(key);
		// if data in that index is undefined, create new array
		if (!this.data[hashKey]) {
			this.data[hashKey] = [];
		}
		// push the key and value in an array
		this.data[hashKey].push([key, value]);
		return this.data;
	}

	// get the value using key
	get(key) {
		if (!key) {
			throw new Error('key is not passed to get in hashtable');
			return undefined;
		}
		const hashKey = this._hash(key);
		const bucket = this.data[hashKey];
		// if bucket is there go and loop over each values in that bucket
		if (bucket) {
			// loop over each array in this bucket and check the value against key
			// if both are equal then return the value on that index
			for (let i = 0; i < bucket.length; i++) {
				if (bucket[i][0] === key) {
					return bucket[i][1];
				}
			}
		}
		return undefined;
	}

	// retrieves all the keys available in the hashtable and return it in an array
	keys() {
		if (!this.data.length) {
			return undefined;
		}
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			// if data at index i exists push it to the array
			if (this.data[i]) {
				// when data at i lengh is greater than 1, then probably here hash collision had happened
				// need to loop over this array to get all the values
				if (this.data[i].length > 1) {
					for (let j = 0; j < this.data[i].length; j++) {
						keysArray.push(this.data[i][j][0]);
					}
				} else {
					// else, just push first value in that array
					keysArray.push(this.data[i][0][0]);
				}
			}
		}
		return keysArray;
	}

	// retrieves all the values in the hashtable and return in an array
	values() {
		if (!this.data.length) {
			return undefined;
		}
		const valuesArray = [];
		for (let i = 0; i < this.data.length; i++) {
			// if data at index i exists push it to the array
			if (this.data[i]) {
				valuesArray.push(this.data[i][0][1]);
			}
		}
		return valuesArray;	
	}
}


const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 50);
myHashTable.get('grapes');