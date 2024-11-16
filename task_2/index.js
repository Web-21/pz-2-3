document.addEventListener("DOMContentLoaded", () => {
    const statusButton = document.getElementById("statusButton");
  
    const states = [
      { text: "Update", class: "update" },
      { text: "Delete", class: "delete" },
      { text: "Pending", class: "pending" },
    ];
  
    let currentStateIndex = 0;
  
    statusButton.addEventListener("click", () => {
      
      currentStateIndex = (currentStateIndex + 1) % states.length;
      const newState = states[currentStateIndex];
  
      
      statusButton.textContent = newState.text;
      statusButton.className = `btn ${newState.class}`;
    });
  });
  