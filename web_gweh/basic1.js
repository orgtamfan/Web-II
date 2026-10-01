//Old JS
/*var nama = "Budi";
function sapa(n) {
    return ("Halo "+ n + "!");
}
var mk = ["web", "mobile"];
var mk2 = mk.concat(["desktop"]);
*/

//New JS Syntax
const nama = "Budi";
const sapa = n => `Halo ${n}`;
const mk = ["web", "mobile"];
const mk2 = [...mk, "desktop"];

console.log(nama);
console.log(sapa(nama))
console.log(mk2)