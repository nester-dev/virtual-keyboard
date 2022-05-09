export default function changeLang(currLang, arr, english, russian) {
	let language = currLang;
	let changedLang;
	const keys = arr;
	document.addEventListener('keydown', (event) => {
		if (event.altKey && event.shiftKey) {
			if (language === 'en') {
				language = 'ru';
				localStorage.setItem('lang', JSON.stringify(language));
				changedLang = russian;
			} else if (language === 'ru') {
				language = 'en';
				localStorage.setItem('lang', JSON.stringify(language));
				changedLang = english;
			}

			let count = 0;
			for (let i = 0; i < changedLang.length; i++) {
				for (let j = 0; j < changedLang[i].length; j++) {
					if (!changedLang[i][j].special) {
						keys[count].innerHTML = changedLang[i][j].value;
						keys[count].setAttribute('data-code', `${changedLang[i][j].code}`);
						keys[count].setAttribute('data-value', `${changedLang[i][j].value}`);
						keys[count].setAttribute('data-shift', `${changedLang[i][j].shift}`);
						count++;
					}
				}
			}
		}
	});
}
