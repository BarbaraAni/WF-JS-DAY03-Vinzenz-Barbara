function ages(year) {
	var thisyear = new Date().getFullYear();
	var age = thisyear - year
	document.write(age)
}

ages(1999);

