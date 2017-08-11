module.exports = class Action {
	constructor(object) {
		this.question = object.action;
		this.timer = object.timer;
		this.force = object.force;
		this.naked = object.naked || false;
	}
};
