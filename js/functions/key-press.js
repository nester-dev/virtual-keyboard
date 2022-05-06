import toogleCapsLock from './toogleCaps.js';
import caretPosition from './caretPosition.js';

export default function keyPress(textarea, keys) {
	const defaultKeys = ['Backspace', 'Delete', 'Enter', 'Alt', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
	const input = textarea;
	document.addEventListener('keydown', (event) => {
		const key = document.querySelector(`.keyboard__key[data-code="${event.code}"]`);
		if (event.code === 'CapsLock') {
			key.classList.add('keyboard__key--pressed');
			toogleCapsLock(keys);
		} else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
			key.classList.add('keyboard__key--pressed');
			keys.forEach((item) => {
				const temp = item;
				if (document.querySelector('.keyboard__key--active')) {
					temp.textContent = temp.getAttribute('data-shift').toLowerCase();
				} else {
					temp.textContent = temp.getAttribute('data-shift');
				}
			});
		} else if (event.code === 'Tab') {
			event.preventDefault();
			key.classList.add('keyboard__key--pressed');
			caretPosition(input, '    ');
		} else if (defaultKeys.includes(event.code)) {
			event.preventDefault();
			key.classList.add('keyboard__key--pressed');
		} else {
			event.preventDefault();
			key.classList.add('keyboard__key--pressed');
			caretPosition(input, key.textContent);
			input.focus();
		}
	});

	document.addEventListener('keyup', (event) => {
		const key = document.querySelector(`.keyboard__key[data-code="${event.code}"]`);
		key.classList.remove('keyboard__key--pressed');
		if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
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
