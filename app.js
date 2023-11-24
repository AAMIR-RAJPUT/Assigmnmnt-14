// function submitForm() {
//     // Get form data
//     var firstName = document.getElementById("firstName").value;
//     var lastName = document.getElementById("lastName").value;
//     var email = document.getElementById("email").value;

//     // Display form data on the page
//     var displayDiv = document.getElementById("displayData");
//     displayDiv.innerHTML = "<h2>Form Data:</h2>" +
//                            "<p><strong>First Name:</strong> " + firstName + "</p>" +
//                            "<p><strong>Last Name:</strong> " + lastName + "</p>" +
//                            "<p><strong>Email:</strong> " + email + "</p>";
// }
// function toggleDetails() {
//     var detailsDiv = document.getElementById("fullDetails");
//     var buttonText = document.querySelector(".item button");

//     if (detailsDiv.style.display === "none") {
//         detailsDiv.style.display = "block";
//         buttonText.innerText = "Read less";
//     } else {
//         detailsDiv.style.display = "none";
//         buttonText.innerText = "Read more";
//     }
// }
function addStudent() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var grade = document.getElementById("grade").value;

    var table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = grade;
    cell4.innerHTML = '<button onclick="editStudent(this)">Edit</button> ' +
                      '<button onclick="deleteStudent(this)">Delete</button>';

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grade").value = "";
}

function editStudent(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');

    document.getElementById("editName").value = cells[0].innerHTML;
    document.getElementById("editAge").value = cells[1].innerHTML;
    document.getElementById("editGrade").value = cells[2].innerHTML;

    document.getElementById("editForm").style.display = "block";
    row.style.display = "none";
}

function deleteStudent(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function updateStudent() {
    var name = document.getElementById("editName").value;
    var age = document.getElementById("editAge").value;
    var grade = document.getElementById("editGrade").value;

    var table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = grade;
    cell4.innerHTML = '<button onclick="editStudent(this)">Edit</button> ' +
                      '<button onclick="deleteStudent(this)">Delete</button>';

    // Clear the edit form fields
    document.getElementById("editName").value = "";
    document.getElementById("editAge").value = "";
    document.getElementById("editGrade").value = "";

    // Hide the edit form
    document.getElementById("editForm").style.display = "none";
}

function cancelEdit() {
    // Clear the edit form fields
    document.getElementById("editName").value = "";
    document.getElementById("editAge").value = "";
    document.getElementById("editGrade").value = "";

    // Hide the edit form
    document.getElementById("editForm").style.display = "none";
}