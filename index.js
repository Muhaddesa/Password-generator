const generateBtn = document.getElementById("generateBtn");
const showPara = document.getElementById("content");

const exp = document.getElementById("expression");

generateBtn.addEventListener("click", () => {
  
  let pass = "";
  let passOne = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";
  for (let i = 1; i <= 8; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  showPara.innerHTML = pass;
  for (let index = 1; index <= 8; index++) {
    let char = Math.floor(Math.random() * str.length + 1);
    passOne += str.charAt(char);
  }
  exp.innerHTML = passOne;
});
