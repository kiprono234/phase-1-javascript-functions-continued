// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function(activity = 'go to the office'){
   return `This Monday, I will ${activity}.`;
}
function wrapAdjective(wrapper = '*'){
    const name = "You are"
    return function(adjective = 'special'){
     return `${name} ${wrapper}${adjective}${wrapper}!`;   
    }
    wrapAdjective(adjective)('hardworker');
}
module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
};

