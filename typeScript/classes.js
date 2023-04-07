var Employee = /** @class */ (function () {
    // constructor(){
    //     this.empno=101;
    //     this.ename="abc";
    //     this.sal=20000;
    //     this.attendance=18;
    // }we cant overload the constructor
    function Employee(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
    };
    return Employee;
}());
// var emp=new Employee();
var emp1=new Employee();
emp1.empno=102;
var emp2=new Employee();
emp1.empno=103;
emp.print();
emp1.print();
emp2.print();


// var emparray :Employee[]=[emp,emp1,emp2];
// emparray.forEach((element) => {
//     console.log(element);});
// var emp3 = new Employee(109, "sss", 1090, 19);
// var emp4 = new Employee(129, "sssqqs", 190, 109);
// var emp5 = new Employee(119, "sssaa", 2090, 1909);
// emp3.print();
// emp4.print();
// emp5.print();




