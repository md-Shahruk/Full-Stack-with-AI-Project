// Student Grade Analyzer
const students = [
  { name: "Rahim", marks: 90 },
  { name: "Karim", marks: 70 },
  { name: "Salam", marks: 40 },
  {name: "Shahruk", marks: 85}
];

// Print all name
console.log("All Students name:");

students.forEach((item,index)=>{
   console.log(item.name); 
});

// Find students scoring above 80
const above80 = students.filter(n =>n.marks >= 80);
console.log("Students scoring above 80:");
above80.forEach(student =>{
    console.log(`${student.name}:${student.marks}`);
    
})

// Calculate average mark

const totalMarks = students.reduce((acc, curr) => acc + curr.marks, 0);
const avgMarks = totalMarks / students.length;
console.log(` Average Marks: ${avgMarks.toFixed(2)}`);

// find the topper
const sortValue = [...students].sort((a,b) => b.marks - a.marks);

console.log(`Topper: ${sortValue[0].name} - ${sortValue[0].marks}`);


// sort highest to lowest

const sortedStudents = [...students].sort((a, b) => b.marks - a.marks);
console.log("Students sorted Highest to Lowest:");
sortedStudents.forEach((student, index) => {
  console.log(` ${student.name}: ${student.marks}`);
});

//every one passed
const passed = students.every(p => p.marks >= 40);
console.log(`All students passed: ${passed ? "Yes" : "No "}`);





