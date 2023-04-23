let arrAdministration = [];
let arrMarketing = [];
let arrDevelopment = [];
let arrFinance = [];
let TotalSalary = [];
let Employees = [];

//get data from local storage
function getDataFromHome(){
    
    let StringData= window.localStorage.getItem('Employees');
    let Data = JSON.parse(StringData)
    for(let i= 0 ;i < Data.length;i++){
        if(Data[i].Department == 'Administration'){
             arrAdministration.push(Data[i])
        }else if(Data[i].Department == 'Marketing'){
            arrMarketing.push(Data[i])
        }else if(Data[i].Department == 'Development'){
            arrDevelopment.push(Data[i])
        }else if(Data[i].Department == 'Finance'){
            arrFinance.push(Data[i])
        }
        // to push employees to array to calculate their number
        Employees.push(Data[i].Name)
        // push all salaries to the TotalSalary array
        TotalSalary.push(Data[i].Salary)
        
    }
    sum(arrAdministration)
    sum(arrMarketing)
    sum(arrDevelopment)
    sum(arrFinance)
}


// to sum each department salary
function sum(arr){
    let sum =0;
    for(let i =0;i < arr.length;i++ ){
        sum += arr[i].Salary
    }
    // console.log(sum)
    return sum ;
}

 getDataFromHome();

// to sum all department salaries
total = 0;
for(let i =0 ; i < TotalSalary.length;i++){
total += TotalSalary[i]
}

 
// render the table 
let row = document.querySelectorAll("#Administration td")

row[1].textContent = arrAdministration.length;
row[2].textContent= sum(arrAdministration);
if(arrAdministration.length !== 0){
    row[3].textContent = sum(arrAdministration)/arrAdministration.length
}else{
    row[3].textContent = 0;
}


let dev  =document.querySelectorAll('#Development td')
dev[1].textContent = arrDevelopment.length;
dev[2].textContent= sum(arrDevelopment);
if(arrDevelopment.length !==0){
    dev[3].textContent = sum(arrDevelopment)/ arrDevelopment.length

}else{
    dev[3].textContent = 0;
}

let mar  =document.querySelectorAll('#Marketing td')
mar[1].textContent = arrMarketing.length;
mar[2].textContent= sum(arrMarketing);
if(arrMarketing.length !==0){
    mar[3].textContent = sum(arrMarketing)/ arrMarketing.length
}else{
    mar[3].textContent = 0;
}


let fin = document.querySelectorAll('#Finance td')
fin[1].textContent = arrFinance.length;
fin[2].textContent= sum(arrFinance);
if(arrFinance.length !==0){
    fin[3].textContent = sum(arrFinance)/ arrFinance.length
}else{
    fin[3].textContent = 0;
}


let totalS = document.querySelectorAll('#totalSalary td')
totalS[1].textContent = Employees.length
totalS[2].textContent = total;
totalS[3].textContent = total / Employees.length





// function render(arr){
//     for(let i = 0 ; i < arr.length;i++){
//         let table = 
//         row[i+1].textContent = arr.length;
//        row[i+2].textContent= sum(arr);
//        row[i+3].textContent = sum(arr)/ arr.length
//        return table;
//     }

// }