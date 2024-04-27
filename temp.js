/** @format */

// /** @format */

// var generate = function (numRows) {
// 	let arr = new Array(numRows);
// 	arr = [[1]];
// 	if (numRows === 1) return arr;
// 	for (let r = 1; r < numRows; r++) {
// 		arr[r] = new Array(r);
// 		for (let c = 0; c <= r; c++) {
// 			if (arr[r - 1][c - 1] === undefined || arr[r - 1][c] === undefined) {
// 				// this can only happen at the ends of triangle
// 				arr[r][c] = 1;
// 			} else {
// 				console.log("r----", r, c);
// 				arr[r][c] = arr[r - 1][c - 1] + arr[r - 1][c];
// 			}
// 		}
// 	}
// 	return arr;
// };

// const a = generate(15);
// console.log("arr---", a);

let removeElement = function (nums, val) {
	let k = 0;
	let fPtr = 0;
	let bPtr = nums.length - 1;
	let len = nums.length - 1;

	while (fPtr !== bPtr) {
		if (nums[fPtr] !== val) {
			k += 1;

			fPtr += 1;
		} else {
			bPtr -= 1;
			temp = nums[bPtr];
			nums[bPtr] = nums[fPtr];
			nums[fPtr] = temp;
		}
	}
	console.log(nums);
	return k;
};

const k = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

console.log(k);
