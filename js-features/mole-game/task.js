let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

let deadCount = 0;
let lostCount = 0;


const holeArray = Array.from(document.querySelectorAll(".hole"))

holeArray.forEach((item, i) => {
    holeArray[i].onclick = () => {
        if (holeArray[i].classList.contains('hole_has-mole')) {

            deadCount++;
            dead.textContent = deadCount;

        } else {
            lostCount++;
            lost.textContent = lostCount;
        }

    }

});
