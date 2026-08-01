// test()

// function test() {
//     document.write("ay 7aga")
// }

// const test1 = function () {
//     document.write("test 1")
// }
// test1()


// const add = function(x,y){
//     return(x+y);
// }

// let a = add(5,3)


// let user = {
//     name:"marwa",
//     age: 41,
//     print: function(){
//         console.log(`user name is ${this.name} and age is ${this.age}`)
//     }
// }

// user.print()

//arrow function 
// const a = () =>{
//     console.log("abc")
// }
// a()

// let user = {
//     name:"marwa",
//     age: 41,
//     print: function(){
//         console.log(this)
//     }
// }
// user.print()

// const users = [
//   {
//     "id": 1,
//     "name": "Alex Johnson",
//     "email": "alex.johnson@example.com",
//     "role": "admin",
//     "isActive": true
//   },
//   {
//     "id": 2,
//     "name": "Sam Taylor",
//     "email": "sam.taylor@example.com",
//     "role": "editor",
//     "isActive": true
//   },
//   {
//     "id": 3,
//     "name": "Jordan Lee",
//     "email": "jordan.lee@example.com",
//     "role": "viewer",
//     "isActive": false
//   }
// ]
// const res = document.querySelector("#res")
// const printArray = function(data){
//     let response = ""
//     data.forEach(user=>{
//         response += `<p>${user.name}<p>`;
//     })
//     res.innerHTML = response
// }

// printArray(users)

// const res = document.querySelector("#res")
// const p = document.createElement("p")
// p.textContent = "hello"
// res.appendChild(p)
const users = [
    {
        "id": 1,
        "name": "Alex Johnson",
        "email": "alex.johnson@example.com",
        "role": "admin",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
        "isActive": true
    },
    {
        "id": 2,
        "name": "Sam Taylor",
        "email": "sam.taylor@example.com",
        "role": "editor",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
        "isActive": true
    },
    {
        "id": 3,
        "name": "Jordan Lee",
        "email": "jordan.lee@example.com",
        "role": "viewer",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
        "isActive": false
    },
    {
        "id": 4,
        "name": "Marcus Chen",
        "email": "marcus.chen@example.com",
        "role": "admin",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
        "isActive": true
    },
    {
        "id": 5,
        "name": "Elena Rostova",
        "email": "elena.rostova@example.com",
        "role": "editor",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
        "isActive": true
    },
    {
        "id": 6,
        "name": "David Kim",
        "email": "david.kim@example.com",
        "role": "viewer",
        "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
        "isActive": true
    },
    {
        "id": 7,
        "name": "Sophia Martinez",
        "email": "sophia.martinez@example.com",
        "role": "editor",
        "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=300",
        "isActive": true
    },
    {
        "id": 8,
        "name": "James Wilson",
        "email": "james.wilson@example.com",
        "role": "viewer",
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
        "isActive": false
    },
    {
        "id": 9,
        "name": "Aisha Patel",
        "email": "aisha.patel@example.com",
        "role": "admin",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
        "isActive": true
    },
    {
        "id": 10,
        "name": "Lucas Silva",
        "email": "lucas.silva@example.com",
        "role": "editor",
        "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300",
        "isActive": true
    },
    {
        "id": 11,
        "name": "Emma Watson",
        "email": "emma.watson@example.com",
        "role": "viewer",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
        "isActive": true
    },
    {
        "id": 12,
        "name": "Omer Yilmaz",
        "email": "omer.yilmaz@example.com",
        "role": "viewer",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300",
        "isActive": false
    },
    {
        "id": 13,
        "name": "Chloe Dubois",
        "email": "chloe.dubois@example.com",
        "role": "editor",
        "avatar": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=300",
        "isActive": true
    },
    {
        "id": 14,
        "name": "Tariq Al-Mansoor",
        "email": "tariq.almansoor@example.com",
        "role": "viewer",
        "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=300",
        "isActive": true
    },
    {
        "id": 15,
        "name": "Hannah Abbott",
        "email": "hannah.abbott@example.com",
        "role": "admin",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
        "isActive": true
    }
]
const createMyElement = (ele, parent, txt, classes, cAttr = []) => {
    const el = document.createElement(ele)
    parent.appendChild(el)
    if (txt) el.innerText = txt
    if (classes) el.className = classes
    cAttr.forEach(c => {
        el.setAttribute(c.name, c.val)
    })
    return el
}

const tbody = document.querySelector("tbody")
// users.forEach(u => {
//     const tr = document.createElement("tr")
//     tbody.appendChild(tr)

//     let td = document.createElement("td")
//     tr.appendChild(td)
//     td.textContent = u.id

//     td = document.createElement("td")
//     tr.appendChild(td)
//     td.textContent = u.name

//     td = document.createElement("td")
//     tr.appendChild(td)
//     td.textContent = u.email

//     td = document.createElement("td")
//     td.textContent = u.role
//     tr.appendChild(td)

//     td = document.createElement("td")
//     let img = document.createElement("img")
//     td.appendChild(img)
//     img.src= u.avatar
//     img.style.width = "100px"
//     img.style.height = "100px"
//     img.className = "img-fluid rounded-circle"

//     tr.appendChild(td)
//     td = document.createElement("td")
//     td.textContent = u.isActive

//     tr.appendChild(td)
//     td = document.createElement("td")
//     tr.appendChild(td)
//     let delBtn = document.createElement("button")
//     td.appendChild(delBtn)
//     delBtn.className="btn btn-danger mx-2"
//     delBtn.innerText = "Delete"
//     let chgBtn = document.createElement("button")
//     td.appendChild(chgBtn)
//     chgBtn.className="btn btn-warning mx-2"
//     chgBtn.innerText = "Change Status"

// })
users.forEach(u => {
    const tr = createMyElement("tr", tbody, false, false)
    let td = createMyElement("td", tr, u.id, false)
    td = createMyElement("td", tr, u.name, false)
    td = createMyElement("td", tr, u.email, false)
    td = createMyElement("td", tr, u.role, false)
    td = createMyElement("td", tr, false, false)
    const imgCAttr = [{ name: "src", val: u.avatar },
    { name: "width", val: "100px" },
    { name: "height", val: "100px" }]
    let img = createMyElement("img", td, false, "img-fluid rounded-circle", imgCAttr)
    td = createMyElement("td", tr, u.isActive)
    td = createMyElement("td", tr, false)
    let delBtn = createMyElement("button", td, "Delete", "btn btn-danger mx-2")
    let chgBtn = createMyElement("button", td, "Change Status", "btn btn-warning mx-2")
})