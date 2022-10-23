const nama = "rizal efendi";
let umur = 27;

let biodata = document.getElementById('biodata');

function generateBiodata() {
  let golongan;

  if (umur >= 10 && umur < 18) {
    golongan = "golongan ababil";
  } 
  else if (umur >= 18 && umur < 30) {
    golongan = "golongan sudah matang";
  } 
  else if (umur >= 30) {
   golongan = "golongan terlalu matang";
  } 
  else if (umur < 10 && umur > 2) {
    golongan = "golongan masih bocil";
  } 
  else {
    golongan = "golongan seonggok bayi";
  }
  return biodata.innerHTML = golongan;
}

console.log(nama);
console.log(umur);

generateBiodata();
