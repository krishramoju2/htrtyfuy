const players = [
  {
    name: "Virat Kohli",
    image: "assets/player1.jpg",
    stats: {
      "Jersey Number": 18,
      "Matches Played": 260,
      "Strike Rate": "138.3",
      "Best Performance": "94* vs WI"
    }
  },
  {
    name: "MS Dhoni",
    image: "assets/player2.jpg",
    stats: {
      "Jersey Number": 7,
      "Matches Played": 350,
      "Strike Rate": "126.2",
      "Best Performance": "183* vs SL"
    }
  },
  {
    name: "Jasprit Bumrah",
    image: "assets/player3.jpg",
    stats: {
      "Jersey Number": 93,
      "Matches Played": 130,
      "Strike Rate": "None",
      "Best Performance": "6/19 vs WI"
    }
  }
];

const teamDiv = document.getElementById("team");

players.forEach((player, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${player.image}" alt="${player.name}" />
    <h3>${player.name}</h3>
  `;
  card.onclick = () => showModal(player);
  teamDiv.appendChild(card);
});

function showModal(player) {
  document.getElementById("modal-name").textContent = player.name;
  document.getElementById("modal-img").src = player.image;

  const statsList = document.getElementById("modal-stats");
  statsList.innerHTML = "";
  for (let key in player.stats) {
    const li = document.createElement("li");
    li.textContent = `${key}: ${player.stats[key]}`;
    statsList.appendChild(li);
  }

  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
