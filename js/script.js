function PageOfMirza() {
    window.location.href = ".//html/mirza.html";
}

function PageOfJuen() {
    window.location.href = ".//html/juen.html";
}

function show() {
    document.getElementById("nav").style.left = "0"
    document.getElementById("button-show").style.left = "17em"
    document.getElementById("button-show").style.background = "url(../img/show.png)"
    document.getElementById("button-show").style.backgroundSize = "cover"
    document.getElementById("button-show").style.backgroundPosition = "center"
    setTimeout(displaysetting, 400)
}

function displaysetting() {
    document.getElementById("button-show").style.display = "none"
    document.getElementById("button-show").style.left = "1em"
    document.getElementById("button-show").style.background = "url(../img/show.png)"
    document.getElementById("button-show").style.backgroundSize = "cover"
    document.getElementById("button-show").style.backgroundPosition = "center"
    document.getElementById("button-hide").style.display = "block"
}

function displaysetting2() {
    document.getElementById("button-hide").style.display = "none"
    document.getElementById("button-hide").style.left = "17em"
    document.getElementById("button-hide").style.background = "url(../img/hide.png)"
    document.getElementById("button-hide").style.backgroundSize = "cover"
    document.getElementById("button-hide").style.backgroundPosition = "center"
    document.getElementById("button-show").style.display = "block"
}

function hide() {
    document.getElementById("nav").style.left = "-100%"
    document.getElementById("button-hide").style.left = "1em"
    document.getElementById("button-hide").style.background = "url(../img/show.png)"
    document.getElementById("button-hide").style.backgroundSize = "cover"
    document.getElementById("button-hide").style.backgroundPosition = "center"
    setTimeout(displaysetting2, 400)
}

function section1() {
    document.getElementById("poetry-section2").style.left = "15.6em"
    document.getElementById("poetry-sections1").style.right = '-39.7em'
    document.getElementById("poetry-section3").style.left = "-39.3em"
    document.getElementById("poetry-sections2").style.zIndex = "0"
}
function section2() {
    document.getElementById("poetry-section2").style.left = "-23.71em"
    document.getElementById("poetry-section1").style.left = '36.3em'
    document.getElementById("poetry-section3").style.left = "-19.6em"
    document.getElementById("poetry-section1").style.zIndex = '0'
}

function sectiontwo() {
    window.location.href = "../html/poetrytwo.html";
}

function sectionfive() {
    window.location.href = "../html/poetryfive.html";

}

function sectioneight() {
    window.location.href = "../html/poetryeight.html";

}

function back() { 
    window.location.href = "../html/mirza.html";

}

var check_poetry_1 = false
var check_poetry_2 = false
var check_poetry_3 = false
var check_poetry_4 = false
var check_poetry_5 = false
var check_poetry_6 = false
var check_poetry_6_1 = false


var left = document.getElementById("left")

