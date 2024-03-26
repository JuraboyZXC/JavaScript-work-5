// 1---
let a = prompt("Maestro").trim().toLowerCase()
if (a == "maestro") {
    console.log("To'g'ri");
} else {
    console.log("Xato");
}

// 2---
let b = confirm("Вы соглашаетесь с политикой конфиденциальности?")
if (b == true) {
    console.log("Welcome");
} else {
    console.log("Good Bye");
}

// 3---
let c = prompt("Number 1 +")
let d = prompt("Number 2 +")
let e = prompt("Ответь ?:")
if (parseFloat(c) + parseFloat(d) == e) {
    console.log("Молодец!");
} else {
    console.log(":(");
}

// 4---
let f = prompt("Yoshing 18 dami?")
if (f > 18) {
    console.log("Welcome");
} else if (f >= 18) {
    console.log("Congratulations");
} else {
    console.log("Good Bye");
}

// 5--- 
let g = prompt("iltimos (ROZIMAN) deb yozing")
if (g == "ROZIMAN") {
    console.log("Raxmat javobimizni kuting");
} else {
    console.log("Shartni notug'ri kirittinggiz!");
}

// 6--- 
let q = prompt("Dasturlash yomon ishmi? 'Xa' yoki 'Yoq'").trim().toLowerCase()
if (q == "xa") {
    console.log("Baloni yebsiz");
} else if (q == "yoq") {
    console.log("To'g'ri");
} else {
    console.log("'Xa' yoki 'Yoq' javobini bering");
}

// 7---
let w = confirm("'50' katta '100'dan!")
if (w == false) {
    console.log("To'g'ri");
} else {
    console.log("50 kattamas 100dan!");
}

// 8--- 
let r = prompt("'frotndne' harflarni to'g'ri joylashtirib tozing").trim().toLowerCase()
if (r == "frontend") {
    console.log("Yaxshi");
} else {
    console.log("Xato");
}

//  9---
let t = prompt("Ikkita raqam yig'indisi 100 ga teng bo'lsin! NUMBER 1")
let y = prompt("Ikkita raqam yig'indisi 100 ga teng bo'lsin! NUMBER 2")
if (parseFloat(t) + parseFloat(y) == 100) {
    console.log("Zur");
} else {
    console.log("Xato, yana urinib ko'ring");
}

// 10---
let u = prompt("HTML, CSS, JS dan qaysi biri dasturlash tili ?").trim().toLowerCase()
if (u == "js") {
    console.log("To'g'ri");
} else {
    console.log("Xato");
}


// ERROR

// let u = prompt("HTML, CSS, JavaScript dan qaysi biri dasturlash tili ?").trim().toLowerCase()
// if (u == "javascript", "js") {
//     console.log("To'g'ri");
// } else if (u == "html") {
//     console.log("Xato, HTML dastulash tili emas!");
// } else if (u == "css") {
//     console.log("Xato, CSS dasturlash tili emas!");
// } else {
//     console.log("Quyida berilganlardan birini yozing!");
// }