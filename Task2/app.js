function luck() {
    let name = document.getElementById("username").value;
    let a = Math.round(Math.random() * 100);
    document.getElementById("luck").innerText = name + "'s Lucky Number Is: " + a;
  }
