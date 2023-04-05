// Define an array of words
const words = [
    {
      word: "Apple",
      definition: "A round fruit with red or green skin and a white inside."
    },
    {
      word: "Ball",
      definition: "A round object used for playing games such as soccer, basketball, and baseball."
    },
    {
      word: "Cat",
      definition: "A furry animal with four legs, a tail, and whiskers."
    },
    {
        word: "Dog",
        definition: "A common animal with four legs, especially kept by people as a pet or to hunt or guard things"
    },
    {
        word: "Elephant",
        definition: "a heavy plant-eating mammal with a prehensile trunk, long curved ivory tusks, and large ears."
    },
    {
        word: "Fish",
        definition: "Aquatic vertebrate animals that have gills but lack limbs with digits, like fingers or toes."
    },
    {
        word: "Grapes",
        definition: "A round fruit with red or green skin and a white insidea smooth-skinned juicy light green or deep red to purplish black berry eaten dried or fresh as a fruit or fermented to produce wine."
    },
    {
        word: "Hen",
        definition: "A female bird, especially of a domestic fowl, lays egg."
    },
    {
        word: "Icecream",
        definition: "Frozen dairy food made from cream or butterfat, milk, sugar, and flavourings."
    },
    {
        word: "Joker",
        definition: "A person who is fond of joking."
    },
    {
        word: "Kite",
        definition: "A toy consisting of a light frame with thin material stretched over it, flown in the wind at the end of a long string.."
    },
    {
        word: "Lion",
        definition: "A large flesh-eating mammal of the cat family that has a brownish buff coat, a tufted tail."
    },
    {
        word: "Mango",
        definition: "A fleshy, oval, yellowish-red tropical fruit that is eaten ripe or used green for pickles or chutneys.."
    },
    {
        word: "Nest",
        definition: "A structure or place made or chosen by a bird for laying eggs and sheltering its young."
    },
    {
        word: "Orange",
        definition: "A round fruit with yellowish-orange, have citrus Taste."
    },
    {
        word: "Parrot",
        definition: "Colorful birds with four toes on each foot and hooked beaks,also known to copy noises and the way humans talk.."
    },
    {
        word: "Queen",
        definition: "A female monarch who rules a kingdom, or king's wife."
    },
    {
        word: "Rabbit",
        definition: "A burrowing, gregarious, plant-eating mammal with long ears, long hind legs, and a short tail."
    },
    {
        word: "Sun",
        definition: "The star around which the planets revolve, from which we receive heat and light."
    },
    {
        word: "Tiger",
        definition: "A very large solitary cat with a yellow-brown coat striped with black.Also known National Animal of India"
    },
    {
        word: "Umbrella",
        definition: "Covering for protection against weather consisting of fabric stretched over a hinged frame coming out from a center pole."
    },
    {
        word: "Van",
        definition: " Motorvehicle used for transportation of goods or animals."
    },
    {
        word: "Watch",
        definition: "A small timepiece worn typically on a strap on one's wrist."
    },
    {
        word: "X-Ray",
        definition: "Digital image of the internal composition of something, especially a part of the body."
    },
    {
        word: "Yak",
        definition: "A large domesticated wild ox with shaggy hair, humped shoulders, and large horns."
    },
    {
        word: "Zebra",
        definition: "An African wild horse with black-and-white stripes."
    }
  ];
  
  // Function to show the answer for a given word index
  function showAnswer(index) {
    const definition = words[index].definition;
    const definitionElement = document.createElement("p");
    definitionElement.textContent = definition;
    const wordContainer = document.querySelectorAll(".word-container")[index];
    wordContainer.appendChild(definitionElement);
  }
  
  // Function to remove all answers
  function resetAnswers() {
    const definitionElements = document.querySelectorAll(".word-container p");
    definitionElements.forEach(element => element.remove());
  }
  
  // Add event listeners for reset button
  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", resetAnswers);
  