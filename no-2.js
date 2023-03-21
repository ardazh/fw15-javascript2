//10 method beserta contohnya

//1.Method Objek Array: Array.join()
// Method Array .join() berfungsi untuk menggabungkan elemen array menjadi sebuah string.
// contoh:
var arr1 = [1,2,3,4,5,"a","b","c","d","e"];
console.log(arr1.join());         //hasil: 1,2,3,4,5,a,b,c,d,e
console.log(arr1.join("."));      //hasil: 1.2.3.4.5.a.b.c.d.e
console.log(arr1.join("|"));      //hasil: 1|2|3|4|5|a|b|c|d|e
console.log(arr1.join("_"));      //hasil: 1_2_3_4_5_a_b_c_d_e

//2. Array.reverse()
//Method Array.reverse() digunakan untuk membalikkan urutan dari elemen di dalam array.
//contoh:
var arr1 = [1,2,3,4,5,"a","b","c","d","e"];
console.log(arr1.toString());         //hasil: 1,2,3,4,5,a,b,c,d,e
  
arr1.reverse();
console.log(arr1.toString());         //hasil: e,d,c,b,a,5,4,3,2,1

//3.Array.sort()
//Method Array.sort() digunakan untuk mengurutkan elemen dari array. Jika method ini dipanggil tanpa argumen, elemen dari array akan diurutkan berdasarkan abjad.
//contoh:
var arr1 = ["zulkifli","andi","erik","joko","dina"];
arr1.sort();
console.log(arr1.toString());         //hasil: andi,dina,erik,joko,zulkifli
  
var arr2 = [3,5,2,8,,,1,31,22,44,33,11];
arr2.sort();
console.log(arr2.toString());         //hasil: 1,11,2,22,3,31,33,44,5,8,,

//4.Array.reverse()
//Method Array.reverse() digunakan untuk membalikkan urutan dari elemen di dalam array, Method ini akan mengubah array asal.
//contoh:
var arr1 = [1,2,3,4,5,"a","b","c","d","e"];
console.log(arr1.toString());         //hasil: 1,2,3,4,5,a,b,c,d,e
  
arr1.reverse();
console.log(arr1.toString());         //hasil: e,d,c,b,a,5,4,3,2,1

//5.toUpperCase() mengembalikan string yang dikonversi ke huruf besar.
//contoh: 
const str = 'jisoo';
console.log(str.toUpperCase()); // JISOO

//6.toLowerCase() mengembalikan string yang dikonversi ke huruf kecil.
//contoh:
const str = 'Rose';
console.log(str.toLowerCase()); // Rose

//7.startsWith() mengecek apakah string diawali dengan karakter yang ditentukan dalam parameter.
//contoh:
const str = 'reza';

console.log(str.startsWith('re')); // true
console.log(str.startsWith('Re')); // false
console.log(str.startsWith('za', 2)); // true
console.log(str.startsWith('za', 3)); // false

//8.toExponential() mengonversi angka ke notasi eksponensial dan mengembalikannya sebagai string.
//contoh:
(2).toExponential(3); // 2.000e+0

//9.toFixed() memformat angka ke notasi fixed-point.
//contoh:
(2).toFixed(3); // 2.000
(2.2543).toFixed(3); // 2.254
(2.26).toFixed(1); // 2.3
(2.23).toFixed(1); // 2.2

//10.toPrecision() memformat angka agar memiliki panjang yang ditentukan.
//contoh:
(2).toPrecision(3); // 2.00
(2.2543).toPrecision(3); // 2.25
(2.26).toPrecision(2); // 2.3
(2.23).toPrecision(1); // 2