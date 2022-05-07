import english from './layouts/en.js';
import russian from './layouts/ru.js';
import createKeys from './functions/create.js';
import eventHandler from './functions/eventHandler.js';
import changeLang from './functions/changeLang.js';

const Keyboard = {
	elements: {
		container: null,
		textarea: null,
		keyboard: null,
	},

	properties: {
		capslock: null,
		keys: [],
		currLang: 'en',
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

		document.querySelectorAll('.keyboard__key').forEach((value) => {
			if (!value.getAttribute('data-special')) {
				this.properties.keys.push(value);
			}
		});

		eventHandler('keydown', 'keyup', this.elements.textarea, this.properties.keys, this.elements.keyboard);
		eventHandler('mousedown', 'mouseup', this.elements.textarea, this.properties.keys, this.elements.keyboard);
		changeLang(this.properties.currLang, this.properties.keys, english, russian);
	},

};

Keyboard.init();
