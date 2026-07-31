// variables
// let var const
// operators
//if else
//switch case
// let month = prompt("enter month number")
// switch (month) {
//     case "1": console.log("jan"); break
//     case "2": console.log("feb"); break
//     case "3": console.log("mar"); break
//     case "4": console.log("apr"); break
//     case "5": console.log("may"); break
//     case "6": console.log("jun"); break
//     case "7": console.log("jul"); break
//     case "8": console.log("aug"); break
//     case "9": console.log("sep"); break
//     case "10": console.log("oct"); break
//     case "11": console.log("nov"); break
//     case "12": console.log("dec"); break
//     default: console.log("invalid insertion")
// }

// const chineseZodiac = [
//     { id: 1, nameAr: "الفأر", nameEn: "Rat", emoji: "🐀" },
//     { id: 2, nameAr: "الثور", nameEn: "Ox", emoji: "🐂" },
//     { id: 3, nameAr: "النمور", nameEn: "Tiger", emoji: "🐅" },
//     { id: 4, nameAr: "الأرنب", nameEn: "Rabbit", emoji: "🐇" },
//     { id: 5, nameAr: "التنين", nameEn: "Dragon", emoji: "🐉" },
//     { id: 6, nameAr: "الأفعى", nameEn: "Snake", emoji: "🐍" },
//     { id: 7, nameAr: "الحصان", nameEn: "Horse", emoji: "🐎" },
//     { id: 8, nameAr: "الماعز", nameEn: "Goat", emoji: "🐐" },
//     { id: 9, nameAr: "القرد", nameEn: "Monkey", emoji: "🐒" },
//     { id: 10, nameAr: "الديك", nameEn: "Rooster", emoji: "🐓" },
//     { id: 11, nameAr: "الكلب", nameEn: "Dog", emoji: "🐕" },
//     { id: 12, nameAr: "الخنزير", nameEn: "Pig", emoji: "🐖" }
// ];
// const btn = document.querySelector("#insert")
// const yearOfBirth = document.querySelector("#yOfBirth")
// const res = document.querySelector("#res")
// btn.addEventListener("click", function () {
// const yob = yearOfBirth.value
// let result = null
// alert((yearOfBirth.value % 12) >= 0 && (yearOfBirth.value % 12) <= 11)
// if ((yearOfBirth.value % 12) >= 0 && (yearOfBirth.value % 12) <= 11) {
//     result = chineseZodiac[yearOfBirth.value %12]
// }
// switch ( yearOfBirth.value % 12) {
//     case 1: result = chineseZodiac[0]; break
//     case 2: result = chineseZodiac[1]; break
//     case 3: result = chineseZodiac[2]; break
//     case 4: result = chineseZodiac[3]; break
//     case 5: result = chineseZodiac[4]; break
//     case 6: result = chineseZodiac[5]; break
//     case 7: result = chineseZodiac[6]; break
//     case 8: result = chineseZodiac[7]; break
//     case 9: result = chineseZodiac[8]; break
//     case 10: result = chineseZodiac[9]; break
//     case 11: result = chineseZodiac[10]; break
//     case 12: result = chineseZodiac[11]; break
//     default: result = null
// }
//     if (!result) {
//         res.innerText = "Invalid Insertion"
//         res.className = "alert alert-danger col-4 mx-auto my-3"
//     }
//     else {
//         res.innerText = `Your result is ${result.emoji} ${result.nameEn}`
//         res.className = "alert alert-primary col-4 mx-auto my-3"
//     }
// })

// for while do while foreach filter find
// array basics
// arr = [1,2,3,4,5]
// arr.push("val")
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift("dkd")
// console.log(arr)
// arr.sort()
// console.log(arr)
// a = [1, 2, 3]
// b = ["a", "b", "c"]
// c = a.concat(b)
// console.log(c)
// console.log(a.includes(30))
// console.log(a.reverse());


const data = []
const tbody = document.querySelector("tbody")
const btns = document.querySelectorAll("button")
const d = document.querySelector("#data")
if (!data.length) {
    tbody.innerHTML = `<tr>
<td class='bg-danger text-white' colspan='2'>No Data To Display</td></tr> `
}
btns[0].addEventListener("click", function () {
    data.unshift(d.value)
    d.value = ""
    response = ""
    data.forEach((x, i) => {
        response += `<tr><td>${i + 1} </td><td>${x}</td><tr>`
    })
    tbody.innerHTML = response
})
btns[1].addEventListener("click", function () {
    data.push(d.value)
    d.value = ""
    response = ""
    data.forEach((x, i) => {
        response += `<tr><td>${i + 1} </td><td>${x}</td><tr>`
    })
    tbody.innerHTML = response
})

btns[2].addEventListener("click", function () {
    response = ""
    data.reverse().forEach((x, i) => {
        response += `<tr><td>${i + 1} </td><td>${x}</td><tr>`
    })
    tbody.innerHTML = response
})

btns[3].addEventListener("click", function () {
    response = ""
    data.sort().forEach((x, i) => {
        response += `<tr><td>${i + 1} </td><td>${x}</td><tr>`
    })
    tbody.innerHTML = response
})
