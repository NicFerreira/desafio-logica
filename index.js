let heroName = "Owen Higgins";
let xp = 10001;
const message = "O Herói de nome " + heroName + " está no nível de "
let classNivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

if (xp < 1000) {
    console.log(message + classNivel[0]);
} 
else if (xp >= 1001 && xp <= 2000) {
    console.log(message + classNivel[1]);
} 
else if (xp >= 2001 && xp <= 5000) {
    console.log(message + classNivel[2]);
}
else if (xp >= 5001 && xp <= 7000) {
    console.log(message + classNivel[3]);
}
else if (xp >= 7001 && xp <= 8000) {
    console.log(message + classNivel[4]);
} 
else if (xp >= 8001 && xp <= 9000) {
    console.log(message + classNivel[5]);
} 
else if (xp >= 9001 && xp <= 10000) {
    console.log(message + classNivel[6]);
}
else {
    console.log(message + classNivel[7]);
};
