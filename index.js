




//max-score variable
//pattern
//current index to match the button pressed by user with the pattern
//if current index == pattern.length then i increase the level as well as max score
//otherwise i match with the pattern
//if it matches then i increment my index
//otherwise game over and empty the pattern

let maxscore = 0;
let pattern = [];
let index_to_match = 0;


//check for a key event to start the game
//if the pattern is empty still then only start the game otherwise dont

function addpattern() {
    pattern.push(Math.floor(Math.random() * 4) + 1);
    console.log(pattern);
}

function playpattern() {
    switch (pattern[current_level - 1]) {
        case 1:
            var audio = new Audio("./sounds/green.mp3");
            audio.play();
            addanimation("green");
            break;
        case 2:
            var audio = new Audio("./sounds/red.mp3");
            audio.play();
            addanimation("red");
            break;
        case 3:
            var audio = new Audio("./sounds/yellow.mp3");
            audio.play();
            addanimation("yellow");
            break;
        case 4:
            var audio = new Audio("./sounds/blue.mp3");
            audio.play();
            addanimation("blue");
            break;
    }
}

let current_level = 0;

function do_necessary() {
    addpattern();
    current_level++;
    maxscore = Math.max(maxscore, current_level - 1);
    document.querySelector("h1").innerHTML = "Level " + current_level;
    document.querySelector("p").innerText = "Max Score :" + maxscore;

    playpattern();
}





document.addEventListener("keydown", (event) => {

    if (pattern.length == 0) {
        
        do_necessary();
    }

})


//get input from user through button

var list = document.querySelectorAll(".btn");

function get_num(s) {
    switch (s) {
        case "green":
            return 1;
        case "red":
            return 2;
        case "yellow":
            return 3;
        case "blue":
            return 4;
    }
}


function addanimation(id) {
    
    document.querySelector("#" + id).style.backgroundColor = "grey";

    setTimeout(() => {
        document.querySelector("#" + id).style.backgroundColor = id;
    }, 300);
    

}




for (let i = 0; i < list.length; i++){

    list[i].addEventListener("click", function () {
        let num = get_num(list[i].id);
        console.log(current_level);
        switch (num) {
            
            case 1:
                if (current_level) {

                    
                    
                    if (pattern[index_to_match] == i + 1) {
                        
                        addanimation(list[i].id);
                        var audio = new Audio("./sounds/green.mp3");
                        audio.play();
                        index_to_match++;
                        if (index_to_match == current_level) {
                         
                            setTimeout(() => {
                                do_necessary()
                            }, 1000);
                            index_to_match = 0;
                        }
                        
                    }
                    else {
                        game_over();
                    }
                }
                else {
                    var audio = new Audio("./sounds/green.mp3");
                    audio.play();
                }
                break;
            
            
                
            case 2:
                if (current_level) {
                    
                    if (pattern[index_to_match] == i + 1) {
                        addanimation(list[i].id);
                        var audio = new Audio("./sounds/red.mp3");
                        audio.play();
                        index_to_match++;
                        if (index_to_match == current_level) {
                            setTimeout(() => {
                                do_necessary()
                            }, 1000);
                            index_to_match = 0;
                        }
                        
                    }
                    else {
                        game_over();
                    }
                }
                else {
                    var audio = new Audio("./sounds/red.mp3");
                    audio.play();
                }
                break;
            
            case 3:
                if (current_level) {
                    
                    if (pattern[index_to_match] == i + 1) {
                        addanimation(list[i].id);
                        var audio = new Audio("./sounds/yellow.mp3");
                        audio.play();
                        index_to_match++;
                        if (index_to_match == current_level) {
                            setTimeout(() => {
                                do_necessary()
                            }, 1000);
                            index_to_match = 0;

                        }
                        
                    }
                    else {
                        game_over();
                    }
                }
                else {
                    var audio = new Audio("./sounds/yellow.mp3");
                    audio.play();
                }
                break;
            
            case 4:
                if (current_level) {
                    
                    if (pattern[index_to_match] == i + 1) {
                        addanimation(list[i].id);
                        var audio = new Audio("./sounds/blue.mp3");
                        audio.play();
                        index_to_match++;
                        if (index_to_match == current_level) {
                            setTimeout(() => {
                                do_necessary()
                            }, 1000);
                            index_to_match = 0;
                        }
                        
                    }
                    else {
                        game_over();
                    }
                }
                else {
                    var audio = new Audio("./sounds/blue.mp3");
                    audio.play();
                }
                break;
        }
    })

    
}





console.log(document.querySelector("p").innerText);


function game_over() {
    document.querySelector("h1").innerHTML = "Game Over , Press any Key to Restart Game";
    current_level = 0;
    index_to_match = 0;
    pattern = [];
    index_to_match = 0;
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "#011F3F";
    }, 400);
}















