// variables keep our code short
var m = document.getElementById("myModal");
var screams = document.getElementById("screamingsound");
IsBusy = false;
BlueEnabled = true;

const backgroundMusic = new Audio("audio/audio.mp3");

backgroundMusic.loop = true;

const playbackState = getCookie("musicPlaybackState");

if (playbackState === "playing") {
  const currentTime = parseFloat(getCookie("musicCurrentTime"));
  backgroundMusic.currentTime = currentTime;
  backgroundMusic.play();
} else {
  backgroundMusic.play();
}

window.addEventListener("beforeunload", () => {
  setCookie(
    "musicPlaybackState",
    backgroundMusic.paused ? "paused" : "playing"
  );
  setCookie("musicCurrentTime", backgroundMusic.currentTime);
});

function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`${name}=([^;]+)`));
  return match ? match[1] : null;
}

// Function to pause the music when the puzzle is completed
function pauseBackgroundMusic() {
  backgroundMusic.pause(); // Pause the audio
  setCookie("musicPlaybackState", "paused"); // Update the playback state cookie
  setCookie("musicCurrentTime", backgroundMusic.currentTime); // Save the current time
}

function showModal() {
  // https://www.w3schools.com/howto/howto_css_modals.asp
  // https://www.w3schools.com/css/css_positioning.asp
  // essentially you have a second page that is "position: fixed" filling up the screen, but it is in "display: none" so you can't see it!
  document.getElementById("myModal").style.display = "flex";
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
  changeTwo();
}
function hideModalSecond() {
  document.getElementById("myModal").style.display = "none";
}
function hideModalThird() {
  document.getElementById("myModal").style.display = "none";
}
function hideModalCHANGE() {
  document.getElementById("myModal").style.display = "none";
}

//////
///////
///////
//////
///BELAAAAA HERE/////
function nextEscapeRoomPage() {
  window.location.href = "https://miragrim25.github.io/stardewvalleyfall/";
}
////////
////////
////////
///////

function changeOpen() {
  window.location.href = "1.html";
}
function changeTwo() {
  window.location.href = "2.html";
}
function changeThree() {
  window.location.href = "3.html";
}
//
function showModals(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

// Function to hide a modal
function hideModals(modalId) {
  document.getElementById(modalId).style.display = "none";
}
//
function showModal2() {
  document.getElementById("myModal2").style.display = "flex";
}
function hideModal2() {
  document.getElementById("myModal2").style.display = "none";
  document.getElementById("inve").style.display = "flex";
}

//
function toggleElement(id) {
  const firstElement = document.getElementById(`first${id}`);
  const secondElement = document.getElementById(`second${id}`);

  // Check current display style of the second element
  const secondDisplay = window.getComputedStyle(secondElement).display;

  if (secondDisplay === "none") {
    // Show the second element, hide the first
    secondElement.style.display = "flex";
    firstElement.style.display = "none";

    // Update click behavior
    secondElement.setAttribute("onclick", `toggleElement('${id}')`);
  } else {
    // Show the first element, hide the second
    secondElement.style.display = "none";
    firstElement.style.display = "flex";
  }

  // Check for style matches after toggling
  checkStyleMatches();
}
//

function checkStyleMatches() {
  console.log("Checking styles...");

  // Group A: Watcher elements
  const watcherIds = ["Cheese", "Carrot", "Garlic", "Hot", "Bok", "Green"];

  // Group B: Matcher elements
  const matcherIds = ["Parsnip", "Squash", "Corn", "Potato"];

  // Desired styles for each group
  const watcherDesiredStyle = "flex";
  const matcherDesiredStyle = "none";

  // Retrieve elements for both groups
  const watchers = watcherIds.map((id) =>
    document.getElementById(`second${id}`)
  );
  const matchers = matcherIds.map((id) =>
    document.getElementById(`second${id}`)
  );

  // Check if all watchers have the desired style
  const allWatchersMatch = watchers.every(
    (element) =>
      window.getComputedStyle(element).display === watcherDesiredStyle
  );

  // Check if all matchers have the desired style
  const allMatchersMatch = matchers.every(
    (element) =>
      window.getComputedStyle(element).display === matcherDesiredStyle
  );

  // If both groups match their desired styles, perform the action
  if (allWatchersMatch && allMatchersMatch) {
    console.log("All watchers and matchers have the desired display styles.");

    // Apply the "opaque" class to both groups
    [...watcherIds, ...matcherIds].forEach((id) => {
      document.getElementById(`second${id}`).classList.add("opaque");
      const firstElement = document.getElementById(`first${id}`);
      if (firstElement) {
        firstElement.classList.add("opaque");
        remove();
        changeThree();
      }
    });
  } else {
    console.log("The display styles do not match the desired styles.");
  }
}

function remove() {
  document.getElementById("secondCarrot").setAttribute("onclick", "");
  document.getElementById("secondGreen").setAttribute("onclick", "");
  document.getElementById("secondParsnip").setAttribute("onclick", "");
  document.getElementById("secondCorn").setAttribute("onclick", "");
  document.getElementById("secondHot").setAttribute("onclick", "");
  document.getElementById("secondCheese").setAttribute("onclick", "");
  document.getElementById("secondGarlic").setAttribute("onclick", "");
  document.getElementById("secondBok").setAttribute("onclick", "");
  document.getElementById("secondPotato").setAttribute("onclick", "");
  document.getElementById("secondSquash").setAttribute("onclick", "");
  document.querySelectorAll("audio").forEach((el) => el.pause());
  //
  document.getElementById("firstParsnip").setAttribute("onclick", "");
  document.getElementById("firstCorn").setAttribute("onclick", "");
  document.getElementById("firstPotato").setAttribute("onclick", "");
  document.getElementById("firstSquash").setAttribute("onclick", "");
  //
  document.getElementById("tb1").setAttribute("onclick", "");
  document.getElementById("tb2").setAttribute("onclick", "");
  document.getElementById("tb3").setAttribute("onclick", "");
  document.getElementById("tb4").setAttribute("onclick", "");
  document.getElementById("tb5").setAttribute("onclick", "");
  document.getElementById("tb6").setAttribute("onclick", "");
}

function changeBack() {
  backgroundMusic.pause(); // Pause the audio
  setCookie("musicPlaybackState", "paused"); // Update the playback state cookie
  setCookie("musicCurrentTime", backgroundMusic.currentTime); // Save the current time
  document.getElementById("myDiv").style.backgroundImage =
    "url(animations/s1.png)";
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s2.png)";
  }, 200);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s3.png)";
  }, 300);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s4.png)";
  }, 400);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s4.png)";
  }, 500);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s5.png)";
  }, 600);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s6.png)";
  }, 700);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s7.png)";
  }, 800);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s8.png)";
  }, 900);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s9.png)";
  }, 1000);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s10.png)";
  }, 1100);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s11.png)";
  }, 1200);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s12.png)";
  }, 1300);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s13.png)";
  }, 1400);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s14.png)";
  }, 1500);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s15.png)";
  }, 1600);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s16.png)";
  }, 1700);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s17.png)";
  }, 1800);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s18.png)";
  }, 1900);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s19.png)";
  }, 2000);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s20.png)";
  }, 2100);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s22.png)";
  }, 2200);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s23.png)";
  }, 2300);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(animations/s24.png)";
  }, 2400);
  setTimeout(function () {
    showModal2();
  }, 4000);
}
