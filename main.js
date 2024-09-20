const createWrap = document.querySelector(".createWrap")
const createContainer = document.querySelector(".create .container")
const mainCreate = document.querySelector(".mainCreate")
const mainCreate2 = document.querySelector(".mainCreate2")
const fadeCreate = document.querySelectorAll(".fadeCreate")
const run = document.querySelector(".run")
const runPersonWrap = document.querySelector(".runPersonWrap")
const singleRunPerson = document.querySelectorAll(".singleRunPerson")
const peopleCount = document.querySelectorAll(".peopleCount")
const scaleCount = document.querySelector(".scaleCount")
const runHeading = document.querySelector(".runHeading")
const runSubHeading = document.querySelector(".runSubHeading")
const decideTop = document.querySelector(".decideTop")
const decideTopLeft = document.querySelector(".decideTopLeft")
const taste = document.querySelector(".taste")
const tasteHeading = document.querySelector(".tasteHeading")
const opening2 = document.querySelector(".opening2")
const opening2Container = document.querySelector(".opening2 .container")
const stepAhedHeading = document.querySelector(".stepAhed .container h2")
const tryOut2 = document.querySelector(".tryOut2")
const tryOut2Overlay = document.querySelector(".tryOut2Overlay")
const singleCreate = document.querySelectorAll(".singleCreate")
const move1 = document.querySelector(".move1")
const move2 = document.querySelector(".move2")
const move3 = document.querySelector(".move3")







if (window.innerWidth < 650) {
    singleCreate.forEach(val => {
        val.style = `width: ${createContainer.clientWidth - 70}px;`
    })
}

