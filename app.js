// Form validation
// Validating and displaying form field
(function () {
	let nameInput = document.querySelector("input[id='cardHolder']");
	let name = document.querySelector(".cardFront .bottom .name");
	let nameErr = document.querySelector(".nameErr");
	nameInput.addEventListener("keyup", (e) => {
		let value = nameInput.value;

		if (/^[a-zA-Z\.\s-_\']+$/.test(value) || value == "") {
			if (value == "") {
				name.textContent = "Jane Appleseed";
				return;
			}
			name.textContent = value;
			nameInput.style.borderColor = "hsl(278, 68%, 11%)";
			nameErr.style.display = "none";
		} else {
			nameInput.style.borderColor = "red";
			nameErr.style.display = "block";
			nameErr.textContent = "Invalid card holder name";
		}
	});
	nameInput.addEventListener("blur", () => {
		let value = nameInput.value;
		value = value.replace(/\s/gi, "");
		if (value === "") {
			name.textContent = "Jane Appleseed";
			displayErr(nameErr, "Card holder name cannot be empty");
			return;
		}
	});
	nameInput.addEventListener("focus", () => {
		nameErr.style.display = "none";
	});
})();

function formatCardNumer(num) {
	return `${num.substring(0, 4)} ${num.substring(4, 8)} ${num.substring(
		8,
		12
	)} ${num.substring(12, 16)}`;
}

function displayErr(elem, textContent) {
	elem.style.display = "block";
	elem.textContent = textContent;
}
// Validating card number
(function () {
	let cardNumberInput = document.querySelector("input[id='cardNumber']");
	let cardNumber = document.querySelector(".cardFront .cardNumber");
	let cardNumberErr = document.querySelector(".cardNumberErr");
	cardNumberInput.addEventListener("keyup", (e) => {
		let value = cardNumberInput.value;
		if (/^[0-9\s]+$/.test(value) || value == "") {
			// Remove all whitespaces
			value = value.replace(/\s/gi, "");
			if (value == "") {
				cardNumber.textContent = "0000 0000 0000 0000";
				return;
			}
			if (value.length > 16) {
				displayErr(cardNumberErr, "Card number must be 16 digits in total");
				return;
			}
			cardNumber.textContent = formatCardNumer(value);
			cardNumberInput.style.borderColor = "hsl(278, 68%, 11%)";
			cardNumberErr.style.display = "none";
			cardNumberInput.value = formatCardNumer(value);
		} else {
			cardNumberInput.style.borderColor = "red";
			displayErr(cardNumberErr, "Wrong format , numbers only");
		}
	});
	cardNumberInput.addEventListener("blur", () => {
		let value = cardNumberInput.value;
		value = value.replace(/\s/gi, "");
		if (value === "") {
			cardNumber.textContent = "0000 0000 0000 0000";
			displayErr(cardNumberErr, "Card number cannot be empty");
			return;
		}

		if (value.length !== 16) {
			displayErr(cardNumberErr, "Card number must be 16 digits in total");
		}
	});
	cardNumberInput.addEventListener("focus", () => {
		cardNumberErr.style.display = "none";
	});
})();

// Validating cvc
(function () {
	let cvcInput = document.querySelector("input[id='cvc']");
	let cvc = document.querySelector(".cardBack .cvc");
	let cvcErr = document.querySelector(".cvcErr");
	cvcInput.addEventListener("keyup", (e) => {
		let value = cvcInput.value;
		if (/^[0-9\s]+$/.test(value) || value == "") {
			// Remove all whitespaces
			value = value.replace(/\s/gi, "");
			if (value == "") {
				cvc.textContent = "000";
				return;
			}
			if (value.length > 3) {
				displayErr(cvcErr, "CVC must be 3 digits");
				return;
			}
			cvc.textContent = value;
			cvcInput.style.borderColor = "hsl(278, 68%, 11%)";
			cvcErr.style.display = "none";
		} else {
			cvcInput.style.borderColor = "red";
			displayErr(cvcErr, "Wrong format , numbers only");
		}
	});
	cvcInput.addEventListener("blur", () => {
		let value = cvcInput.value;
		value = value.replace(/\s/gi, "");
		if (value === "") {
			cvc.textContent = "000";
			displayErr(cvcErr, "Can't be blank");
			return;
		}
	});
	cvcInput.addEventListener("focus", () => {
		cvcErr.style.display = "none";
	});
})();

// Validating month
(function () {
	let monthInput = document.querySelector("input[id='month']");
	let month = document.querySelector(".cardFront .month");
	let expErr = document.querySelector(".expErr");
	monthInput.addEventListener("keyup", (e) => {
		let value = monthInput.value;
		if (/^[0-9\s]+$/.test(value) || value == "") {
			// Remove all whitespaces
			value = value.replace(/\s/gi, "");
			if (value == "") {
				month.textContent = "00";
				return;
			}
			if (+value > 12) {
				displayErr(expErr, "Invalid month value");
				return;
			}
			if (+value < 10) {
				month.textContent = `0${value}`;
				return;
			}
			if (value.length > 2) {
				displayErr(expErr, "Month must be 2 digits");
				return;
			}
			month.textContent = value;
			monthInput.style.borderColor = "hsl(278, 68%, 11%)";
			expErr.style.display = "none";
		} else {
			monthInput.style.borderColor = "red";
			displayErr(expErr, "Wrong format , numbers only");
		}
	});
	monthInput.addEventListener("blur", () => {
		let value = monthInput.value;
		value = value.replace(/\s/gi, "");
		if (value === "") {
			month.textContent = "00";
			displayErr(expErr, "Month can't be blank");
			return;
		}
	});
	monthInput.addEventListener("focus", () => {
		expErr.style.display = "none";
	});
})();

// Validating year
(function () {
	let yearInput = document.querySelector("input[id='year']");
	let year = document.querySelector(".cardFront .year");
	let yearErr = document.querySelector(".expErr");
	yearInput.addEventListener("keyup", (e) => {
		let value = yearInput.value;
		if (/^[0-9\s]+$/.test(value) || value == "") {
			// Remove all whitespaces
			value = value.replace(/\s/gi, "");
			if (value == "") {
				year.textContent = "00";
				return;
			}

			if (+value < 10) {
				year.textContent = `0${value}`;
				return;
			}
			if (value.length > 2) {
				displayErr(expErr, "Year must be 2 digits");
				return;
			}
			year.textContent = value;
			yearInput.style.borderColor = "hsl(278, 68%, 11%)";
			yearErr.style.display = "none";
		} else {
			yearInput.style.borderColor = "red";
			displayErr(yearErr, "Wrong format , numbers only");
		}
	});
	yearInput.addEventListener("blur", () => {
		let value = yearInput.value;
		value = value.replace(/\s/gi, "");
		if (value === "") {
			year.textContent = "00";
			displayErr(yearErr, "Year can't be blank");
			return;
		}
	});
	yearInput.addEventListener("focus", () => {
		yearErr.style.display = "none";
	});
})();

// Form submit
(function () {
	let form = document.querySelector("form");
	let complete = document.querySelector(".complete");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		// Too lazy to do form validation again
		let formData = new FormData(form);
		let name = formData.get("cardHolder");
		let number = formData.get("cardNumber");
		let cvc = formData.get("cvc");
		let month = formData.get("month");
		let year = formData.get("year");

		// Checking for empty fields
		// If all the fields are empty don't validate form. User will receive no feedback
		if (name == "" && number == "" && cvc == "" && month == "" && year == "") {
			return;
		}
		// Check if no err is displayed :
		//  If there is an error displayed don't do anything else display the success message
		let errors = document.querySelectorAll(".err");
		let arr = Array.from(errors);
		let check = arr.every((e) => {
			let style = getComputedStyle(e);
			return style.display == "none";
		});
		if (check) {
			form.style.display = "none";
			complete.style.display = "flex";
		}
	});
})();
