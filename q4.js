const student={
    name: "khadija",
    rollnumber: "26K-0037",
    marks: [80,75,90]
};
console.log(student.name);
console.log(student["rollnumber"]);
let key="rollnumber";
console.log(student[key]);
student.marks[1]=85;
student.grade="A";
console.log(student);
try{
    student={ name:"ali"};
}
    catch(error){
        
        console.log("error:",error.message);
}

