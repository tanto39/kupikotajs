// gallery
function openModal(imageSrc) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

/* закрытие по ESC */
document.body.addEventListener('keyup', function (e) {
  let key = e.key;

  if (key == "Escape") {
    closeModal();
  };
}, false);
