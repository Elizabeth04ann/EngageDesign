function responsiveNav() {
    var x = document.getElementById("mynavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

var quotes = [
    'Why don\'t eggs tell jokes? They\'d crack each other up.' ,
    'I don\'t trust stairs. They\'er always up to something.' ,
    'Did you hear the rumor about butter? Well\, I\'m not going to spread it!' ,
    'Why couldn\'t the bicycle stand up by itself? It was two tired.' ,
    'How do you make a tissue dance? You put a little boogie in it.' ,
    'Why did the scarecrow win an award? Because he was outstanding in his field.' ,
    'I made a pencil with two erasers. It was pointless.' ,
    'I have a great joke about construction, but I\'m still working on it.' ,
    'What\'s the difference between a hippo and a zippo? The hippo is huge and the zippo is a little lighter.' ,
    'Why are the farmer\'s jokes not funny? Because they are corny.' ,
    'How do you fix a broken pumpkin? With a pumpkin patch.' ,
    'A man walked into a bar...ouch!' ,
    'I\'m so good at sleeping I can do it with my eye\'s closed.' ,
    'I invented a new word: Plagiarism.' ,
    'You know where I store all my dad jokes? In a dad-a-base.' ,
    'Why couldn\'t the kids watch the pirate movie? Cause it is rated Aarrr.' ,
]
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
