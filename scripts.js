/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


const players = [
  {
    name: "Aaron Judge",
    team: "New York Yankees",
    position: "RF",
    games: 158,
    homeRuns: 58,
    rbi: 144,
    battingAvg: 0.322,
    stolenBases: 10,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/592450/headshot/67/current"
  },
  {
    name: "Shohei Ohtani",
    team: "Los Angeles Dodgers",
    position: "DH",
    games: 159,
    homeRuns: 44,
    rbi: 96,
    battingAvg: 0.310,
    stolenBases: 59,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/660271/headshot/67/current"
  },
  {
    name: "Bobby Witt Jr.",
    team: "Kansas City Royals",
    position: "SS",
    games: 159,
    homeRuns: 32,
    rbi: 99,
    battingAvg: 0.332,
    stolenBases: 31,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/677951/headshot/67/current"
  }
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards(players) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < players.length; i++) {
    let player= players[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, player); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, player) {
  card.style.display = "block";

  card.querySelector("h2").textContent = player.name;
  card.querySelector(".team").textContent = player.team;
  card.querySelector(".position").textContent = player.position;
  card.querySelector(".hr").textContent = "HR: " + player.homeRuns;
  card.querySelector(".avg").textContent = "AVG: " +  player.battingAvg;
  card.querySelector(".rbi").textContent = "RBI: " + player.rbi;
  card.querySelector(".sb").textContent = "SB: " +  player.stolenBases;

  const img = card.querySelector("img");
  img.src = player.image;
  img.alt = player.name + " headshot";
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function () {
  showCards(players);
});
function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
