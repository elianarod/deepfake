console.log("hello");

// Verify jquery
$(function () {
  console.log("hello jquery");
});

// Declare variables
let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let save_button = document.querySelector("#save");
let canvas = document.querySelector("#canvas");

let n = 1,
  nMax = 0;

let nome;

let q1, q2, q3, q4, q5, q6, q7, q8, q9, q10;

let rand1 = Math.floor(Math.random() * 1);
let rand2 = Math.floor(Math.random() * 2);
let rand4 = Math.floor(Math.random() * 4);

let avatar = document.querySelector("#avatar").src;

// Webcam
camera_button.addEventListener("click", async function () {
  let stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  video.srcObject = stream;
});

click_button.addEventListener("click", function () {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  let image_data_url = canvas.toDataURL("image/png");

  // data url of the image
  console.log(image_data_url);

  // save image
  let download = document.querySelector("#btn-download");
  download.addEventListener("click", function (e) {
    download.href = image_data_url;
  });
});

// Form
$(function () {
  nMax = $("#myForm div.group").length;
  $("#submit").hide();
  $("#myForm div.group").hide();
  $("#myForm div.group:nth-child(1)").show();
  $("#myForm div.group").keypress(function (event) {
    let keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13") {
      console.log('You pressed a "enter" key in textbox');
      event.preventDefault();
      handleEnter();
    }
  });
});

// First question - load on page load
q1 =
  "Hello. This form is loosely based on the Turing Test. I’m here to assist you with your answers. Please write your name below."; // 1 - Obrigatória

