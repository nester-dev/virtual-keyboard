export default function caretPosition(textarea, value, specialKey) {
	const input = textarea;
	const start = input.selectionStart;
	const end = input.selectionEnd;
	if (specialKey && specialKey === 'Backspace') {
		if (start === end && (start && end) !== 0) {
			input.value = input.value.substr(0, start - 1) + input.value.substr(start);
			input.selectionStart = start - 1;
			input.selectionEnd = start - 1;
		} else {
			input.value = input.value.substr(0, start) + input.value.substr(end);
			input.selectionStart = start;
			input.selectionEnd = start;
		}
		input.focus();
		return;
	}

	if (specialKey && specialKey === 'Delete') {
		if (start === end) {
			input.value = input.value.substr(0, start) + input.value.substr(start + 1);
			input.selectionStart = start;
			input.selectionEnd = start;
		} else {
			input.value = input.value.substr(0, start) + input.value.substr(end);
			input.selectionStart = start;
			input.selectionEnd = start;
		}
		input.focus();
		return;
	}

	if (specialKey && specialKey === 'ArrowLeft') {
		if (start === end && (start && end) !== 0) {
			input.selectionStart = start - 1;
			input.selectionEnd = start - 1;
		} else {
			input.selectionStart = start;
			input.selectionEnd = start;
		}
		input.focus();
		return;
	}

	if (specialKey && specialKey === 'ArrowRight') {
		if (start === end && (start && end) !== input.value.length) {
			input.selectionStart = start + 1;
			input.selectionEnd = start + 1;
		} else {
			input.selectionStart = end;
			input.selectionEnd = end;
		}
		input.focus();
		return;
	}

	if (specialKey && specialKey === 'ArrowDown') {
		if (!input.value.includes('\n', start)) {
			input.selectionStart = input.value.length;
			input.selectionEnd = input.value.length;
		} else {
			const searchString = input.value.substring(0, start);
			if (!searchString.includes('\n') && input.value.charAt(start) !== '\n') {
				const count = 0 + start;
				const en1 = input.value.indexOf('\n');
				const en2 = input.value.indexOf('\n', en1 + 1);
				if (count >= en2 - en1) {
					input.selectionStart = en2;
					input.selectionEnd = en2;
				} else {
					input.selectionStart = input.value.indexOf('\n') + count + 1;
					input.selectionEnd = input.value.indexOf('\n') + count + 1;
				}
			} else {
				const temp = start - searchString.lastIndexOf('\n');
				const enter1 = input.value.indexOf('\n', start);
				let enter2 = input.value.indexOf('\n', enter1 + 1);
				if (enter2 > 0 && temp > enter2 - enter1) {
					input.selectionStart = enter2;
					input.selectionEnd = enter2;
				} else if (enter2 < 0) {
					enter2 = input.value.length;
					if (temp > enter2 - enter1) {
						input.selectionStart = input.value.length;
						input.selectionEnd = input.value.length;
					} else {
						input.selectionStart = enter1 + temp;
						input.selectionEnd = enter1 + temp;
					}
				} else {
					input.selectionStart = input.value.indexOf('\n', start) + temp;
					input.selectionEnd = input.value.indexOf('\n', start) + temp;
				}
			}
		}
		input.focus();
		return;
	}

	if (specialKey && specialKey === 'ArrowUp') {
		const searchString = input.value.substring(0, start);
		if (!searchString.includes('\n')) {
			input.selectionStart = 0;
			input.selectionEnd = 0;
		} else {
			const temp = start - searchString.lastIndexOf('\n');
			const enter1 = searchString.lastIndexOf('\n');
			const enter2 = searchString.substring(0, enter1).lastIndexOf('\n');
			if (enter2 > 0 && temp >= enter1 - enter2) {
				input.selectionStart = enter1;
				input.selectionEnd = enter1;
			} else if (enter2 < 0) {
				if (temp >= enter1) {
					input.selectionStart = enter1;
					input.selectionEnd = enter1;
				} else {
					input.selectionStart = 0 + temp - 1;
					input.selectionEnd = 0 + temp - 1;
				}
			} else {
				input.selectionStart = enter2 + temp;
				input.selectionEnd = enter2 + temp;
			}
		}
		input.focus();
		return;
	}

	if (start === end) {
		input.value = input.value.substr(0, start) + value + input.value.substr(start);
	} else if (start > end) {
		input.value = input.value.substr(0, end) + value + input.value.substr(start);
	} else {
		input.value = input.value.substr(0, start) + value + input.value.substr(end);
	}
	input.selectionStart = start + value.length;
	input.selectionEnd = start + value.length;
	input.focus();
}
