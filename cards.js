
firstCard = {
  prompt: "Welcome, new coach! What is your goal?",
  rightChoiceText: "To win!",
  rightChoice: function(){
    addResource("team", 20)
      addPackToDeck("compete")
      addPackToDeck("fans")
    addToTopDeck("LetsWin")
    },
  
  leftChoiceText: "To make money!", 
  leftChoice: function(){
    addResource("money", 20)
      addPackToDeck("finance")
      addPackToDeck("fans")
    addToTopDeck("MoneyTime")
  },
  name: "Assistant",
  resultText: "",
  image: "./images/assistant.jpg",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["LetsWin", "MoneyTime", "Retired"],
  
  "LetsWin" : {
    prompt: "Me too! Let's go win the title!",
    rightChoiceText: "Yeah!",
    rightChoice: function(){
      addResource("team", 5)
      addResource("money", -5)
    },
    leftChoiceText: "Whoa now, maybe.", 
    leftChoice: function(){
      addResource("money", 5)
      addResource("team", -5)
    },
    name: "Assistant",
    resultText: "",
    image: "./images/assistant.jpg",
    priority: 2,
    pack : "none"
  },

  "MoneyTime": {
    prompt: "Oh.. okay.",
    rightChoiceText: "Get to work.",
    rightChoice: function(){
      addResource("team", -10)
    },
    leftChoiceText: "I want to win too!", 
    leftChoice: function(){
      addResource("team", 5)
    },
    name: "Assistant",
    resultText: "",
    image: "./images/assistant.jpg",
    priority: 2,
    pack : "none"
  },

  "Retired" : {
    prompt: "I just heard about your retirement. Congrats on your career!",
    rightChoiceText: "Thank you.",
    rightChoice: function(){location.reload();
    },
    leftChoiceText: "I was the best, wasn't I?", 
    leftChoice: function(){location.reload();
    },
    name: "Assistant",
    resultText: "",
    image: "./images/assistant.jpg",
    priority: 2,
    pack : "none"
  }

}




