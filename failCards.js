failCards = [{
  resource:"team", 
  level: "low", 
  card: {
    prompt: "Your team sucks! You're fired.",
    rightChoiceText: "Oh dear.",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "I didn't want this job anyways!", 
    leftChoice: function(){location.reload();
    },
    name: "Board of Directors",
    resultText: "You're losing too much.",
    image: "./images/fired.png"
  }  
}, {
  resource:"money", 
  level: "low", 
  card: {
    prompt: "We're out of money! You're fired.",
    rightChoiceText: "That sucks.",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "You're so poor!", 
    leftChoice: function(){location.reload();
    },
    name: "Board of Directors",
    resultText: "The team is broke.",
    image: "./images/fired.png"
  }  
}, {
  resource:"fans", 
  level: "low", 
  card: {
    prompt: "The fans hate you! You're fired.",
    rightChoiceText: "That's unfair!",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "I'm sorry.", 
    leftChoice: function(){location.reload();
    },
    name: "Board of Directors",
    resultText: "The fans want you gone.",
    image: "./images/fired.png"
  }  
}
]

defaultFailCard = {
  prompt: "You're fired!",
  rightChoiceText: "Why?",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "Okay", 
  leftChoice: function(){location.reload();
  },
  name: "Board",
  resultText: "You lost your job.",
  image: "./images/fired.png"
}