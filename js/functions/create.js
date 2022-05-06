export default function createKeys(parent, lang) {
	for (let i = 0; i < lang.length; i++) {
		const row = document.createElement('div');
		row.classList.add('keyboard__row');

		for (let j = 0; j < lang[i].length; j++) {
			const key = document.createElement('div');
			key.classList.add('keyboard__key');
			key.innerHTML = lang[i][j].value;
			key.setAttribute('data-code', `${lang[i][j].code}`);
			key.setAttribute('data-value', `${lang[i][j].value}`);
			key.setAttribute('data-shift', `${lang[i][j].shift}`);
			if (lang[i][j].special) {
				key.setAttribute('data-special', `${lang[i][j].special}`);
			}

			switch (lang[i][j].code) {
				case 'Backspace':
					key.classList.add('keyboard__key--wide');
					break;

				case 'Tab':
					key.classList.add('keyboard__key--medium');
					break;

				case 'Delete':
					key.classList.add('keyboard__key--medium');
					break;

				case 'CapsLock':
					key.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
					break;

				case 'Enter':
					key.classList.add('keyboard__key--wide');
					break;

				case 'ShiftLeft':
					key.classList.add('keyboard__key--wide');
					break;

				case 'ShiftRight':
					key.classList.add('keyboard__key--wide');
					break;

				case 'ControlLeft':
					key.classList.add('keyboard__key--medium');
					break;

				case 'MetaLeft':
					key.classList.add('keyboard__key--medium');
					break;

				case 'AltLeft':
					key.classList.add('keyboard__key--medium');
					break;

				case 'Space':
					key.classList.add('keyboard__key--extra-wide');
					break;

				case 'AltRight':
					key.classList.add('keyboard__key--medium');
					break;

				case 'ArrowLeft':
					key.classList.add('keyboard__key--dark');
					break;

				case 'ArrowRight':
					key.classList.add('keyboard__key--dark');
					break;

				case 'ArrowDown':
					key.classList.add('keyboard__key--dark');
					break;

				case 'ArrowUp':
					key.classList.add('keyboard__key--dark');
					break;

				case 'ControlRight':
					key.classList.add('keyboard__key--medium');
					break;

				default:
					break;
			}
			row.appendChild(key);
		}
		parent.appendChild(row);
	}
}
