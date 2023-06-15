// code your solution here
function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`;
}

let mondayWork = function(work="go to the office"){
    return `This Monday, I will ${work}.`;
};

function wrapAdjective(parm2 = "*") {
    return function(parm1 = "special") {
      return `You are ${parm2}${parm1}${parm2}!`;
    };
  }
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  
  