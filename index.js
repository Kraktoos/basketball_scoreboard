score_home = document.getElementById("score-home");
home_score = 0;
score_guest = document.getElementById("score-guest");
guest_score = 0;

function add_score(team, score) {
  if (team == "home") {
    home_score += score;
    score_home.textContent = home_score;
  } else if (team == "guest") {
    guest_score += score;
    score_guest.textContent = guest_score;
  }
}
