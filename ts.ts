function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

let xn = { a: 1, b: 2, c: 3, d: 4 };

getProperty(xn, 'a'); // ok
// getProperty(x, 'm'); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
console.log('1' + 2);

//函数重载
type Combinable = string | number;
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}
	return a + b;
}
const result = add(1, 2);

interface Test<T> {
	name: string;
	age: number;
	info: T;
}

const data: Test<boolean> = {
	name: 'sun',
	age: 30,
	info: true
};