if(!check_poetry_1) {
    left.style.display = 'none' 
}
function button(checker) {
    var one = document.getElementById("one")
    var two = document.getElementById("two")
    var three = document.getElementById("three")
    var four = document.getElementById("four")
    var five = document.getElementById("five")
    var six = document.getElementById("six")
    var right = document.getElementById("right")
    var left = document.getElementById("left")

    if ( checker == 1 && !check_poetry_1 && !check_poetry_2 && !check_poetry_3) {
        two.style.transform = "translateX(-130%)"
        one.style.transform = "translateX(-130%)"
        three.style.transform = "translateX(-200%)"
        check_poetry_1 = true
        check_poetry_4 = true
        left.style.display = 'block' 
    }
    else if (checker == 1 && check_poetry_1 == true && !check_poetry_2 && !check_poetry_3) {
        two.style.transform = "translateX(-260%)"
        one.style.transform = "translateX(-260%)"
        three.style.transform = "translateX(-328%)"
        four.style.transform = "translateX(-200%)"
        // right.style.display = 'none'
        check_poetry_1 = false
        check_poetry_2 = true
        check_poetry_3 = true
        check_poetry_4 = false
    }
    else if (checker == 1 && !check_poetry_1 && check_poetry_2 == true && check_poetry_3 == true && !check_poetry_4) {
        console.log("Hello2")
        four.style.transform = 'translateX(-328%)'
        two.style.transform = "translateX(-260%)"
        three.style.transform = "translateX(-458%)"
        two.style.transform = "translateX(-458%)"
        five.style.transform =  "translateX(-200%)"
        check_poetry_3 = false
        check_poetry_5 = true
        check_poetry_6 = true
    }
    else if(checker == 1 &&  check_poetry_6 && !check_poetry_6_1){ 
        console.log("herllo")
        three.style.transform = "translateX(-600%)"
        four.style.transform = "translateX(-458%)"
        five.style.transform = "translateX(-328%)"
        right.style.display = 'none'


        check_poetry_6 = false
        check_poetry_6_1 = true
    }
    else if(checker == 2  && !check_poetry_6 && check_poetry_6_1) { 
        console.log("working@")

        check_poetry_6 = true
        check_poetry_6_1 = false

        four.style.transform = "translateX(-328%)"
        five.style.transform = "translateX(-200%)"
        three.style.transform = "translateX(-458%)"
        right.style.display = 'block'

    }

    else if (checker == 2 && check_poetry_5 && !check_poetry_3 && !check_poetry_6_1) {
        four.style.transform = "translateX(-200%)"
        three.style.transform = "translateX(-328%)"
        two.style.transform = "translateX(-260%)"

        check_poetry_3 = true
        five.style.transform = "translateX(0%)"
        check_poetry_5 = false
    }
    else if (checker == 2 && check_poetry_4 == true) {
        two.style.transform = "translateX(0%)"
        one.style.transform = "translateX(0%)"
        three.style.transform = "translateX(0%)" 
        four.style.transform = "translateC(0%)"
        check_poetry_2 = false
        check_poetry_1 = false
        check_poetry_3 = false
        left.style.display = 'none' 
    }
    else if (checker == 2 && check_poetry_3 == true) {
        two.style.transform = "translateX(-130%)"
        one.style.transform = "translateX(-130%)"
        three.style.transform = "translateX(-200%)" 
        four.style.transform = "translateX(-100%)"   
        check_poetry_4 = true
        check_poetry_1 = true 
        check_poetry_2 = false
        check_poetry_3 = false
        right.style.display = 'block'
    }
    
}
var check = false
function navbar() {

    if(!check) {
        document.getElementById("nav-phone").style.top = "0%"
        document.getElementById("square1").style.display = "none"
        document.getElementById("square2").style.display = "none"
        document.getElementById("square3").style.display = "none"
        document.getElementById("square4").style.display = "none"
        document.getElementById("t-mirza").style.display = "none"
        document.getElementById("t-Parveen").style.display = "none"
        document.getElementById("t-Mir").style.display = "none"
        document.getElementById("t-Elia").style.display = "none"
        document.getElementById("text").style.display = "none"
        check = true
    }
    else if (check == true) {
        document.getElementById("nav-phone").style.top = "-1000em"
        document.getElementById("square1").style.display = "block"
        document.getElementById("square2").style.display = "block"
        document.getElementById("square3").style.display = "block"
        document.getElementById("square4").style.display = "block"
        document.getElementById("t-mirza").style.display = "block"
        document.getElementById("t-Parveen").style.display = "block"
        document.getElementById("t-Mir").style.display = "block"
        document.getElementById("t-Elia").style.display = "block"
        document.getElementById("text").style.display = "block"
        check = false
    }

}
var check1 = false
function navbar1() {
    if(!check) {
        document.getElementById("nav-phone").style.top = "2.9em"
        document.getElementById("navv").style.backdropFilter = "brightness(20%)"
        check = true
    }
    else if(check) {
        document.getElementById("nav-phone").style.top = "-200em"
        document.getElementById("navv").style.backdropFilter = "brightness(100%)"
        document.getElementById("personal-info").style.display = "block"
        check = false
    }

}

function pageofparveeen() {
    window.location.href = ".//html/parveen.html"
}

function pageofmir() {
    window.location.href = ".//html/mir.html"
}