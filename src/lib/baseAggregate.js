const Action = require('../class/Action.js');
const Question = require('../class/Question.js');
const ACTION_FILE = require('../dataBases/actions.json');
const QUESTION_FILE = require('../dataBases/questions.json');

const actionsArray = [];
const questionsArray = [];
const finishArray = []

function buildDataBase(Constructor, dataBase, array) {
	for (const key in dataBase) {
		array.push(new Constructor(dataBase[key]));
	}
}

buildDataBase(Action, ACTION_FILE, actionsArray);
buildDataBase(Question, QUESTION_FILE, questionsArray);

function getActionBase() {
	return actionsArray.sort((a, b) => {
		return a.force > b.force;
	});
}

function getQuestionBase() {
	return questionsArray.sort((a, b) => {
		return a.force > b.force;
	});
}

function getBaseByForce(base, force) {
	return base.filter(riddle => {
		return riddle.force === force;
	});
}

function replaceUserValue(riddle, actor, passive) {
	const genre = 'question';
	const riddleToPush = Object.assign({}, riddle);
	riddleToPush[genre] = riddleToPush[genre].replace('${actor}', actor.name);
	riddleToPush[genre] = riddleToPush[genre].replace('${passive}', passive.name);

	return riddleToPush
}

function getBuildingFinish(user1, user2) {

	while(user1.clothes > 0 || user2.clothes > 0) {
		const baseChoosed = chooseActionOrQuestion();
		const actor = chooseUser(user1, user2);
		const passive = actor.name === user1.name ? user2 : user1;
		const riddleChoosed = chooseRiddle(baseChoosed, actor);
		if (riddleChoosed.naked) {
			actor.nakedUser();
		}

		finishArray.push(replaceUserValue(riddleChoosed, actor, passive));
		actor.lowerScore();
	}

	return finishArray;
}

function chooseRiddle (base, actor) {
	if (actor.score >= 80) {
		const baseByForce = getBaseByForce(base, 1);
		return baseByForce[getRandomArbitrary(0, baseByForce.length)];
	} else if (actor.score >= 55) {
		const baseByForce = getBaseByForce(base, 2);
		return baseByForce[getRandomArbitrary(0, baseByForce.length)];
	} else if (actor.score >= 30) {
		const baseByForce = getBaseByForce(base, 3);
		return baseByForce[getRandomArbitrary(0, baseByForce.length)];
	}

	const baseByForce = getBaseByForce(base, 4);
	return baseByForce[getRandomArbitrary(0, baseByForce.length)];
}

function chooseActionOrQuestion () {
	return getRandomArbitrary(1, 3) === 1 ? getQuestionBase() : getActionBase();
}

function chooseUser (user1, user2) {
	if (user1.clothes === 0) {
		return user2;
	}
	if (user2.clothes === 0) {
		return user1;
	}

	if (user2.score - user1.score > 10) {
		return user2;
	} else if (user1.score - user2.score > 10) {
		return user1;
	}
	return getRandomArbitrary(1, 3) === 1 ? user1 : user2;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports={
	getActionBase,
	getQuestionBase,
	getBuildingFinish
};
