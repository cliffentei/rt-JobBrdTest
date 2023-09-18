dotSpinner.classList.remove("hidden");
clearTimeout(timeoutId);
timeoutId = setTimeout(() => {
  //   dotSpinner.classList.add("opposite-craddle-effect");
  setTimeout(() => {
    fetchAllData();
    dotSpinner.classList.add("hidden");
    dotSpinner.classList.remove("opposite-craddle-effect");
  }, 500);
}, 1000);

dotSpinner.classList.remove("hidden");
clearTimeout(timeoutId);
timeoutId = setTimeout(() => {
  setTimeout(() => {
    fetchAllData();
  }, 500);
}, 1000);

clearTimeout(timeoutId);
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
setTimeout(() => {
  dotSpinner.classList.remove("hidden");
  if (deleteMe) deleteMe.remove();
  decreaseBtn.classList.remove("show");
  decreaseBtn2.classList.remove("show");
  increaseBtn.classList.remove("show");
  increaseBtn2.classList.remove("show");
  decreaseBtn.classList.remove("opposite-loading-effect");
  decreaseBtn2.classList.remove("opposite-loading-effect");
  increaseBtn.classList.remove("opposite-loading-effect");
  increaseBtn2.classList.remove("opposite-loading-effect");
  dots.forEach((div) => {
    div.remove();
  });
}, 750);
timeoutId = setTimeout(() => {
  setTimeout(() => {
    fetchAllData();
  }, 500);
}, 1000);
