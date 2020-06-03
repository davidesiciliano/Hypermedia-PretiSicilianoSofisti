document.getElementById("timeline0").addEventListener("click", () => {
  selectActive("timeline0");
});

document.getElementById("timeline1").addEventListener("click", () => {
  selectActive("timeline1");
});

document.getElementById("timeline2").addEventListener("click", () => {
  selectActive("timeline2");
});

document.getElementById("timeline3").addEventListener("click", () => {
  selectActive("timeline3");
});

document.getElementById("timeline4").addEventListener("click", () => {
  selectActive("timeline4");
});

document.getElementById("timeline5").addEventListener("click", () => {
  selectActive("timeline5");
});

document.getElementById("timeline6").addEventListener("click", () => {
  selectActive("timeline6");
});

document.getElementById("timeline7").addEventListener("click", () => {
  selectActive("timeline7");
});

document.getElementById("timeline8").addEventListener("click", () => {
  selectActive("timeline8");
});

document.getElementById("timeline9").addEventListener("click", () => {
  selectActive("timeline9");
});

function selectActive(selected) {
  let input = ["timeline0", "timeline1", "timeline2", "timeline3", "timeline4",
    "timeline5", "timeline6", "timeline7", "timeline8", "timeline9"];
  let description = ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9"];
  var found = false;
  for (var i = 0; i < input.length; i++) {
    if (!found) {
      document.getElementById(input[i]).classList.add("fill");
    } else {
      document.getElementById(input[i]).classList.remove("fill");
    }

    if (selected === input[i]) {
      found = true;
      document.getElementById(input[i]).classList.add("active");
      document.getElementById(description[i]).classList.add("active");
    } else {
      document.getElementById(input[i]).classList.remove("active");
      document.getElementById(description[i]).classList.remove("active");
    }
  }
}
