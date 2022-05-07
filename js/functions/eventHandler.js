import toogleCapsLock from './toogleCaps.js';
import caretPosition from './caretPosition.js';

export default function eventHandler(event1, event2, textarea, keys, keyboard) {
	const defaultKeys = ['ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
	const input = textarea;
	const mouseEvent = ['mousedown', 'mouseup'];
	const keyboardEvent = ['keydown', 'keyup'];
	let parent;
	let isKeyboardEvent = false;

	if (mouseEvent.includes(event1)) {
		parent = keyboard;
	}

	if (keyboardEvent.includes(event1)) {
		parent = document;
		isKeyboardEvent = true;
	}
	parent.addEventListener(event1, (event) => {
		event.preventDefault();
		let key;
		if (isKeyboardEvent) {
			key = document.querySelector(`.keyboard__key[data-code="${event.code}"]`);
		}
		if (event.target.classList.contains('keyboard__key')) {
			key = event.target;
		}

		if (key && key.getAttribute('data-code') === 'CapsLock') {
			key.classList.add('keyboard__key--pressed');
			toogleCapsLock(keys);
		} else if (key && (key.getAttribute('data-code') === 'ShiftLeft' || key.getAttribute('data-code') === 'ShiftRight')) {
			key.classList.add('keyboard__key--pressed');
			keys.forEach((item) => {
				const temp = item;
				if (document.querySelector('.keyboard__key--active')) {
					temp.textContent = temp.getAttribute('data-shift').toLowerCase();
				} else {
					temp.textContent = temp.getAttribute('data-shift');
				}
			});
		} else if (key && key.getAttribute('data-code') === 'Space') {
			key.classList.add('keyboard__key--pressed');
			caretPosition(input, ' ');
		} else if (key && key.getAttribute('data-code') === 'Backspace') {
			key.classList.add('keyboard__key--pressed');
			caretPosition(input, '', 'Backspace');
		} else if (key && key.getAttribute('data-code') === 'Enter') {
			key.classList.add('keyboard__key--pressed');
			caretPosition(input, '\n');
		} else if (key && key.getAttribute('data-code') === 'Delete') {
			key.classList.add('keyboard__key--pressed');
			caretPosition(input, '', 'Delete');
		} else if (key && key.getAttribute('data-code') === 'Tab') {
			key.classList.add('keyboard__key--pressed');
			caretPosition(input, '    ');
		} else if (key && defaultKeys.includes(key.getAttribute('data-code'))) {
			event.preventDefault();
			key.classList.add('keyboard__key--pressed');
		} else if (key) {
			key.classList.add('keyboard__key--pressed');
			caretPosition(input, key.textContent);
		}
	});

	document.addEventListener(event2, (event) => {
		let key;
		if (isKeyboardEvent) {
			key = document.querySelector(`.keyboard__key[data-code="${event.code}"]`);
		} else {
			key = event.target;
		}
		key.classList.remove('keyboard__key--pressed');
		if (key && (key.getAttribute('data-code') === 'ShiftLeft' || key.getAttribute('data-code') === 'ShiftRight')) {
			keys.forEach((item) => {
				const temp = item;
				if (document.querySelector('.keyboard__key--active')) {
					temp.innerHTML = temp.getAttribute('data-value').toUpperCase();
				} else {
					temp.innerHTML = temp.getAttribute('data-value');
				}
			});
		}
	});
}
