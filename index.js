function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(character = '*'){
    return function(encouragement = "special") {
        return `You are ${character}${encouragement}${character}!`
    }
}