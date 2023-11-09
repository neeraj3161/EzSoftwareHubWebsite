

window.onload = function () {
    const text = document.querySelector('.second-txt');
    const wordsArray = ["for users.", "for results.", "for you."];
    var word = "for user";
    var index = 0;
    var arrayPosition = 0;
    var isReverse = false;
    const textLoad = function () {
        if (!isReverse) {

            index++

        } else {
            index--;
        }
        if (arrayPosition > 2) {
            arrayPosition = 0;
        }
        text.innerHTML = wordsArray[arrayPosition].slice(0, index);



        if (index == wordsArray[arrayPosition].length) {
            isReverse = true;
        } else if (index == 1) {
            arrayPosition > 2 ? arrayPosition = 0 : arrayPosition++;
            isReverse = false;
        }

        //index > word.length ? index = 1 : index++;

        //index = index < word.length ? index++ : 1;
        setTimeout(() => textLoad(), 150);


    }

    //manually calling the method for the first time
    textLoad();
    //now calling it every 12 sec
    //setInterval(textLoad, 12000);
}