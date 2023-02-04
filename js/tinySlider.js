import "/node_modules/tiny-slider/dist/tiny-slider.css";
import "../css/tinySliderOveride.css";
import { tns } from "tiny-slider";

var slider = tns({
  container: "#tetomorial-slider",
  items: 1,
  slideBy: "page",
  mouseDrag: true,
  swipeAngle: false,
  autoplay: false,
  speed: 1000,
  edgePadding: 10,
  gutter: 15,
  controls: true,
  controlsPosition: "bottom",
  controlsText: ["p", "n"],
  prevButton: "#prev",
  nextButton: "#next",
  // controlsContainer: "working well",
  nav: false,
  touch: true,
});
