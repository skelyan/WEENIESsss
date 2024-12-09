console.log("Preload running...");

// loop through all the content you want to preload
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images and sounds
preload(
  "animations/s1.png",
  "animations/s2.png",
  "animations/s3.png",
  "animations/s4.png",
  "animations/s5.png",
  "animations/s6.png",
  "animations/s7.png",
  "animations/s8.png",
  "animations/s9.png",
  "animations/s10.png",
  "animations/s11.png",
  "animations/s12.png",
  "animations/s13.png",
  "animations/s14.png",
  "animations/s15.png",
  "animations/s16.png",
  "animations/s17.png",
  "animations/s18.png",
  "animations/s19.png",
  "animations/s20.png",
  "animations/s21.png",
  "animations/s22.png",
  "animations/s23.png",
  "animations/s24.png"
);
