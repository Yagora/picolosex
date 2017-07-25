'use strict'

module.exports = class User {
	constructor(name, clothes=0) {
		this.name = name;
		this.clothes = Math.abs(clothes);
		this.score = 100;
	}

	nakedUser() {
		this.clothes = this.clothes - 1;
	}

	lowerScore() {
		this.score = this.score - 5;
	}
};
