type Student = {"id":string , "name":string};
let students:Student[]=[{"id":"1","name":"Anna"},{"id":"2","name":"Bernd"}];

function rename(newId:string,newName:string){
    students.forEach(student=> {if(student.id===newId)student.name=newName;

    })
}
function addStudent(newId:string,newName:string){
    students.push({"id":newId,"name":newName})
}
function deleteStudent(id){
    students.splice(1,1,{name:"erna",id:"5"});
}
console.log(students);
rename("1","Charly");
console.log(students);
addStudent("4","Doris");
console.log(students);
deleteStudent(2);
console.log(students);
