/** @format */

//  to return a copy that has all undefined replaced with null.

const undefinedToNull = (obj) => {
	// check if object is an array
	// if includes null replace it with null
	// keep checking until no undefined is left

	if (Array.isArray(obj)) {
		if (obj.includes(undefined)) {
			let idx = obj.indexOf(undefined);
			obj[idx] = null;
			undefinedToNull(obj);
		}
		return obj;
	}
	if (typeof obj === "object") {
		Object.keys(obj).forEach((item) => {
			let ans = undefinedToNull(obj[item]);
			obj[item] = ans;
		});
		return obj;
	}
	if (obj === undefined) {
		obj = null;
		return obj;
	}

	return obj;

	// obj is an object
	// loop through key if found undefined change its value

	// if obj == undefined replace it with null
};

let a = {
	a: ["BFE.dev", undefined, "bigfrontend.dev"],
	b: "ans",
	c: { d: undefined },
};
//{ a: undefined, b: "BFE.dev" };

let b = undefinedToNull(a);

console.log("ans--", b);
