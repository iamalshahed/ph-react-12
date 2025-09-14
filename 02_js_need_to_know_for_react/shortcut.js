const test = "shahed";

/*
if (test) {
  console.log("truthy");
} else {
  console.log("falsy");
}
*/

test ? console.log("eida sotti") : console.log("eida misa kota");

const num = 30;
const result = num >= 10 && num < 20 ? "true hoiche" : "false hoiche";
console.log(result);

const isActive = true;
const showUser = () => console.log("show user");
const hideUser = () => console.log("hide user");

// isActive ? showUser() : hideUser();

isActive && showUser(); // sudhu matro ekta conditoin dekhanor jonno use kora hoiche.. jodi user true hoi tahole eita dekhabe and false hole kichui dekhabe na

isActive || hideUser(); // jodi eon chawa hoi je sudhu false hole ekta output dekhabe tahole emonvabe or operator use krte hobe.. jodi flase hoi sudhumatro taholei kebol eita run hobe.. otherwise true hole exicute hobe na

let n = "10"; // string type
console.log(typeof +n); // typeof number cz eida shortcut string ke number e convert korar jonno

let a = 10 + "";
console.log(typeof a); // type of is string.. eita string e convert kore dibe.. mane ami jodi kono number er sathe empty string jog kori tahole seita string e convert hoye jabe

let b = "10" - 0; // typeof number.. cz eivabew number e convert kore dei.
console.log(typeof b);
 // ei somosto jiniske type quartion bole