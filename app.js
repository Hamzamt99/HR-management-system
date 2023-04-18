'use strict';

let Employees=[];

    function Employee(Name, Department, Level, Image,id) {
        this.id = id ? id : this.id();
        this.Name = Name;
        this.Department = Department;
        this.Level = Level;
        this.Image = Image
        // this.Salary = this.Salary();
        // this.SalaryAfterTax = this.netSalary();
        Employees.push(this);
    }

Employee.prototype.id = function(){

    let number =  Math.floor(Math.random() * Date.now())

    number = number.toString().substring(0, 4);

    number =  parseInt(number);

    return number;

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
// new objects
const ghaziSamer = new Employee( "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg",1000);

const lanaAli = new Employee( "Lana Ali", "Finance", "Senior", "assets/Lana.jpg",1001);

const tamaraAyoub = new Employee( "Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg",1002);

const safiwalid = new Employee( "Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg",1003);

const omarZaid = new Employee( "Omar Zaid", "Development", "Senior", "assets/Omar.jpg",1004);

const ranaSaleh = new Employee("Rana Saleh", "Development", "Junior", "assets/Rana.jpg",1005);

const hadiAhmad = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg",1006);


//store data 

const cardForm = document.getElementById('cardForm')
    
cardForm.addEventListener('submit',card)

function card(e){

    e.preventDefault()

    const Name = e.target.fname.value;

    const Department = e.target.Department.value;

    const Level = e.target.Level.value;

    const Image = e.target.Image.value;

    const NewEmployee = new Employee(Name,Department,Level,Image)
    

    NewEmployee.render();

    }   


// render
Employee.prototype.render = function() {

const card = document.getElementById('card');

const divEl = document.createElement('div');

divEl.classList.add('card-content')

card.appendChild(divEl);

const img = document.createElement('img')

img.src = this.Image;

divEl.appendChild(img)

const h4El = document.createElement('h4')

h4El.textContent = `Name: ${this.Name} -ID: ${this.id}` 

divEl.appendChild(h4El);

const h4Ele = document.createElement('h4')

h4Ele.textContent = `Department:${this.Department} Level:${this.Level}` 

divEl.appendChild(h4Ele);

const h4E = document.createElement('h4')

h4E.textContent =  this.id

divEl.appendChild(h4E);

}



//function for array
function Array(arr){
    for(let i =0 ;i < arr.length;i++){
        arr[i].render();
    }
    return arr;
}

Array(Employees);

console.log(Employees)



