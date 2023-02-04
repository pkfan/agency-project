const redTheme = document.querySelector("#red-theme");
const blueTheme = document.querySelector("#blue-theme");
const greenTheme = document.querySelector("#green-theme");
// input
const changeColor1 = document.querySelector("#change-color1");
const changeColor2 = document.querySelector("#change-color2");
const changeButton = document.querySelector("#change-button");

// settings color to root variable
function setColorsWithRootVariables(colorPalleteObject) {
  let root = document.querySelector(":root");
  root.style.setProperty("--primary", colorPalleteObject.colors.primary);
  root.style.setProperty("--secondary", colorPalleteObject.colors.secondary);
}

redTheme.addEventListener("click", () => {
  setColorsWithRootVariables({
    colors: {
      primary: "#dd2476",
      secondary: "#ff512f",
    },
  });
});
blueTheme.addEventListener("click", () => {
  setColorsWithRootVariables({
    colors: {
      primary: "#270082",
      secondary: "#7A0BC0",
    },
  });
});
greenTheme.addEventListener("click", () => {
  setColorsWithRootVariables({
    colors: {
      primary: "#17ef44",
      secondary: "#817700",
    },
  });
});

let color1 = "";
let color2 = "";

changeColor1.addEventListener("change", (e) => {
  // console.log("chnged...", e.target.value);
  color1 = e.target.value;
});
changeColor2.addEventListener("change", (e) => {
  // console.log("chnged...", e.target.value);
  color2 = e.target.value;
});

changeButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (!(color1.trim() && color2.trim())) {
    alert("please input hex colors, both fields required... ");
    return "error";
  }

  setColorsWithRootVariables({
    colors: {
      primary: color1,
      secondary: color2,
    },
  });
});
