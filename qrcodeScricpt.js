function generateQR() {
  const qrContainer = document.getElementById("qrcode");
  const text = document.getElementById("qrText").value.trim();

  // Clear previous QR
  qrContainer.innerHTML = "";

  if (!text) {
    alert("Please enter some text.");
    return;
  }

  // Create QR code
  const qrCode = new QRCode(qrContainer, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "black",
    colorLight: "white",
    colorLight: "#ffffff"
  });

  // Add logo to the center of QR Code
  const canvas = qrContainer.querySelector('canvas');
  const logo = new Image();
  logo.src = 'your-logo.png';  // Replace with your logo path
  logo.onload = function () {
    const ctx = canvas.getContext('2d');
    const logoSize = 50;  // Logo size, adjust as needed

    // Calculate position for logo to be centered
    const x = (canvas.width - logoSize) / 2;
    const y = (canvas.height - logoSize) / 2;

    // Draw the logo on the QR code
    ctx.drawImage(logo, x, y, logoSize, logoSize);

    // Show download button
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.style.display = 'block';
    downloadLink.href = canvas.toDataURL();  // Get the QR code as an image
  };
}
