//-----> Given an array of employee objects.
/*
    * input: [
         { name: "A", salary: 20000 },
         { name: "B", salary: 30000 }
    ]
    * output: Return total salary.
*/
// let employees = [
//     { name: "A", salary: 20000 },
//     { name: "B", salary: 30000 }
// ];

// let totalSalary = employees[0].salary + employees[1].salary;
// console.log(totalSalary);



//-----> Find employee with highest salary.
/*
    * input: take 3 array like objects.
    * output: Return that employee with highest salary.
 */
// let employees = [
//     {salary: 12000}, {salary: 13000}, {salary: 14000}, {salary: 18000}
// ]

// if(employees[0].salary > employees[1].salary && employees[0].salary > employees[2].salary){
//     console.log({'the highest paid employee is': employees[0].salary});
// }else if(employees[1].salary > employees[0].salary && employees[1].salary > employees[2].salary){
//     console.log({'the highest paid employee is': employees[1].salary});
// }else{
//     console.log({'the highest paid employee is': employees[2].salary});
// }

// or
// let currentHighestSalary = employees[0].salary;
// for(let i = 0; i < employees.length; i++){
//     if(employees[i].salary > currentHighestSalary){
//         currentHighestSalary = employees[i].salary;
//     }
// }
// console.log({'the highest paid employee is': currentHighestSalary});



//-----> Increase each employee salary by 10%.
/*
    * input: take 5 array like objects.
    * output: Return updated array.
*/
// let employees = [
//     {salary: 12000}, {salary: 13000}, {salary: 14000}, {salary: 18000}, {salary: 19000}
// ];
// let updatedArray = [];

// for(let i = 0; i < employees.length; i++){
//     updatedArray.push(employees[i].salary + (employees[i].salary * 0.1));
// };
// console.log(updatedArray);









