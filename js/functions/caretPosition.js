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
