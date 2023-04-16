'use strict';

let Employees=[];

    function Employee(id, Name, Department, Level, Image) {
        this.id = id;
        this.Name = Name;
        this.Department = Department;
        this.Level = Level;
        this.Image = Image;
        this.Salary = this.Salary();
        this.SalaryAfterTax = this.netSalary();
        Employees.push(this);
    }
 

Employee.prototype.Salary = function(){

   if (this.Level === 'Senior'){

    return  Math.floor(Math.random() * (2000 - 1500)) + 1500;

   }else if (this.Level === 'Mid-Senior'){

    return Math.floor(Math.random() * (1500 - 1000)) + 1000;

   }else if(this.Level === 'Junior'){

    return Math.floor(Math.random() * (1000 - 500)) + 500;
   }
}
Employee.prototype.netSalary = function() {

    return this.Salary - (this.Salary * 0.075);
}

Employee.prototype.render = function() {

   return document.write(`
    <main>
    <h3>Name:${this.Name}</h3>
    <p>Salary:${this.SalaryAfterTax}</h3>
    </main>
`);
}

  const ghaziSamer = new Employee(1000, "Ghazi Samer", "Administration", "Senior");

  const lanaAli = new Employee(1001, "Lana Ali", "Finance", "Senior");
  
  const tamaraAyoub = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
  
  const safiwalid = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
  
  const omarZaid = new Employee(1004, "Omar Zaid", "Development", "Senior");
  
  const ranaSaleh = new Employee(1005, "Rana Saleh", "Development", "Junior");
  
  const hadiAhmad = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
  

  array(Employees)

function array(arr){
    for(let i = 0;i<arr.length;i++){
        arr[i].render()
    }
}

// another way to solve it (using class)







// 'use strict';

// let Employees=[];
// class Employee {
//     constructor(id, Name, Department, Level, Image) {
//         this.id = id;
//         this.Name = Name;
//         this.Department = Department;
//         this.Level = Level;
//         this.Image = Image;
//         this.Salary = this.Salary();
//         this.SalaryAfterTax = this.netSalary();
//         Employees.push(this);
//     }
//     netSalary() {

//         return this.Salary - (this.Salary * 0.075);
//     }
//     render() {
//         return document.write(`
//         <main>
//         <h3>Name:${this.Name}</h3>
//         <p>Salary:${this.SalaryAfterTax}</h3>
//         </main>
//     `);

//     }
// }

// Employee.prototype.Salary = function(){
//    if (this.Level === 'Senior'){

//     return  Math.floor(Math.random() * (2000 - 1500)) + 1500;

//    }else if (this.Level === 'Mid-Senior'){
//     return Math.floor(Math.random() * (1500 - 1000)) + 1000;

//    }else if(this.Level === 'Junior'){
//     return Math.floor(Math.random() * (1000 - 500)) + 500;
//    }
// }

//   const ghaziSamer = new Employee(1000, "Ghazi Samer", "Administration", "Senior");

//   const lanaAli = new Employee(1001, "Lana Ali", "Finance", "Senior");
  
//   const tamaraAyoub = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
  
//   const safiwalid = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
  
//   const omarZaid = new Employee(1004, "Omar Zaid", "Development", "Senior");
  
//   const ranaSaleh = new Employee(1005, "Rana Saleh", "Development", "Junior");
  
//   const hadiAhmad = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
  

//   array(Employees)

// function array(arr){
//     for(let i = 0;i<arr.length;i++){
//         arr[i].render()
//     }
// }
