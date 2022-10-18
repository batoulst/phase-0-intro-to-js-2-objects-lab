// Write your solution in this file!
const employee={
    name: 'batoul',
    streetAddress: 'Mazza',
};
function updateEmployeeWithKeyAndValue(emp,key,val){
return {...emp,[key]:val};
}
function destructivelyUpdateEmployeeWithKeyAndValue(emp,key,val){
    emp[key]=val;
    return emp;
}
function deleteFromEmployeeByKey(emp,key){
    const nobj={...emp};
    delete nobj[key];
    return nobj;
}
function destructivelyDeleteFromEmployeeByKey(emp,key){
    delete emp[key];
    return emp;
}

x=deleteFromEmployeeByKey(employee,'name')
console.log (x,employee)