const downloadBtn = document.getElementById('downloadCV');
downloadBtn.addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'cv/Mihai-Dorin-Sacalianu-CV.pdf';
  link.download = "MihaiSacalianu.pdf"
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
})
