'use strict'

const expect = require('chai').expect;
const assert = require('assert');
const proxyquire = require('proxyquire');

const Action = require('../../src/class/Action.js');
const Question = require('../../src/class/Question.js');
const User = require('../../src/class/User.js');

const baseAggregateMock = proxyquire('../../src/lib/baseAggregate.js', {
	path: {
		dirname: function (uri) {
			if (uri === '/../../dataBases/actions.json') {
				return __dirname + '/config/actionsForTest.json';
			}

			return __dirname + '/config/questionsForTest.json'; 
		}
	}
});

describe('#getActionBase', function () {
	it('should return an action array', function () {
		const actionsArray = baseAggregateMock.getActionBase(); 

		expect(actionsArray).to.be.an.instanceof(Array);
		expect(actionsArray[0]).to.be.an.instanceof(Action);

	});
});

describe('#getQuestionBase', function () {
	it('should return a question array', function () {
		const questionArray = baseAggregateMock.getQuestionBase(); 

		expect(questionArray).to.be.an.instanceof(Array);
		expect(questionArray[0]).to.be.an.instanceof(Question);

	});
});

describe('#getBuildingFinish', function () {
	it('should naked Users', function () {
		const User1 = new User('foo', 8);
		const User2 = new User('bar', 7);
		
		const finishArray = baseAggregateMock.getBuildingFinish(User1, User2);

		expect(User1.clothes).to.be.equal(0);
		expect(User2.clothes).to.be.equal(0);
	});
	it('should not take away score', function () {
		const User1 = new User('foo', 8);
		const User2 = new User('bar', 7);
		
		const finishArray = baseAggregateMock.getBuildingFinish(User1, User2);

		expect(User1.score - User2.score).to.be.below(10);
	});
});
