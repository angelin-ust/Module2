class Employee{


  
  private readonly  empno:number;
  private  ename:string;
   private sal:number;
    private attendance:any;
    
    public getEmpno():number{
        return this.empno;   //=420; not possible
    }
    public getEname():string{
        return this.ename;
    }

    public getSal():number{
        return this.sal;
    }
    public getAttendance():number{
        return this.attendance;
    }
    

    // constructor(){
    //     this.empno=101;
    //     this.ename="abc";
    //     this.sal=20000;
    //     this.attendance=18;
    // }we cant overload the constructor

constructor(empno:number,ename:string,sal:number,attendance:any){
    this.empno=empno;
    this.ename=ename;
    this.sal=sal;
    this.attendance=attendance;
}


    print():void{
        console.log(this.empno,this.ename,this.sal,this.attendance);
    }


}

// var emp=new Employee();
// var emp1=new Employee();
// emp1.empno=102;
// var emp2=new Employee();
// emp1.empno=103;
// emp.print();
// emp1.print();
// emp2.print();
var emp3=new Employee(109,"sss",1090,19);
var emp4=new Employee(129,"sssqqs",190,109);
var emp5=new Employee(119,"sssaa",2090,1909);


emp3.print();
emp4.print();
emp5.print();

class Emp1{

    private fname:string;
    private lname:string
    private mname!:string;

constructor(fname:string,lname:string,mname:string){
    this.fname=fname;
    this.lname=lname;
    this.mname=mname;
}



    getMname():string{
        return this.mname;
    }
}
let e1=new Emp1('a','b','c');
console.log(e1.getMname());



