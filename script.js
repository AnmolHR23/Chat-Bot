

function talk() {
  var know = {
    Hi: "Hello",
    "How are you?": "I am fine, how about you?",
    "What is your name?": "My Name is Anmol",
    "Where do you live ?": "In India.",
    "Do you like football?": "Yes I love to play Football.",
    "Good Morning": "Good Morning.",
    "Good Evening": "Good Evening.",
    "Thank You.": "You're Welcome!",
    "What is your favorite color?": "My favorite color is BLUE.",
    "What is your favorite thing to do?":
      "I like to learn new things and help people.",
    "What is your favorite place?": "My favorite place is Kundapura.",
    "What can i do for you": "Please be my friend",
    Ok: "Thank You So Much ",
    Bye: "Okay! Will meet soon..",
  };
  var user = document.getElementById("userBox").value;
  document.getElementById("chatLog").innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById("chatLog").innerHTML = know[user] + "<br>";
  } else {
    document.getElementById("chatLog").innerHTML =
      "Sorry,I didn't understand <br>";
  }
}
