let states = ["update", "pending", "delete"];

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", function () {
    let btnClassName = button.className;
    button.classList.remove(btnClassName);
    let btnClassIndex = states.indexOf(btnClassName);
    let newBtnClassIndex = 0;
    if (btnClassIndex < 2) {
      newBtnClassIndex = btnClassIndex + 1;
    }
    button.classList.add(states[newBtnClassIndex]);
    button.textContent = states[newBtnClassIndex];
  })
})
