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
            if (deadCount == 10) {

                deadCount = 0;
                lostCount = 0;
                dead.textContent = deadCount;
                lost.textContent = lostCount;

                alert('Вы победили!');
            }

        } else {
            lostCount++;
            lost.textContent = lostCount;
            if (lostCount == 5) {

                deadCount = 0;
                lostCount = 0;
                dead.textContent = deadCount;
                lost.textContent = lostCount;

                alert('Вы проиграли!');
            }
        }
    }
});