opening2.style = `padding-bottom: ${opening2Container.clientHeight + 60}px;`
taste.style = `padding-bottom: ${opening2Container.clientHeight + 500}px;`
window.addEventListener("scroll", () => {
    let createWrapPosition = createWrap.offsetTop
    let runPosition = run.offsetTop
    let decideTopPosition = decideTop.offsetTop
    let opening2Position = opening2.offsetTop
    let tastePosition = taste.offsetTop
    let stepAhedHeadingPosition = stepAhedHeading.offsetTop
    let windowHeight = window.innerHeight
    if (window.scrollY > createWrapPosition - 50) {
        if (window.innerWidth >= 1050) {
            mainCreate.style = `position: fixed; top: ${0 + ((window.scrollY - createWrapPosition + 50) <= 200 ? 50 : (window.scrollY - createWrapPosition + 50) > 200 && (window.scrollY - createWrapPosition + 50) <= 700 ? (((windowHeight / 2 - 125) * (window.scrollY - (createWrapPosition - 50))) / 700) : windowHeight / 2 - 125)}px; left: 50%; transform: translate(-56%, calc(-50% + ${125}px)) scale(${window.scrollY < runPosition + 1250 ? (1 + ((window.scrollY - createWrapPosition + 50) <= 200 ? (.2 * (window.scrollY - createWrapPosition + 50)) / 200 : .2)) : (window.scrollY < runPosition + 1550 ? (1 + (.2 - (.2 * (window.scrollY - runPosition - 1250)) / 300)) : 1)}); opacity: ${window.scrollY > runPosition + 1250 ? (window.scrollY < runPosition + 1550 ? 1 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : 0) : 1}; width: ${window.innerWidth < 650 && createContainer.clientWidth - 70}px;`

        }
        if (window.innerWidth >= 1050) {
            fadeCreate.forEach(val => {
                val.style = `opacity: ${1 - ((1 * (window.scrollY - createWrapPosition + 50)) / 100)};`
            })
        }

    } else {
        mainCreate.style = `positon: unset; transform: unset;`
        fadeCreate.forEach(val => {
            val.style = `opacity: 1; width: ${window.innerWidth < 650 && createContainer.clientWidth - 70}px;`
        })
    }

    if (window.innerWidth < 1050) {
        mainCreate2.style = `position: ${window.scrollY > createWrapPosition + 560 - 50 ? "fixed" : "unset"}; top: ${0 + ((window.scrollY - createWrapPosition - 560 + 50) <= 200 ? 50 : (window.scrollY - createWrapPosition - 560 + 50) > 200 && (window.scrollY - createWrapPosition - 560 + 50) <= 700 ? (((windowHeight / 2 - 125) * (window.scrollY - (createWrapPosition + 560 - 50))) / 700) : windowHeight / 2 - 125)}px; transform: translate(${window.scrollY > createWrapPosition + 560 - 50 ? "-50%, calc(-50% + 125px)" : "unset"}) scale(${window.scrollY < runPosition + 1250 ? (1 + ((window.scrollY - createWrapPosition - 560 + 50) <= 200 ? (.2 * (window.scrollY - createWrapPosition - 560 + 50)) / 200 : .2)) : (window.scrollY < runPosition + 1550 ? (1 + (.2 - (.2 * (window.scrollY - runPosition - 1250)) / 300)) : 1)}); opacity: ${window.scrollY > runPosition + 1250 ? (window.scrollY < runPosition + 1550 ? 1 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : 0) : 1}; width: ${window.innerWidth < 650 && createContainer.clientWidth - 70}px;`
        createWrap.style = `padding-bottom: ${window.scrollY > createWrapPosition + 560 - 50 ? 250 : 0}px;`
    }


    if (window.scrollY > stepAhedHeadingPosition - (windowHeight / 2)) {
        tryOut2Overlay.style = `left: ${window.scrollY < stepAhedHeadingPosition - (windowHeight / 2) + 192 ? window.scrollY - (stepAhedHeadingPosition - (windowHeight / 2)) : 192}px;`
    } else {
        tryOut2Overlay.style = `left: 0px;`
    }


    if (window.scrollY > runPosition + 400) {
        runPersonWrap.style = `display: block;`
        singleRunPerson[0].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 450 ? (window.scrollY > runPosition + 1250 ? 1 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : 1) : 0) : 0}; top: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 40 - ((50 * (window.scrollY - runPosition - 1250)) / 200) : 40) : -500}px;`
        singleRunPerson[1].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 500 ? (window.scrollY > runPosition + 1250 ? 1 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : 1) : 0) : 0}; bottom: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 60 + ((50 * (window.scrollY - runPosition - 1250)) / 200) : 60) : -500}px;`
        singleRunPerson[2].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 470 ? (window.scrollY > runPosition + 1250 ? .6 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : .6) : 0) : 0}; top: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 130 - ((50 * (window.scrollY - runPosition - 1250)) / 200) : 130) : -500}px;`
        singleRunPerson[3].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 530 ? (window.scrollY > runPosition + 1250 ? .6 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : .6) : 0) : 0}; bottom: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 20 + ((50 * (window.scrollY - runPosition - 1250)) / 200) : 20) : -500}px;`
        singleRunPerson[4].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 560 ? (window.scrollY > runPosition + 1250 ? 1 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : 1) : 0) : 0}; top: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 230 - ((50 * (window.scrollY - runPosition - 1250)) / 200) : 230) : -500}px;`
        singleRunPerson[5].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 580 ? (window.scrollY > runPosition + 1250 ? .5 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : .5) : 0) : 0}; top: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 310 - ((50 * (window.scrollY - runPosition - 1250)) / 200) : 310) : -500}px;`
        singleRunPerson[6].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 600 ? (window.scrollY > runPosition + 1250 ? .4 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : .4) : 0) : 0}; top: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 95 - ((50 * (window.scrollY - runPosition - 1250)) / 200) : 95) : -500}px;`
        singleRunPerson[7].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 630 ? (window.scrollY > runPosition + 1250 ? 1 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : 1) : 0) : 0}; bottom: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 100 + ((50 * (window.scrollY - runPosition - 1250)) / 200) : 100) : -500}px;`
        singleRunPerson[8].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 650 ? (window.scrollY > runPosition + 1250 ? .4 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : .4) : 0) : 0}; bottom: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 30 + ((50 * (window.scrollY - runPosition - 1250)) / 200) : 30) : -500}px;`
        singleRunPerson[9].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 680 ? (window.scrollY > runPosition + 1250 ? .5 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : .5) : 0) : 0}; bottom: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 130 + ((50 * (window.scrollY - runPosition - 1250)) / 200) : 130) : -500}px;`
        singleRunPerson[10].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 690 ? (window.scrollY > runPosition + 1250 ? 1 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : 1) : 0) : 0}; top: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 70 - ((50 * (window.scrollY - runPosition - 1250)) / 200) : 70) : -500}px;`
        singleRunPerson[11].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 720 ? (window.scrollY > runPosition + 1250 ? 1 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : 1) : 0) : 0}; bottom: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 150 + ((50 * (window.scrollY - runPosition - 1250)) / 200) : 150) : -500}px;`
        singleRunPerson[12].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 750 ? (window.scrollY > runPosition + 1250 ? 1 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : 1) : 0) : 0}; bottom: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 225 + ((50 * (window.scrollY - runPosition - 1250)) / 200) : 225) : -500}px;`

        singleRunPerson[15].style = `opacity: ${window.scrollY > runPosition + 780 ? 1 : 0}; top: ${window.scrollY > decideTopPosition - windowHeight / 2 + (windowHeight / 4) ? (window.innerWidth >= 750 ? run.clientHeight + 100 : (window.scrollY > decideTopPosition - windowHeight / 2 + 370 ? run.clientHeight + 350 : (windowHeight / 2 - windowHeight / 4) + 95)) : (windowHeight / 2 - windowHeight / 4) + 95}px; position: ${window.innerWidth >= 750 ? (window.scrollY > decideTopPosition - windowHeight / 2 + (windowHeight / 4) ? "absolute" : "fixed") : (window.scrollY > decideTopPosition - windowHeight / 2 + 370 ? "absolute" : "fixed")};`
        // may need later -- 215 - (window.scrollY - decideTopPosition + windowHeight / 2 - 370)  ----  (window.scrollY - decideTopPosition + windowHeight / 2 - 150)
        singleRunPerson[13].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 800 ? (window.scrollY > runPosition + 1250 ? .4 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : .4) : 0) : 0}; top: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 140 - ((50 * (window.scrollY - runPosition - 1250)) / 200) : 140) : -500}px;`
        singleRunPerson[14].style = `opacity: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 830 ? (window.scrollY > runPosition + 1250 ? .2 - ((1 * (window.scrollY - runPosition - 1250)) / 300) : .2) : 0) : 0}; bottom: ${window.scrollY < decideTopPosition + (windowHeight / 2) ? (window.scrollY > runPosition + 1250 ? 90 + ((50 * (window.scrollY - runPosition - 1250)) / 200) : 90) : -500}px;`




        peopleCount.forEach(val => {
            val.innerHTML = `${window.scrollY > runPosition + 450 ? (window.scrollY > runPosition + 470 ? (window.scrollY > runPosition + 500 ? (window.scrollY > runPosition + 530 ? (window.scrollY > runPosition + 560 ? (window.scrollY > runPosition + 580 ? (window.scrollY > runPosition + 600 ? (window.scrollY > runPosition + 630 ? (window.scrollY > runPosition + 650 ? (window.scrollY > runPosition + 680 ? (window.scrollY > runPosition + 690 ? (window.scrollY > runPosition + 720 ? (window.scrollY > runPosition + 750 ? (window.scrollY > runPosition + 780 ? (window.scrollY > runPosition + 800 ? 16 : 15) : 14) : 13) : 12) : 11) : 10) : 9) : 8) : 7) : 6) : 5) : 4) : 3) : 1) : 0}`
        })

        scaleCount.style = `transform: scale(${window.scrollY > runPosition + 450 ? (window.scrollY > runPosition + 830 ? 1 : 1.2) : 1});`
    } else if (window.scrollY < runPosition + 400) {
        runPersonWrap.style = `display: none;`
        scaleCount.style = `transform: scale(1)`
        peopleCount.forEach(val => {
            val.innerHTML = `0`
        })
    }

    if (window.scrollY > decideTopPosition - windowHeight / 2) {
        decideTopLeft.style = `position: ${window.scrollY > (decideTopPosition - windowHeight / 2) + (windowHeight / 4) ? "absolute" : "fixed"};opacity: ${window.scrollY > (decideTopPosition - windowHeight / 2) + (windowHeight / 4) ? 1 : (window.scrollY - (decideTopPosition - windowHeight / 2)) / (windowHeight / 4)}; top: ${window.scrollY > (decideTopPosition - windowHeight / 2) + (windowHeight / 4) ? (window.innerWidth >= 750 ? 0 : 220) : (window.innerWidth >= 750 ? windowHeight / 4 : windowHeight / 4 + 220)}px; left: ${window.innerWidth >= 750 && (window.scrollY > (decideTopPosition - windowHeight / 2) + (windowHeight / 4) ? 0 : window.innerWidth >= 1230 ? 160 : (window.innerWidth > 400 ? 60 : 20))}px; right: ${window.innerWidth < 750 && (window.scrollY > (decideTopPosition - windowHeight / 2) + (windowHeight / 4) ? 0 : (window.innerWidth > 400 ? 60 : 20))}px;`
        move1.style = `left: ${window.scrollY > (decideTopPosition - windowHeight / 2) + (windowHeight / 4) ? 0 : 30 - (30 * (window.scrollY - (decideTopPosition - (windowHeight / 2)))) / (windowHeight / 4)}px;`
        move3.style = `right: ${window.scrollY > (decideTopPosition - windowHeight / 2) + (windowHeight / 4) ? 0 : 30 - (30 * (window.scrollY - (decideTopPosition - (windowHeight / 2)))) / (windowHeight / 4)}px;`
        move2.style = `top: ${window.scrollY > (decideTopPosition - windowHeight / 2) + (windowHeight / 4) ? 200 : 170 + (30 * (window.scrollY - (decideTopPosition - (windowHeight / 2)))) / (windowHeight / 4)}px;`
        // may need later - (windowHeight / 4 + 220 - (window.scrollY - ((decideTopPosition - windowHeight / 2) + (windowHeight / 4))))

    } else {
        decideTopLeft.style = `opacity: 0;`
        move1.style = `left: 0;`
    }


    if (window.scrollY > runPosition - (windowHeight / 2 - 30)) {
        runSubHeading.style = `opacity: 0;`
        runHeading.style = `opacity: 0;`
    } else {
        runSubHeading.style = `opacity: 1;`
        runHeading.style = `opacity: 1;`
    }


    if (window.scrollY > opening2Position - 50) {
        opening2Container.style = `position: ${window.scrollY > tastePosition + 50 ? "absolute" : "fixed"}; top: ${window.scrollY > tastePosition + 50 ? opening2Container.clientHeight + 150 : 50}px;`
        opening2Container.style.setProperty("--calctop", `${window.scrollY > tastePosition + 50 ? opening2Container.clientHeight - opening2Container.clientHeight : opening2Container.clientHeight - (opening2Container.clientHeight - (tastePosition - window.scrollY - 50))}px`)
        // window.scrollY > tastePosition - 50 ? opening2Container.clientHeight+1 : opening2Container.clientHeight - (tastePosition - window.scrollY - 50) may need later 50 - (window.scrollY - tastePosition - 50)
    } else {
        opening2Container.style = `position: absolute;`
        opening2Container.style.setProperty("--calctop", `${opening2Container.clientHeight}px`)
    }


    if (window.scrollY + windowHeight / 2 > tastePosition + taste.clientHeight - 350) {
        tasteHeading.style = `opacity: ${window.scrollY + windowHeight / 2 > tastePosition + taste.clientHeight - 350 && window.scrollY + windowHeight / 2 < tastePosition + taste.clientHeight - 150 ? (((window.scrollY + windowHeight / 2) - (tastePosition + taste.clientHeight - 350)) / 200) : 1}; bottom: ${window.scrollY > tastePosition + taste.clientHeight - 430 ? (windowHeight / 2) + (window.scrollY - (tastePosition + taste.clientHeight) + 430) : windowHeight / 2}px;`
    } else {
        tasteHeading.style = `opacity: 0; `
    }


    // if (window.scrollY > tastePosition + 30) {

    // } else {

    // }
})








document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
}, false);

document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.keyCode == 123) {
        e.stopPropagation();
        e.preventDefault();
    }
});


