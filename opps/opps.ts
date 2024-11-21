class Students{
    constructor(public name:string,public id:number) {}
    getStudNorm(){
        console.log(this.name);
    };
    getStudArow(){
        console.log(this.name);
    };
};
let student:Students = new Students("Tom",1);
student.getStudNorm();
student.getStudArow();
console.log(window);