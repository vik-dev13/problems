/** @format */

const encodeString = (str, markup) => {
	// []
	// get the starting and ending indices for markup , replace the index in strArr
	// extract the range for each markup and enclose the elements within the current markup
	const [start, end, markupStr] = markup;
	let encoded = [];
	const arrStr = str.split("");
	const range = str.slice(start, end + 1);

	encoded = [
		...arrStr.slice(0, start),
		`<${markupStr}>${range}</${markupStr}>`,
		...arrStr.slice(end + 1),
	];
	console.log(encoded.join(""));
};

const ans = encodeString("Hello World", [2, 4, "i"]);
// ans = <i>hel</i>o World
