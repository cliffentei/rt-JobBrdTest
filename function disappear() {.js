function disappear() {
  const deleteMe = document.getElementById("toDelete");
  if (deleteMe) deleteMe.classList.add("opposite-loading-effect");
  decreaseBtn.classList.add("opposite-loading-effect");
  decreaseBtn2.classList.add("opposite-loading-effect");
  increaseBtn.classList.add("opposite-loading-effect");
  increaseBtn2.classList.add("opposite-loading-effect");
  const dots = document.querySelectorAll(".random-div");
  dots.forEach((div) => {
    div.classList.add("opposite-loading-effect");
  });
}

function removeAnimationClasses() {
  dotSpinner.classList.remove("hidden");
  const deleteMe = document.getElementById("toDelete");
  if (deleteMe) deleteMe.remove();
  decreaseBtn.classList.remove("show");
  decreaseBtn2.classList.remove("show");
  increaseBtn.classList.remove("show");
  increaseBtn2.classList.remove("show");
  decreaseBtn.classList.remove("opposite-loading-effect");
  decreaseBtn2.classList.remove("opposite-loading-effect");
  increaseBtn.classList.remove("opposite-loading-effect");
  increaseBtn2.classList.remove("opposite-loading-effect");
  const dots = document.querySelectorAll(".random-div");
  dots.forEach((div) => {
    div.remove();
  });
}
