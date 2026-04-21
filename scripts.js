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
  },
  {
    name: "Juan Soto",
    team: "New York Yankees",
    position: "RF",
    games: 157,
    homeRuns: 41,
    rbi: 109,
    battingAvg: 0.288,
    stolenBases: 7,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/665742/headshot/67/current"
  },
  {
    name: "Jose Ramirez",
    team: "Cleveland Guardians",
    position: "3B",
    games: 156,
    homeRuns: 39,
    rbi: 121,
    battingAvg: 0.282,
    stolenBases: 17,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/608070/headshot/67/current"
  },
  {
    name: "Marcell Ozuna",
    team: "Atlanta Braves",
    position: "DH",
    games: 143,
    homeRuns: 39,
    rbi: 103,
    battingAvg: 0.301,
    stolenBases: 3,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/542303/headshot/67/current"
  },
  {
    name: "Gunnar Henderson",
    team: "Baltimore Orioles",
    position: "SS",
    games: 157,
    homeRuns: 37,
    rbi: 99,
    battingAvg: 0.281,
    stolenBases: 16,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/683002/headshot/67/current"
  },
  {
    name: "Ketel Marte",
    team: "Arizona Diamondbacks",
    position: "2B",
    games: 155,
    homeRuns: 36,
    rbi: 97,
    battingAvg: 0.271,
    stolenBases: 9,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/606466/headshot/67/current"
  },
  {
    name: "Pete Alonso",
    team: "New York Mets",
    position: "1B",
    games: 157,
    homeRuns: 34,
    rbi: 88,
    battingAvg: 0.240,
    stolenBases: 0,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/624413/headshot/67/current"
  },
  {
    name: "Teoscar Hernandez",
    team: "Los Angeles Dodgers",
    position: "RF",
    games: 152,
    homeRuns: 33,
    rbi: 99,
    battingAvg: 0.272,
    stolenBases: 10,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/606192/headshot/67/current"
  },
  {
    name: "Francisco Lindor",
    team: "New York Mets",
    position: "SS",
    games: 162,
    homeRuns: 33,
    rbi: 97,
    battingAvg: 0.273,
    stolenBases: 5,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/596019/headshot/67/current"
  },
  {
    name: "Willy Adames",
    team: "Milwaukee Brewers",
    position: "SS",
    games: 155,
    homeRuns: 32,
    rbi: 93,
    battingAvg: 0.251,
    stolenBases: 5,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/642715/headshot/67/current"
  },
  {
    name: "Yordan Alvarez",
    team: "Houston Astros",
    position: "DH",
    games: 134,
    homeRuns: 31,
    rbi: 99,
    battingAvg: 0.288,
    stolenBases: 2,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/670541/headshot/67/current"
  },
  {
    name: "Vladimir Guerrero Jr.",
    team: "Toronto Blue Jays",
    position: "1B",
    games: 160,
    homeRuns: 30,
    rbi: 103,
    battingAvg: 0.323,
    stolenBases: 3,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/665489/headshot/67/current"
  },
  {
    name: "Bryce Harper",
    team: "Philadelphia Phillies",
    position: "1B",
    games: 145,
    homeRuns: 30,
    rbi: 85,
    battingAvg: 0.290,
    stolenBases: 3,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/547180/headshot/67/current"
  },
  {
    name: "Julio Rodriguez",
    team: "Seattle Mariners",
    position: "CF",
    games: 148,
    homeRuns: 28,
    rbi: 82,
    battingAvg: 0.269,
    stolenBases: 19,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/683076/headshot/67/current"
  },
  {
    name: "Corey Seager",
    team: "Texas Rangers",
    position: "SS",
    games: 136,
    homeRuns: 24,
    rbi: 93,
    battingAvg: 0.273,
    stolenBases: 3,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/608369/headshot/67/current"
  },
  {
    name: "Freddie Freeman",
    team: "Los Angeles Dodgers",
    position: "1B",
    games: 159,
    homeRuns: 22,
    rbi: 89,
    battingAvg: 0.282,
    stolenBases: 9,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/518692/headshot/67/current"
  },
  {
    name: "Jarren Duran",
    team: "Boston Red Sox",
    position: "CF",
    games: 141,
    homeRuns: 21,
    rbi: 78,
    battingAvg: 0.285,
    stolenBases: 13,
    image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/680776/headshot/67/current"
  }
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.
let sortAscending = false;
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

function filterByTeam() {
  const selectedTeam = document.getElementById("team-filter").value;

  if (selectedTeam === "All") {
    showCards(players);
  } else {
    const filtered = players.filter(function (player) {
      return player.team === selectedTeam;
    });
    showCards(filtered);
  }
}


  function sortByHomeRuns() {            
    //make copy of the list, then sort list   
    sortAscending = !sortAscending                                                                                                                                                                                              
                                                                                                                                                                                                                                       
    const sorted = [...players].sort(function (a, b) {                                                                                                                                                                                 
      if (sortAscending) {
        return a.homeRuns - b.homeRuns;
      } else {
        return b.homeRuns - a.homeRuns;
      }
    });

    if (sortAscending) {
      document.getElementById("sort-btn-hr").textContent = "Sort by HR: Most";
    } else {
      document.getElementById("sort-btn-hr").textContent = "Sort by HR: Least";
    }

    showCards(sorted);
  }

    function sortByRBIs() {            
    //make copy of the list, then sort list   
    sortAscending = !sortAscending                                                                                                                                                                                              
                                                                                                                                                                                                                                       
    const sorted = [...players].sort(function (a, b) {                                                                                                                                                                                 
      if (sortAscending) {
        return a.rbi - b.rbi;
      } else {
        return b.rbi - a.rbi;
      }
    });

    if (sortAscending) {
      document.getElementById("sort-btn-rbi").textContent = "Sort by RBI: Most";
    } else {
      document.getElementById("sort-btn-rbi").textContent = "Sort by RBI: Least";
    }

    showCards(sorted);
  }

      function sortBySBs() {            
    //make copy of the list, then sort list   
    sortAscending = !sortAscending                                                                                                                                                                                              
                                                                                                                                                                                                                                       
    const sorted = [...players].sort(function (a, b) {                                                                                                                                                                                 
      if (sortAscending) {
        return a.stolenBases - b.stolenBases;
      } else {
        return b.stolenBases - a.stolenBases;
      }
    });

    if (sortAscending) {
      document.getElementById("sort-btn-sb").textContent = "Sort by Stolen Bases: Most";
    } else {
      document.getElementById("sort-btn-sb").textContent = "Sort by Stolen Bases: Least";
    }

    showCards(sorted);
  }


        function sortByAvgs() {            
    //make copy of the list, then sort list   
    sortAscending = !sortAscending                                                                                                                                                                                              
                                                                                                                                                                                                                                       
    const sorted = [...players].sort(function (a, b) {                                                                                                                                                                                 
      if (sortAscending) {
        return a.battingAvg - b.battingAvg;
      } else {
        return b.battingAvg - a.battingAvg;
      }
    });

    if (sortAscending) {
      document.getElementById("sort-btn-avg").textContent = "Sort by Batting Average: Most";
    } else {
      document.getElementById("sort-btn-avg").textContent = "Sort by Batting Average: Least";
    }

    showCards(sorted);
  }



  function searchPlayers() {
  const query = document.getElementById("search_input").value.toLowerCase();

  const results = players.filter(function (player) {
    return player.name.toLowerCase().includes(query);
  });

  showCards(results);
}