 
// let ratio = 7;
// let human_years = 23;
// let dog_years = human_years*ratio;
// let count = 0;
// count= count +1;
//console.log(count);
//document.getElementById("count-el").innerText = count;
// let bonusPoints = 50;
// bonusPoints = bonusPoints - 25;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 75;
// console.log(bonusPoints);

// function increment() {
//     console.log("The button was clicked !");
//     console.log("The button was clicked again !")
// }



// increment()
// increment()
// let lapscompleted = 0;

// function lapincrement() {
//     lapscompleted = lapscompleted +3
// }
 
// lapincrement()
// lapincrement()
// lapincrement()

// console.log(lapscompleted)

let count = 0;
let count_el = document.getElementById("count-el");

function increment() {
    console.log("Adding 1")
    count = count+1;
    count_el.innerText = count;
    console.log(count);
}
function decrement() {
    console.log("Subtracting 1")
    count = count-1;
    count_el.innerText = count;
    console.log(count);
}


