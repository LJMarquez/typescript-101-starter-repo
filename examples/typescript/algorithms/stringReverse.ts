// String Reverse - with for loop
/**
 * Reverse a string
 * @param str the string to reverse
 * @returns str the reversed string
 */

function reverseString(str: string): string {
  // let reversedStr: string = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //     reversedStr += str[i];
  // }

  // return reversedStr;

  // return str.split("").reverse().join("");

  // const reversedChars: string[] = [];
  // for (let i = str.length - 1; i >= 0; i--) {
  //     reversedChars.push(str[i]);
  // }

  // return reversedChars.join("");

  const reversedChars: string[] = [];
  let i: number = str.length - 1;
  while (i >= 0) {
    reversedChars.push(str[i]);
    i--;
  }

  return reversedChars.join("");
}

console.log(reverseString("Hello World"));

function isPalindrome(str: string): boolean {
  const result: string = str.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
  return reverseString(result) === result;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Race Car!"));
console.log(isPalindrome("Leo"));