export default function caretPosition(textarea, value) {
	const input = textarea;
	const start = input.selectionStart;
	const end = input.selectionEnd;
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
