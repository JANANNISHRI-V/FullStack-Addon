function Palindrome(str) {
	let j = str.length - 1
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] != str[j]) {
			return false;
		}
		j--;
	}
	return true;
}

let str1 = "racecar";
let str2 = "amma";
let str3 = "Jananni";

console.log(Palindrome(str1));
console.log(Palindrome(str2));
console.log(Palindrome(str3));
