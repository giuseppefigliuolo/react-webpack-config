/* const studentFilter = (array) => {
  const students = array.filter(({ role }) => role === "student");
  return students.map(({ name }) => name);
}; */

const studentFilter = (array) =>
  array.filter(({ role }) => role === "student").map(({ name }) => name);

const mohole = [
  {
    name: "lavinia",
    role: "student",
  },
  {
    name: "alessandro",
    role: "student",
  },
  {
    name: "salvatore",
    role: "teacher",
  },
  {
    name: "denise",
    role: "student",
  },
  {
    name: "camillo",
    role: "admin",
  },
  {
    name: "andrea",
    role: "student",
  },
];

console.log(studentFilter(mohole));
