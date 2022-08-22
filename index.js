// code your solution here

function saturdayFun(activity1 = "roller-skate"){
    
    return `This Saturday, I want to ${activity1}!`
}

function mondayWork(activity2= "go to the office"){
    return `This Monday, I will ${activity2}.`
}


// function wrapAdjective(wrapAdjective="*"){
//     function 
// }

// function wrapAdjective(activity = '||') {
//     function prami(pram = 'a dedicated programmer'){
//         return pram;
//     }
//     return `You are ${activity}${prami()}${activity}!`
// } 
const wrapAdjective = (activity = '*') => {
    return (pram = 'special') => {
        return `You are ${activity}${pram}${activity}!`
    }
} 