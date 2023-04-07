class Vechicle{

    name:string;
    constructor(name:string){
        this.name=name;
    }
    getName():string{
        return this.name;
    }
}
class Car extends Vechicle{

    model:string;
    constructor (model:string,name:string){
        super(name); //will call the parents classes construtor
        this.model=model;
    }
    getNameModel():string{
        return this.model+this.name;
    }
}
class Truck extends Vechicle{

constructor(name:string){
  super(name);  
}

}


var mycar=new Car("Sport Model....","BMW");
console.log(mycar.getNameModel);


var truck=new Truck("Tata Truck");
console.log(truck.getName);
