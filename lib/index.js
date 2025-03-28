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

const cards = [{
  name: "Smoke 'n Go 🍖",
  image: "./images/smoke.png",
  skills: ["Ruby on Rails",
  "PostgreSql",
  "Javascript",
  "Heroku",
  "Html",
  "Css",
  "Scss",
  "Figma"]
}, {
  name: "Hexplore 🗺️",
  image: "./images/hexplore.png",
  skills: ["Ruby on Rails",
  "PostgreSql",
  "Javascript",
  "Heroku",
  "Html",
  "Css",
  "Scss",
  "Figma"]
},
{
  name: "Watch List 🎥",
  image: "./images/watchList.png",
  skills: ["Ruby on Rails",
  "PostgreSql",
  "Javascript",
  "Html",
  "Css",
  "Scss",
  "Figma",
  "Kit"
]
}
]

const cardDiv = document.getElementById('arrow-left');
const defaultCard = document.createElement("a");
defaultCard.innerHTML = `
    <div class="project-card">
      <img src="${cards[0].image}" alt="card-image">
      <div class="card-text">
        <h4>${cards[0].name}</h4>
        <ul class="skills-list flex flex-wrap">
          <li>${cards[0].skills[0]}</li>
          <li>${cards[0].skills[1]}</li>
          <li>${cards[0].skills[2]}</li>
          <li>${cards[0].skills[3]}</li>
          <li>${cards[0].skills[4]}</li>
          <li>${cards[0].skills[5]}</li>
          <li>${cards[0].skills[6]}</li>
          <li>${cards[0].skills[7]}</li>
        </ul>
      </div>
    </div>
`;
cardDiv.insertAdjacentElement('afterend',defaultCard);


let index = 0;
arrowsArray.forEach((arrow)=>{
  arrow.addEventListener('click', ()=>{
    if(arrow.id === arrowLeft.id){
      index--;
      if(index < 0){
        index = 0;
      }
      defaultCard.innerHTML = renderCard(cards,index);
    }
    if(arrow.id === arrowRight.id){
      index++;
      if(index === cards.length){
        index = cards.length-1;
      }
      defaultCard.innerHTML = renderCard(cards,index);
    }
  })
});

function renderCard(cards,index){
  return `
    <div class="project-card">
      <img src="${cards[index].image}" alt="card-image">
      <div class="card-text">
        <h4>${cards[index].name}</h4>
        <ul class="skills-list flex flex-wrap">
          <li>${cards[index].skills[0]}</li>
          <li>${cards[index].skills[1]}</li>
          <li>${cards[index].skills[2]}</li>
          <li>${cards[index].skills[3]}</li>
          <li>${cards[index].skills[4]}</li>
          <li>${cards[index].skills[5]}</li>
          <li>${cards[index].skills[6]}</li>
          <li>${cards[index].skills[7]}</li>
        </ul>
      </div>
    </div>
`;
}
