import { kutyaLISTA } from "./adatok.js";
import Kartyak from "./view/Kartyak.js";
const tartalomHTML = $(".tartalom")
const kivalasztottHTML = $(".kivalasztottak")
let kivalasztottKutyaLista = []
new Kartyak(kutyaLISTA,tartalomHTML)
$(window).on("kivalaszt",(event)=>{
    console.log(event.detail)
    kivalasztottKutyaLista.push(event.detail)
    new Kartyak(kivalasztottKutyaLista,kivalasztottHTML)
})