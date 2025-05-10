function generateQR() {
    const qrContainer = document.getElementById("qrcode");
    const text = document.getElementById("text").value;
  
    // Clear previous QR
    qrContainer.innerHTML = "";
  
    if (!text.trim()) {
      alert("Please enter some text.");
      return;
    }
  
    new QRCode(qrContainer, {
      text: text,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff"
    });
  }
  