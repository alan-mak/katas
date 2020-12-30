const organizeInstructors = function(instructors) {
  // Put your solution here
  let organized = {};
  for (let instructor of instructors) {
    if (!(instructor.course in organized)) {
      organized[instructor.course] = [instructor.name];
    } else {
      organized[instructor.course].splice(-1, 0, instructor.name);
    }
  }
  return organized;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));