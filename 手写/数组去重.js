// 创建一个含有重复元素的数组
let arr = [1, 1, 2, 3, 3, 6, 7, 2, 9, 9];

// 第一种方法：利用 Set数据结构 + Array.from() 函数
function removeRepeat1(arr) {
	return Array.from(new Set(arr));
}

// 第二种方法： 利用 Set数据结构 + ...扩展运算符
function removeRepeat2(arr) {
	return [...new Set(arr)];
}

// 第三种方法： 利用 indexOf 函数
function removeRepeat3(arr) {
	let new_arr = [];
	for (let i in arr) {
		let item = arr[i];
		if (new_arr.indexOf(item) === -1) {
			new_arr.push(item);
		}
	}
	return new_arr;
}

// 第四种方法： 利用 includes 函数
function removeRepeat4(arr) {
	let new_arr = [];
	for (let i in arr) {
		let item = arr[i];
		if (!new_arr.includes(item)) {
			new_arr.push(item);
		}
	}
	return new_arr;
}

// 第五种方法： 利用 filter 函数
function removeRepeat5(arr) {
	return arr.filter((value, index) => arr.indexOf(value) === index);
}

// 第六种方法： 利用 Map 数据结构
function removeRepeat6(arr) {
	let map = new Map();
	let new_arr = [];
	for (let i in arr) {
		let item = arr[i];
		if (!map.has(item)) {
			map.set(item, true);
			new_arr.push(item);
		}
	}
	return new_arr;
}

// 测试方法
console.log(removeRepeat1(arr));
console.log(removeRepeat2(arr));
console.log(removeRepeat3(arr));
console.log(removeRepeat4(arr));
console.log(removeRepeat5(arr));
console.log(removeRepeat6(arr));
