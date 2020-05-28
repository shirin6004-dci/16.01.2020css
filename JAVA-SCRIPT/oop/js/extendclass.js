class Rectangle {
    constructor(height , width){
        this.hei = height
        this.wid = width
        this.name = 'blaREctangle'
    }

    sayName(){                          
        console.log('hi , i am a ' + this.name)
    }
     
    //myArea(){ return this.hei * this.wid }  1
    get myArea(){return this.hei * this.wid}  //!  2    change method to property with(GET)
    
   set myArea (value) {         //!  save what privat  3
       this._realArea = value
   }
}



let myhome = new Rectangle(11,13)
myhome.sayName()
//console.log(myhome.myArea())  1
console.log(myhome.myArea)  //  2

myhome.hei = 5  //?  can change hei
console.log(myhome.myArea)
myhome.myArea = 100      //3
document.write(myhome._realArea )  //3

//---------------------


let nedahome = new Rectangle(7,10)
nedahome.sayName()
//console.log(nedahome.myArea()) 1
console.log(nedahome.myArea)  // 2
document.write(JSON.stringify(nedahome) )  //! JSON.stringify   show details in string 
document.write("<br>")

//*======================extends===damit you can call class(vater)================== 

class Blasquare extends Rectangle{    //!
        constructor(length){
            super(length,length)   // call constructor from rectangle(vater) -- musst be first
            this.name = 'square'
          
        }
}



let myoffis = new Blasquare(3)
console.log(myoffis.myArea)