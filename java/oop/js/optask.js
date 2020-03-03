class Someclass {
    constructor(num){
    this.prop1 ={}
    this.prop2 = num
    }
}


let father = new Someclass(60)
father.prop1 = new Someclass (50)
father.prop1.prop1 = new Someclass (40)
father.prop1.prop1.prop1 = new Someclass (30)
father.prop1.prop1.prop1.prop1 = new Someclass (20)
father.prop1.prop1.prop1.prop1.prop1 = new Someclass (10)
father.prop1.prop1.prop1.prop1.prop1.prop1 = 0


function f1(obj) {
    if (obj != 0){
        console.log(obj.prop2)
        f1(obj.prop1)
    }
}
f1(father)










//document.write(JSON.stringify(father))
//? document.write(father.prop1.prop2)    you see just num // 