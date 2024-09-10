export default class Kartya{
    //adattagok
    #obj={} //privát ojjektum
    #szuloElem;
    //konstruktor
    //tagfuggveny
    constructor(obj,szuloElem){
        this.#obj = obj
        this.#szuloElem = szuloElem
        this.kutyakiir()
        //gombElem
        //AAAAelem
        this.gombElem = this.#szuloElem.find(".kivalaszt:last");
        this.esemenykezelo()
    }
    kutyakiir() {
        this.#szuloElem.append(`<div class="card ">
        <div class="card-body col-lg4"> ${this.#obj.nev} ${this.#obj.kor} ${this.#obj.nem}  </div> <button class="btn btn-success kivalaszt " 
      </div> Őt akarom </button>
      `);
      }
    esemenykezelo(){
        this.gombElem.on("click",()=>{
            const e = new CustomEvent("kivalaszt",{detail:this.#obj})
            window.dispatchEvent(e)
            if (this.#obj.nev=="Pista"){
                alert("Egész biztos?")
            }
        })
    }
}