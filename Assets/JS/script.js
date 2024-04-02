var modal = document.getElementById("modal");


function showModal(dishName, description) {
    var modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = "<h2>" + dishName + "</h2><p>" + description + "</p>";
    modal.style.display = "block";
}


function hideModal() {
    modal.style.display = "none";
}
