function uploadImage() {
  document.getElementById("poster").click();
}

function checkFile() {
  var fileInput = document.getElementById("poster");
  var file = fileInput.files[0];

  if (file) {
    var fileType = file.type;
    var fileSize = file.size;

    if (fileType !== "image/jpeg" && fileType !== "image/png") {
      alert("이미지 파일은 jpg 또는 png 형식이어야 합니다.");
      fileInput.value = "";
    } else if (fileSize > 5000000) {
      // 5MB
      alert("이미지 파일의 크기는 5MB 이하여야 합니다.");
      fileInput.value = "";
    } else {
      var imgPreview = document.getElementById("imagePreview");
      var defaultIcon = document.getElementById("defaultIcon");
      imgPreview.src = URL.createObjectURL(file);
      defaultIcon.style = "display: none";
      imgPreview.style = "display:block";
    }
  }
}

function formatPrice() {
  var priceInput = document.getElementById("productPrice");
  var price = priceInput.value.replace(/,/g, "");
  if (!isNaN(price)) {
    priceInput.value = parseFloat(price).toLocaleString();
  }
}

function validateForm() {
  var host = document.getElementById("host").value;
  var title = document.getElementById("title").value;
  var poster = document.getElementById("poster").value;
  var productPrice = document.getElementById("productPrice").value;
  var explain = document.getElementById("explain").value;
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;

  if (
    !host ||
    !title ||
    !poster ||
    !productPrice ||
    !explain ||
    !startDate ||
    !endDate
  ) {
    alert("모든 정보를 입력해주세요.");
    return false;
  }

  return true;
}
