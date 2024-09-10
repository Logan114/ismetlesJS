import Kartya from "./kartya.js"

export default class Kartyak {
    #lista=[]
    #taroloElem
    constructor(lista, taroloElem){
        this.#lista = lista
        this.#taroloElem=taroloElem
        this.#taroloElem.empty()
        this.kutyaKiir()
    }
    kutyaKiir(){
        this.#lista.forEach((elem) => {
            console.log(elem)
            new Kartya(elem,this.#taroloElem)
        })
    }
}