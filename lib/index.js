// code used to download cv
// const downloadBtn = document.getElementById('downloadCV');
// downloadBtn.addEventListener('click', function () {
//   const link = document.createElement('a');
//   link.href = 'cv/Mihai-Dorin-Sacalianu-CV.pdf';
//   link.download = "MihaiSacalianu.pdf"
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// })

// code for mobile slide show

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

const arrowsArray = [arrowLeft, arrowRight];

arrowsArray.forEach((arrow)=>{
  arrow.addEventListener('click', ()=>{
    if(arrow.id === arrowLeft.id){
      console.log('You pressed arrow left');
    }
    if(arrow.id === arrowRight.id){
      console.log('You pressed arrow right');
    }
  })
});
console.log(arrowsArray);
