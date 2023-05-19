const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  // Grab the "root" element
  const root = document.getElementById("root");
  // Add an h1 element with the text "FREELANCERS"
  const h1 = document.createElement("h1");
  h1.innerHTML = "FREELANCERS";
  root.appendChild(h1);
  // Create an unordered list element
  const ul = document.createElement("ul");
  // Loop through the users array, create li elements and append them to the ul element
  ul.setAttribute("users", "list-items");
  for (let i = 0; i <= users.length - 1; i++) {
    const li = document.createElement("li");
    li.innerHTML = `${users[i].name} is ${users[i].age} years old. `;
    li.className = "person";
    ul.appendChild(li);
  }
  // Append the ul element to the root element
  root.appendChild(ul);
}

//call the main function
main();
