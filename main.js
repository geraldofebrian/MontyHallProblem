var carIsIn, doorWithGoat, doorWithAnotherGoat, current_choice, count, gamesWon = 0;
var image_click = "door-clicked.png",
    image_win = "door-opened-luck.png",
    image_lose = "door-opened-zonk.png",
    image_reset = "door.jpg";

function clicked(n) {
    //CHANGE VALUE OF #choose
    document.getElementById('choose').innerHTML = n;

    // tebakan pertama
    if(count == 0 && current_choice == 0) {
        document.querySelector('.img'+n).setAttribute('src', image_click);
        current_choice = n;
        count += 1;
        if(n == carIsIn) {
            document.querySelector('.img'+doorWithGoat).setAttribute('src', image_lose);
        }else {
            if(n == doorWithGoat)
                document.querySelector('.img'+doorWithAnotherGoat).setAttribute('src', image_lose);
            else if(n == doorWithAnotherGoat)
                document.querySelector('.img'+doorWithGoat).setAttribute('src', image_lose);
        }
    }
    //tebakan kedua
    else if(count == 1 && current_choice != 0){
        //ngga switch door
        if(n == current_choice) {
            //tebakan salah
            if(n != carIsIn) {
                change();
                alert("you lose. Click any door to play again.");
                current_choice = 0;
            }
            //tebakan bener
            else {
                change();
                current_choice = 0;
                gamesWon+=1;
                document.getElementById('gamesWon').innerHTML = gamesWon;
                alert("you win. Click any door to play again.");
            }
        }
        // switch door
        else {
            // tebakan salah
            if(n != carIsIn) {
                change();
                alert("you lose. Click any door to play again.");
                current_choice = 0;
            }
            //tebakan bener
            else {
                change();
                current_choice = 0;
                gamesWon+=1;
                document.getElementById('gamesWon').innerHTML = gamesWon;
                alert("you win. Click any door to play again.");
            }
        }
    }
    // reset all door when clicked.
    else if(count == 1 && current_choice == 0) {
        for(i=1; i <=3; i++)
            document.querySelector('.img'+i).setAttribute('src', image_reset);
        count = 0;
        play();
        // console.log("reset success.");
    }
}
function change() {
    document.querySelector('.img'+doorWithGoat).setAttribute('src', image_lose);
    document.querySelector('.img'+carIsIn).setAttribute('src', image_win);
    document.querySelector('.img'+doorWithAnotherGoat).setAttribute('src', image_lose);
}
function reset() {
    for(i=1; i <=3; i++)
    document.querySelector('.img'+i).setAttribute('src', image_reset);
    gamesWon = 0;
    play();
}
function rand() {
    let num = Math.floor(Math.random() * 3);
    return (num == 0) ? rand() : num;
}
function play() {
    current_choice = 0;
    count = 0;
    document.getElementById('choose').innerHTML = "";
    document.getElementById('gamesWon').innerHTML = gamesWon;
    //tentukan mobil nya sekarang dimana
    carIsIn = Math.floor(Math.random()*3)+1;
    // //tentukan goat nya dimana
    doorWithGoat = [1,2,3].find((door) => door = rand() && door !== carIsIn);
    //tentukan goat kedua
    doorWithAnotherGoat = [1,2,3].find((door) => door !== carIsIn && door !== doorWithGoat);

    // console.log("car is in door:" + carIsIn);
    // console.log("first goat :" + doorWithGoat);
    // console.log("second goat :"+doorWithAnotherGoat);
    
}