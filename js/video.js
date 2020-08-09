button_play.onclick = function () {
  var sectionVideo = document.querySelector("section.video");
  var Beach_Video = document.createElement("video");
  Beach_Video.setAttribute("src", "Video/Beach.mp4");
  Beach_Video.setAttribute("autoplay", "autoplay");
  Beach_Video.className += "Beach";
  sectionVideo.appendChild(Beach_Video);
  button_play.className = "hidden";
  button_stop.className = "showed";
};
button_stop.onclick = function () {
  var sectionVideo = document.querySelector("section.video");
  var Beach_Video = document.querySelector("video");
  sectionVideo.removeChild(Beach_Video);
  button_play.className = "showed";
  button_stop.className = "hidden";
};
button_menu.onclick = function () {
  var vertical_menu = document.querySelector(".header-top-menu");
  if (vertical_menu.style.display != "block") {
    vertical_menu.style.display = "block";
  } else vertical_menu.style.display = "none";
  if (button_menu.style.transform != "rotate(90deg)") {
    button_menu.style.transform = "rotate(90deg)";
  } else button_menu.style.transform = "rotate(0deg)";
};
