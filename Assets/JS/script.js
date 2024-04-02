// script.js

// Get the modal element
var modal = document.getElementById("modal");

// Function to display the modal with dish details
function showModal(dishName, description) {
    var modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = "<h2>" + dishName + "</h2><p>" + description + "</p>";
    modal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
    modal.style.display = "none";
}
