const $h2totalcharacter = document.querySelector("#totalcharacter");
const $h2totalword = document.querySelector("#totalword");
const $h2totalsentence = document.querySelector("#totalsentence");
const $textarea = document.querySelector("#textarea");
const $excludespace = document.querySelector("#textarea");

let spaces = 1;

$textarea = addEventListener("input", () => {
	$h2totalcharacter.textContent = $textarea.value.length;

	if ($textarea.value.length == 0) {
		$h2totalcharacter.textContent = "00";
	}
	if ($textarea.value.length < 10) {
		$h2totalcharacter.textContent = "0" + $textarea.value.length;
	}
	if ($textarea.value.length >= 10000) {
		$h2totalcharacter.textContent = "ERROR";
		console.warn("Max textarea content reached");
	}
});
