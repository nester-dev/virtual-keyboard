import toogleCapsLock from './toogleCaps.js';

export default function keyPress(input, keys) {
	document.addEventListener('keydown', (event) => {
		input.focus();
		const key = document.querySelector(`.keyboard__key[data-code="${event.code}"]`);
		if (event.code === 'CapsLock') {
			toogleCapsLock(keys);
		} else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
			keys.forEach((item) => {
				const temp = item;
				if (document.querySelector('.keyboard__key--active')) {
					temp.innerHTML = temp.getAttribute('data-shift').toLowerCase();
				} else {
					temp.innerHTML = temp.getAttribute('data-shift');
				}
			});
		} else {
			key.classList.add('keyboard__key--pressed');
			// input.textContent += key.getAttribute('data-value');
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
