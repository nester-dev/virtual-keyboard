export default function toogleCapsLock(keys) {
	const capsLock = document.querySelector('.keyboard__key[data-code="CapsLock"');
	const isActive = !capsLock.classList.contains('keyboard__key--active');
	capsLock.classList.toggle('keyboard__key--active', isActive);
	keys.forEach((item) => {
		const temp = item;
		temp.innerHTML = isActive ? temp.innerHTML.toUpperCase() : temp.innerHTML.toLowerCase();
	});
}
