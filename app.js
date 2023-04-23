'use strict';

    function Employee(Name, Department, Level, Image,id,Salary) {
        this.id = id ? id : this.id();
        this.Name = Name;
        this.Department = Department;
        this.Level = Level;
        this.Image = Image
        this.Salary = Salary ? Salary  : this.Salary();
        this.SalaryAfterTax = this.Salary * 0.925 ;
        Employee.allEmployees.push(this);
    }

    Employee.allEmployees = [];

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


// render
Employee.prototype.render = function() {

    const card = document.getElementById('card');

    card.innerHTML = '';

    for(let i =0; i < Employee.allEmployees.length ; i++){
    
        let obj = Employee.allEmployees[i];
    
        const divEl = document.createElement('div');
        
        divEl.classList.add('card-content')
        
        card.appendChild(divEl);
        
        const img = document.createElement('img')
        
        img.src = obj.Image;
        
        divEl.appendChild(img)
        
        const h4El = document.createElement('h4')
        
        h4El.textContent = `Name: ${obj.Name} -ID: ${obj.id}` 
        
        divEl.appendChild(h4El);
        
        const h4Ele = document.createElement('h4')
        
        h4Ele.textContent = `Department:${obj.Department} Level:${obj.Level}` 
        
        divEl.appendChild(h4Ele);
        
        const h4E = document.createElement('h4')
        
        h4E.textContent =  obj.id
        
        divEl.appendChild(h4E);
        
        }
    
    }

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

    storeData();
    
    }   

    // store data in local storage 
    function storeData(){
        let Data = JSON.stringify(Employee.allEmployees)
       localStorage.setItem('Employees',Data)
    }

    //get data from local storage 
    function getData(){

        let getD = localStorage.getItem('Employees')

        let stringArr = JSON.parse(getD);

        if(stringArr !== null){

            for( let i =0 ; i < stringArr.length; i++){

                new Employee(stringArr[i].Name,stringArr[i].Department,stringArr[i].Level,stringArr[i].Image,stringArr[i].id)

                Employee.allEmployees[i].render();
            }
            
        }

    }
    getData();








