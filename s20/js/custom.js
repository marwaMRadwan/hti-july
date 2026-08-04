let addForm = document.querySelector("#addForm")
let attrs = ["fname", "lname", "userName", "city","state","zipCode","agreement"]
const newAttrs =[
  { "name": "fname", "isRequired": true, "minLen": 3, "maxLen": 20, type:"value" },
  { "name": "lname", "isRequired": true, "minLen": 3, "maxLen": 20, type:"value" },
  { "name": "userName", "isRequired": true, "minLen": 3, "maxLen": 20 , type:"value"},
  { "name": "city", "isRequired": true, "minLen": 3, "maxLen": 20, type:"value" },
  { "name": "state", "isRequired": true, "minLen": 3, "maxLen": 20 , type:"value"},
  { "name": "zipCode", "isRequired": false, "minLen": 3, "maxLen": 20 , type:"value"},
  { "name": "agreement", "isRequired": true, "minLen": 3, "maxLen": 20 , type:"checked"}
]
addForm.addEventListener("submit", function(e){
    e.preventDefault()
    // console.log(addForm.elements)
    newAttrs.forEach(a=>{
        // if(a=="agreement") console.log(addForm.elements[a].checked)
        // else console.log(addForm.elements[a].value)

        // if(!addForm.elements[a].value || addForm.elements[a].checked){
        //     console.log(`${a} => required`)
        // } 
        let val = addForm[a.name][a.type]
        let attr = a.name
        console.log(addForm[a.name].nextElementSibling)
        if(a.isRequired && isValueReq(val)) {
            addForm[a.name].nextElementSibling.className = "alert alert-danger my-2"
            addForm[a.name].nextElementSibling.innerText = "required field"
        }
        console.log(`${attr} has minlen ${a.minLen} and maxlen ${a.maxLen} and status is ${checkLen(val, a.minLen, a.maxLen)}`)
    })
})


const isValueReq = (attr) =>{
    if(!attr) return true
    else return false
}
const checkLen = (val, min, max)=>{
    return val.length>=min && val.length<=max
}

const isPhone=(val)=>{
    result = true
    if(val.length !=11 ) result = false
    if(!val.startsWith("010", 0) || !val.startsWith("011", 0) || !val.startsWith("012", 0) || !val.startsWith("01", 0)) result = false
    if(!isNumeric(val)) result= false
    return result
}