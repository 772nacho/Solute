let planning = document.querySelector('.planning');
let growing = document.querySelector('.growing');
let team = document.querySelector('.team');

let counterStarted = false;

window.addEventListener("scroll", () => {
  if (scrollY >= 1100 && !counterStarted) {
    counterStarted = true;

    let planningCount = 0;
    let growingCount = 0;
    let teamCount = 0;

    let interval = setInterval(() => {
      if (planningCount <= 15) {
        planning.innerHTML = planningCount + "k+";
        planningCount++;
      }
      if (growingCount <= 45) {
        growing.innerHTML = growingCount + "k";
        growingCount++;
      }
      if (teamCount <= 23) {
        team.innerHTML = teamCount + "+";
        teamCount++;
      }

      if (planningCount > 15 && growingCount > 45 && teamCount > 23) {
        clearInterval(interval);
      }
    }, 50);
  } 
});