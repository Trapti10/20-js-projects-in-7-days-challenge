const leftClick = document.getElementById('left')
const rightClick = document.getElementById('right')
const surpriseBtn = document.getElementById('btn1')


const profiles = [
  {
    name: "Alice Johnson",
    profession: "Software Engineer",
    review: "Excellent problem-solving skills and a great team player!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsLWj_HyAAc64tMYwlaPpEyfVNIm1W-LK0Q&s"
  },
  {
    name: "Diana Prince",
    profession: "Data Scientist",
    review: "Insightful analysis and strong statistical knowledge.",
    img: "https://www.shutterstock.com/image-photo/happy-man-portrait-server-room-260nw-2670245781.jpg"
  },
  {
    name: "Bob Smith",
    profession: "Graphic Designer",
    review: "Creative and always delivers stunning visuals on time.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-IsC-D-GozLWse_5D9_xo8SMGjALdvJSgoA&s"
  },
  {
    name: "Charlie Brown",
    profession: "Project Manager",
    review: "Highly organized and ensures every project stays on track.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_66QpEF5qMONPRGrI0q8W8Ra_XIhvkWmMA&s"
  },
  {
    name: "Ethan Hunt",
    profession: "UX Designer",
    review: "Focuses on user-centric design with fantastic results.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpb3vG11kc3NEm-WuMR1YXf5MDEKItsJunbbOP-BU27Kp-pKgvoKD-nh0F-CxcoQw-F3k&usqp=CAU"
  }
];

let index = 0;
showProfile(index);
updateBtnState();

// changes profiles on left click
leftClick.addEventListener("click", ()=>{
  if(index>0){
    index--;
    showProfile(index);
    updateBtnState()
  }
})

// changes profiles on right click
rightClick.addEventListener("click", ()=>{
 if(index >= 0){
  index++;
  showProfile(index);
  updateBtnState();
 }
})

// disabled the left btn when index is 0 and the right btn when index is equal to the arr length
function updateBtnState(){
 leftClick.disabled = index === 0;
 rightClick.disabled = index === profiles.length-1;
}


// Shows profile based on index
function showProfile(i) {
  const Profile = profiles[i];

  document.getElementById('name').textContent = Profile.name;
  document.getElementById('profession').textContent = Profile.profession;
  document.getElementById('review').textContent = Profile.review;
  document.getElementById('img').src = Profile.img;
}

// shows random profile when clicking on surprise btn
surpriseBtn.addEventListener("click", ()=>{
  const ranodomIndex = Math.floor(Math.random() * profiles.length);
  showProfile(ranodomIndex);
  updateBtnState();
})

