import english from './layouts/en.js';
import createKeys from './functions/create.js';

const Keyboard = {
	elements: {
		container: null,
		textarea: null,
		keyboard: null,
	},

	properties: {
		capslock: null,
		keys: [],
	},

	init() {
		this.elements.container = document.createElement('div');
		this.elements.textarea = document.createElement('textarea');
		this.elements.keyboard = document.createElement('div');

		this.elements.container.classList.add('container');
		this.elements.textarea.classList.add('textarea');
		this.elements.keyboard.classList.add('keyboard');

		this.elements.container.appendChild(this.elements.textarea);
		createKeys(this.elements.keyboard, english);
		this.elements.container.appendChild(this.elements.keyboard);
		document.body.appendChild(this.elements.container);
	},

};

Keyboard.init();
