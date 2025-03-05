function uploadImage() {
    const input = document.getElementById("imageUpload");
    const file = input.files[0];
  
    if (file) {
      const reader = new FileReader();
      
      reader.onload = function(event) {
        const imgElement = document.createElement("img");
        imgElement.src = event.target.result;
        imgElement.alt = "Ảnh troll";
        imgElement.style.maxWidth = "100%";
        imgElement.style.height = "auto";
  
        const preview = document.getElementById("imagePreview");
        preview.innerHTML = ""; // Xóa nội dung cũ
        preview.appendChild(imgElement); // Thêm ảnh vào vùng xem trước
      };
  
      reader.readAsDataURL(file);
    } else {
      alert("Vui lòng chọn một ảnh để tải lên!");
    }
  }
  