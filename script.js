let backButton = document.querySelector("#back");
let nextButton = document.querySelector("#next");
let randomButton = document.querySelector("#random");

let students = [
  {
    profileImage: "https://i.gyazo.com/9288659734a4c7b0ff45294332d153ce.png",
    name: "Nixon Mercado",
    quote: "Quote: When all else fails, just eat a donut",
    superlative: "Superlative: Most likely to be President"
  },
  {
    name: "Nayeli Robles",
    profileImage: "https://i.gyazo.com/7c7fe7f96e0e8ed1cb6b8d7d7803233b.png",
    quote: "Quote: Ily more",
    superlative: "Superlative: Most annoying"
  },
  {
    profileImage: "https://i.gyazo.com/616e92cee0f2d61aeeb06476f2b9f127.png",
    name: "Emmanuel Taveras",
    quote: "Quote: Mami told me to stay home",
    superlative: "Superlative: Favorite Dominican"
  },
  {
    profileImage: "https://i.gyazo.com/ddd821447214d9fe6e2194a36e162886.png",
    name: "Ericka Lee Sanchez",
    quote: "Quote: You're mad annoying",
    superlative: "Superlative: Best softball player"
  },
  {
    profileImage: "https://i.gyazo.com/289d82187a332e4fd545c86aad1714cd.png",
    name: "Demian Aviles",
    quote: "Quote: IDK if I should be flattered or hurt",
    superlative: "Most annoying"
  },
  {
    profileImage: "https://i.gyazo.com/2d30c73f33212a471c05556a96dc6176.png",
    name: "Andrew Rivera",
    quote: "Quote: Can't I work today",
    superlative: "Biggest player"
  },
  {
    profileImage: "https://i.gyazo.com/068d816194b620b4888a9ddbeabbc289.png",
    name: "Elidenya Peña",
    quote: "Quote: I saved you a seat",
    superlative: "Most energetic"
  },
  {
    profileImage: "https://i.gyazo.com/647a6d2b98703a530a4f3824c8ecec5e.png",
    name: "Naylene Martinez",
    quote: "Quote: OMG stawwwpppp",
    superlative: "Superlative: Least talkative"
  }
];

let count = 0;
document.querySelector("#pic").src = students[count].profileImage;
document.querySelector("#name").innerHTML = students[count].name;
document.querySelector("#quote").innerHTML = students[count].quote;
document.querySelector("#superlative").innerHTML = students[count].superlative;

nextButton.addEventListener("click", () => {
  console.log("next");
  count++;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML = students[count].superlative;
  if(count == 7){
  count = 0
}
});

backButton.addEventListener("click", () => {
  console.log("back");
  count--;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML = students[count].superlative;
  if(count == 0){
  count = 7
}
});

function myFunction(){
  var x = Math.floor(Math.random()*256);
  var y = Math.floor(Math.random()*256);
  var z = Math.floor(Math.random()*256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  document.body.style.background= bgColor
}

