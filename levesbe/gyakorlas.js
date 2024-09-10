import Kartya from "../kartya.js"
import { kutyaLISTA } from "../adatok.js"
const cim ="Minden amit a kugyárol tudni kell"
const headerHtml = $("header")
const tartalomHTML = $(".tartalom")
headerHtml.append(`<p>${cim}</p>`)


kutyaLISTA.forEach((elem)=>{
    console.log(elem)
    new Kartya(elem,tartalomHTML)
})