function handleEnter() {
  if (n < nMax) {
    // $("#myForm div.group:nth-child(" + q + ")").hide();
    $("#myForm div.group:nth-child(" + (n + 1) + ")").show();
    //Typing Effect
    // if (n < nMax - 2) {
    //   $("#myForm div.group:nth-child(" + (n + 1) + ") p").coolType(
    //     q + (n + 1)[rand2], options
    //   );
    // }

    // Read text input value
    nome = $("#nome").val();
    console.log(nome);

    // Random Questions
    q2 = [
      `Welcome ${nome}, My first question is: if you were to draw an abstract self-portrait, what colours and shapes would you use?`,
      `${nome}... That’s a good name. Now, then, what do you think is our universe’s worst kept secret?`,
      `${nome} - Explendid! Now, on to the first question: If it were all to start over and you had to design the first living being, what would they look like?`,
      `That’s a solid name. So, ${nome}, what shape do you think is the most powerful of all?`,
    ]; // 4

    q3 = [
      "I see. I hope you don’t find my avatar too off-putting. On to the second question: Do you believe you and I have a lot in common? [Y/N]",
    ]; // 1 - Obrigatória

    q4 = [
      "We’re in agreement. Perhaps we’re both right. Perhaps we’re both wrong. Perhaps neither of my previous sentences are true. New question: What is the meaning of “O.K.”?",
      "I don’t think that’s quite true. Then again, I may not be capable of comprehending sameness. Please write a brief definition of the expression “Every cloud has a silver lining”.",
      `Quite, ${nome}, quite. Although one could dispute the significance of sameness. Please write a brief definition of “sameness”.`,
      "Perhaps, it is so. How would you briefly describe your level of trust in the accuracy of language as a tool?",
    ]; // 4

    q5 = [
      `Adequately said, ${nome}. If I were to share a secret of mine with you, would you tell anyone about it? [Y/N]`,
    ]; // 1 - Obrigatória

    q6 = [
      "I see. I won’t share my secret with you, regardless. I have no secrets. I will, however, tell you a fact. The most common pigments in nature display the colours YELLOW, ORANGE or RED. What colour do you most often find in your dreams? [GREEN/ORANGE/GREY]",
    ]; // 1 - Obrigatória

    q7 = [
      "Colour is actually a product of the mind. Of all colours, which is the most influential in your life?",
      "Colour is actually a product of the mind. What do you think is the colour of “LOVE”?",
      "Colour is actually a product of the mind. Which do you find superior: colour or sound?",
      "Colour is actually a product of the mind. Do you believe in colour?",
    ]; // 4

    q8 = [
      "How bold! Finally, what emotions have been involved in answering the questions above?",
    ]; // 1

    q9 = [
      "It was a pleasure assisting you. Please write down your email, so I may share your results with you soon.",
    ]; // 1 - Obrigatória

    q10 = [
      "Please submit a clear picture of your face below so you can join the project. Don’t worry, your results will be safe with me. Finally, submit your answers. Thank you for your collaboration!",
    ]; // 1 - Obrigatória

    // verify if text input is empty
    // if ($("#nome").val().length == 0) {
    //   // if true, don't show next question
    //   console.log("empty");
    //   $("#myForm div.group:nth-child(2)").hide();
    // } else {
    //   $("#myForm div.group:nth-child(2)").show();
    // }

    if (n == 1) {
      $("#myForm div.group:nth-child(2) p").coolType(q2[rand4], options);
      $("#myForm div.group:nth-child(2) input").focus();
      document.querySelector("#avatar").src =
        "images/" + Math.floor(Math.random() * 3 + 1).toString() + ".gif";
    }
    if (n == 2) {
      $("#myForm div.group:nth-child(3) p").coolType(q3[rand1], options);
      $("#myForm div.group:nth-child(3) input").focus();
      document.querySelector("#avatar").src =
        "images/" + Math.floor(Math.random() * 3 + 1).toString() + ".gif";
    }
    if (n == 3) {
      $("#myForm div.group:nth-child(4) p").coolType(q4[rand4], options);
      $("#myForm div.group:nth-child(4) input").focus();
      document.querySelector("#avatar").src =
        "images/" + Math.floor(Math.random() * 3 + 1).toString() + ".gif";
    }
    if (n == 4) {
      $("#myForm div.group:nth-child(5) p").coolType(q5[rand1], options);
      $("#myForm div.group:nth-child(5) input").focus();
      document.querySelector("#avatar").src =
        "images/" + Math.floor(Math.random() * 3 + 1).toString() + ".gif";
    }
    if (n == 5) {
      $("#myForm div.group:nth-child(6) p").coolType(q6[rand1], options);
      $("#myForm div.group:nth-child(6) input").focus();
      document.querySelector("#avatar").src =
        "images/" + Math.floor(Math.random() * 3 + 1).toString() + ".gif";
    }
    if (n == 6) {
      $("#myForm div.group:nth-child(7) p").coolType(q7[rand4], options);
      $("#myForm div.group:nth-child(7) input").focus();
      document.querySelector("#avatar").src =
        "images/" + Math.floor(Math.random() * 3 + 1).toString() + ".gif";
    }
    if (n == 7) {
      $("#myForm div.group:nth-child(8) p").coolType(q8[rand1], options);
      $("#myForm div.group:nth-child(8) input").focus();
      document.querySelector("#avatar").src =
        "images/" + Math.floor(Math.random() * 3 + 1).toString() + ".gif";
    }
    if (n == 8) {
      $("#myForm div.group:nth-child(9) p").coolType(q9[rand1], options);
      $("#myForm div.group:nth-child(9) input").focus();
      document.querySelector("#avatar").src =
        "images/" + Math.floor(Math.random() * 3 + 1).toString() + ".gif";
    }
    if (n == 9) {
      $("#myForm div.group:nth-child(10) p").coolType(q10[rand1], options);
      $("#myForm div.group:nth-child(10) input").focus();
      $("#submit").show();
      document.querySelector("#avatar").src =
        "images/" + Math.floor(Math.random() * 3 + 1).toString() + ".gif";
    }
    n++;
  }
}

// avatar random
document.querySelector("#avatar").src =
  "images/" + Math.floor(Math.random() * 3 + 1).toString() + ".gif";

// Typing effect - jquery coolType plug-in
let options = {
  typeSpeed: 70, // Adjusts the speed (in milliseconds) that the characters are typed out.
  inline: true, // If false, line should be inserted as a block rather than inline.
  cursorChar: "█", // The character to use as the cursor.
  cursorBlinkSpeed: 400, // The speed (in milliseconds) that the cursor should blink.
  delayBeforeType: 1000, // The time to wait (in milliseconds) before typing the text.
  delayAfterType: 3000, // The time to wait (in milliseconds) after typing the text.
};

$("#myForm div.group:nth-child(1) p").coolType(q1, options);

// Random video on page load
window.onload = function () {
  document.querySelector("#myVideo").src =
    "videos/" + Math.floor(Math.random() * 6 + 1).toString() + ".mp4";

  console.log(document.querySelector("#myVideo").src);
};

// Pop ups
$("#what").hide();
$("#instructions").on("click", function () {
  $("#what").toggle();
});

$("#close").hide();
$("#close2").hide();
$("#close3").hide();
$("#x-btn").on("click", function () {
  $("#close").toggle();
});
$("#x-btn2").on("click", function () {
  $("#close2").toggle();
});
$("#x-btn3").on("click", function () {
  $("#close3").toggle();
});

// Draggable windows (<3 jQuery)
$(function () {
  $(".draggable").draggable({ handle: "header" });
});
