'use strict'

const fs = require('fs');
const path = require('path');

const Action = require('../class/Action.js');
const Question = require('../class/Question.js');
const ACTION_FILE = path.dirname('/../../dataBases/actions.json');
const QUESTION_FILE = path.dirname('/../../dataBases/questions.json');

const actionsArray = [];
const questionsArray = [];

function buildDataBase(Constructor, dataBase, array) {
	new Promise((resolve, reject) => {
		fs.readFile(dataBase, (err, data) => {
			if (err) {
				reject(err)
			}
			resolve(data);
		});
	}).then(data => {
		const jsonData = JSON.parse(data);

		for (const key in jsonData) {
			array.push(new Constructor(jsonData[key]));
		}

	});
}

buildDataBase(Action, ACTION_FILE, actionsArray);
buildDataBase(Question, QUESTION_FILE, questionsArray);

function getActionBase() {
	return actionsArray;
}

function getQuestionBase() {
	return questionsArray;
}

module.exports={
	getActionBase,
	getQuestionBase
};
