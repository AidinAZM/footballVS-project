const PLAYERS = [
  {
    id: 1,
    playerName: "Lionel Messi",
    playerImage: "./Messi.jpg",
    playerCountry: "Argentina",
    playerCountryImage: "./Argentina_flag.png",
    playerPosition: "RW",
    playerClub: "Inter Miami",
    playerClubImage: "./Inter_Miami_logo.jpg",
    playerClubGoals: 508,
    playerAge: 36,
    playerCups: 9, //This need to be FIXED.
    playerNationalGoals: 104,
    numOfWorldCupAttends: 5,
    playerHeightCM: 170,
  },
  {
    id: 2,
    playerName: "Cristiano Ronaldo",
    playerImage: "./Ronaldo.jpg",
    playerCountry: "Portugal",
    playerCountryImage: "./Portugal_flag.png",
    playerPosition: "CF",
    playerClub: "Al-Nassr",
    playerClubImage: "./Al_Nassr_logo.png",
    playerClubGoals: 522,
    playerAge: 38,
    playerCups: 7,
    playerNationalGoals: 123,
    numOfWorldCupAttends: 5,
    playerHeightCM: 187,
  },
  {
    id: 3,
    playerName: "Kylian Mbappe",
    playerImage: "./Mbappe.jpg",
    playerCountry: "France",
    playerCountryImage: "./France_flag.png",
    playerPosition: "CF",
    playerClub: "PSG",
    playerClubImage: "./PSG.png",
    playerClubGoals: 175,
    playerAge: 24,
    playerCups: 3,
    playerNationalGoals: 40,
    numOfWorldCupAttends: 2,
    playerHeightCM: 178,
  },
  {
    id: 4,
    playerName: "Neymar Jr.",
    playerImage: "./Neymar.jpg",
    playerCountry: "Brazil",
    playerCountryImage: "./Brazil_flag.png",
    playerPosition: "CF",
    playerClub: "Al-Hilal",
    playerClubImage: "./Al_Hilal.png",
    playerClubGoals: 257,
    playerAge: 31,
    playerCups: 5,
    playerNationalGoals: 79,
    numOfWorldCupAttends: 3,
    playerHeightCM: 175,
  },
  {
    id: 5,
    playerName: "Ali Shiralinia",
    playerImage: "./ShirAli.jpg",
    playerCountry: "Iran",
    playerCountryImage: "./Iran_flag.png",
    playerPosition: "CF",
    playerClub: "Ac Milan",
    playerClubImage: "./AC_Milan.png",
    playerClubGoals: 15,
    playerAge: 22,
    playerCups: 0,
    playerNationalGoals: 0,
    numOfWorldCupAttends: 0,
    playerHeightCM: 170,
  },
  {
    id: 6,
    playerName: "Harry Kane",
    playerImage: "./Kane.jpg",
    playerCountry: "England",
    playerCountryImage: "./England_flag.png",
    playerPosition: "CF",
    playerClub: "Bayern Munich",
    playerClubImage: "./Bayern_Munich_logo.png",
    playerClubGoals: 235,
    playerAge: 30,
    playerCups: 2,
    playerNationalGoals: 59,
    numOfWorldCupAttends: 2,
    playerHeightCM: 188,
  },
  {
    id: 7,
    playerName: "Kevin De Bruyne",
    playerImage: "./DeBruyne.jpg",
    playerCountry: "Belgium",
    playerCountryImage: "./Belgium_flag.png",
    playerPosition: "MF",
    playerClub: "Manchester City",
    playerClubImage: "./Manchester_City_logo.png",
    playerClubGoals: 103,
    playerAge: 32,
    playerCups: 1,
    playerNationalGoals: 26,
    numOfWorldCupAttends: 3,
    playerHeightCM: 181,
  },
  {
    id: 8,
    playerName: "Robert Lewandowski",
    playerImage: "./Lewandowski.jpg",
    playerCountry: "Poland",
    playerCountryImage: "./Poland_flag.png",
    playerPosition: "CF",
    playerClub: "Barcelona",
    playerClubImage: "./Barcelona_logo.png",
    playerClubGoals: 420,
    playerAge: 35,
    playerCups: 3,
    playerNationalGoals: 81,
    numOfWorldCupAttends: 2,
    playerHeightCM: 185,
  },
  {
    id: 9,
    playerName: "Antoine Griezmann",
    playerImage: "./Griezmann.jpg",
    playerCountry: "France",
    playerCountryImage: "./France_flag.png",
    playerPosition: "CF",
    playerClub: "Athletico Madrid",
    playerClubImage: "./Athletico_logo.png",
    playerClubGoals: 184,
    playerAge: 32,
    playerCups: 2,
    playerNationalGoals: 44,
    numOfWorldCupAttends: 3,
    playerHeightCM: 176,
  },
  {
    id: 10,
    playerName: "Mohammed Salah",
    playerImage: "./Salah.png",
    playerCountry: "Egypt",
    playerCountryImage: "./Egypt_flag.png",
    playerPosition: "CF",
    playerClub: "Liverpool",
    playerClubImage: "./Liverpool_logo.png",
    playerClubGoals: 199,
    playerAge: 31,
    playerCups: 1,
    playerNationalGoals: 51,
    numOfWorldCupAttends: 1,
    playerHeightCM: 175,
  },
  {
    id: 11,
    playerName: "N'Golo Kante",
    playerImage: "./Kante.jpg",
    playerCountry: "France",
    playerCountryImage: "./France_flag.png",
    playerPosition: "MF",
    playerClub: "Al Ittihad",
    playerClubImage: "./Al_Ittihad_logo.png",
    playerClubGoals: 20,
    playerAge: 32,
    playerCups: 1,
    playerNationalGoals: 2,
    numOfWorldCupAttends: 1,
    playerHeightCM: 171,
  },
  {
    id: 12,
    playerName: "Sergio Aguero",
    playerImage: "./Aguero.jpg",
    playerCountry: "Argentina",
    playerCountryImage: "./Argentina_flag.png",
    playerPosition: "CF",
    playerClub: "Manchester City (As Known For)",
    playerClubImage: "./Manchester_City_logo.png",
    playerClubGoals: 282,
    playerAge: 35,
    playerCups: 3,
    playerNationalGoals: 41,
    numOfWorldCupAttends: 3,
    playerHeightCM: 175,
  },
  {
    id: 13,
    playerName: "Sadio Mane",
    playerImage: "./Mane.jpg",
    playerCountry: "Senegal",
    playerCountryImage: "./Senegal_flag.png",
    playerPosition: "RW",
    playerClub: "Al Nassr",
    playerClubImage: "./Al_Nassr_logo.png",
    playerClubGoals: 159,
    playerAge: 28,
    playerCups: 2,
    playerNationalGoals: 37,
    numOfWorldCupAttends: 1,
    playerHeightCM: 174,
  },
  {
    id: 14,
    playerName: "Romelu Lukaku",
    playerImage: "./Lukaku.jpg",
    playerCountry: "Belgium",
    playerCountryImage: "./Belgium_flag.png",
    playerPosition: "CF",
    playerClub: "Roma",
    playerClubImage: "./Roma_logo.png",
    playerClubGoals: 216,
    playerAge: 30,
    playerCups: 1,
    playerNationalGoals: 77,
    numOfWorldCupAttends: 3,
    playerHeightCM: 185,
  },
  {
    id: 15,
    playerName: "Sergio Ramos",
    playerImage: "./Ramos.jpg",
    playerCountry: "Spain",
    playerCountryImage: "./Spain_flag.png",
    playerPosition: "CB",
    playerClub: "Sevilla",
    playerClubImage: "./Sevilla_logo.png",
    playerClubGoals: 80,
    playerAge: 36,
    playerCups: 7,
    playerNationalGoals: 23,
    numOfWorldCupAttends: 4,
    playerHeightCM: 184,
  },
  {
    id: 16,
    playerName: "Virgil van Dijk",
    playerImage: "./Van_Dijk.jpg",
    playerCountry: "Netherlands",
    playerCountryImage: "./Netherlands_flag.png",
    playerPosition: "CB",
    playerClub: "Liverpool",
    playerClubImage: "./Liverpool_logo.png",
    playerClubGoals: 36,
    playerAge: 32,
    playerCups: 4,
    playerNationalGoals: 6,
    numOfWorldCupAttends: 1,
    playerHeightCM: 195,
  },
  {
    id: 17,
    playerName: "Gareth Bale",
    playerImage: "./Bale.jpg",
    playerCountry: "Wales",
    playerCountryImage: "./Wales_flag.png",
    playerPosition: "LW",
    playerClub: "Los Angeles FC",
    playerClubImage: "./Los_Angeles_logo.png",
    playerClubGoals: 141,
    playerAge: 34,
    playerCups: 4,
    playerNationalGoals: 41,
    numOfWorldCupAttends: 1,
    playerHeightCM: 183,
  },
  {
    id: 18,
    playerName: "Luka Modrić",
    playerImage: "./Modric.jpg",
    playerCountry: "Croatia",
    playerCountryImage: "./Croatia_flag.png",
    playerPosition: "CM",
    playerClub: "Real Madrid",
    playerClubImage: "./Real_Madrid_logo.png",
    playerClubGoals: 77,
    playerAge: 37,
    playerCups: 4,
    playerNationalGoals: 24,
    numOfWorldCupAttends: 4,
    playerHeightCM: 172,
  },
  {
    id: 19,
    playerName: "Eden Hazard",
    playerImage: "./Hazard.jpg",
    playerCountry: "Belgium",
    playerCountryImage: "./Belgium_flag.png",
    playerPosition: "LW",
    playerClub: "Real Madrid",
    playerClubImage: "./Real_Madrid_logo.png",
    playerClubGoals: 125,
    playerAge: 32,
    playerCups: 5,
    playerNationalGoals: 33,
    numOfWorldCupAttends: 2,
    playerHeightCM: 175,
  },
  {
    id: 20,
    playerName: "Joshua Kimmich",
    playerImage: "./Kimmich.jpg",
    playerCountry: "Germany",
    playerCountryImage: "./Germany_flag.png",
    playerPosition: "CDM",
    playerClub: "Bayern Munich",
    playerClubImage: "./Bayern_Munich_logo.png",
    playerClubGoals: 28,
    playerAge: 28,
    playerCups: 3,
    playerNationalGoals: 6,
    numOfWorldCupAttends: 2,
    playerHeightCM: 176,
  },
  {
    id: 21,
    playerName: "Toni Kroos",
    playerImage: "./Kroos.jpg",
    playerCountry: "Germany",
    playerCountryImage: "./Germany_flag.png",
    playerPosition: "CM",
    playerClub: "Real Madrid",
    playerClubImage: "./Real_Madrid_logo.png",
    playerClubGoals: 49,
    playerAge: 33,
    playerCups: 4,
    playerNationalGoals: 17,
    numOfWorldCupAttends: 3,
    playerHeightCM: 183,
  },
  {
    id: 22,
    playerName: "Paul Pogba",
    playerImage: "./Pogba.jpg",
    playerCountry: "France",
    playerCountryImage: "./France_flag.png",
    playerPosition: "CM",
    playerClub: "Juventus",
    playerClubImage: "./Juventus_logo.png",
    playerClubGoals: 57,
    playerAge: 30,
    playerCups: 4,
    playerNationalGoals: 11,
    numOfWorldCupAttends: 2,
    playerHeightCM: 191,
  },
  {
    id: 23,
    playerName: "Erling Haaland",
    playerImage: "./Haaland.jpg",
    playerCountry: "Norway",
    playerCountryImage: "./Norway_flag.png",
    playerPosition: "CF",
    playerClub: "Manchester City",
    playerClubImage: "./Manchester_City_logo.png",
    playerClubGoals: 157,
    playerAge: 23,
    playerCups: 2,
    playerNationalGoals: 25,
    numOfWorldCupAttends: 0,
    playerHeightCM: 194,
  },
  {
    id: 24,
    playerName: "Bruno Fernandes",
    playerImage: "./Fernandes.jpg",
    playerCountry: "Portugal",
    playerCountryImage: "./Portugal_flag.png",
    playerPosition: "MF",
    playerClub: "Manchester United",
    playerClubImage: "./Man_United_logo.png",
    playerClubGoals: 104,
    playerAge: 29,
    playerCups: 3,
    playerNationalGoals: 17,
    numOfWorldCupAttends: 2,
    playerHeightCM: 179,
  },
  {
    id: 25,
    playerName: "Raheem Sterling",
    playerImage: "./Sterling.jpg",
    playerCountry: "England",
    playerCountryImage: "./England_flag.png",
    playerPosition: "LW",
    playerClub: "Chelsea",
    playerClubImage: "./Chelsea_logo.png",
    playerClubGoals: 118,
    playerAge: 28,
    playerCups: 4,
    playerNationalGoals: 20,
    numOfWorldCupAttends: 3,
    playerHeightCM: 172,
  },
  {
    id: 26,
    playerName: "Marco Reus",
    playerImage: "./Reus.jpg",
    playerCountry: "Germany",
    playerCountryImage: "./Germany_flag.png",
    playerPosition: "MF",
    playerClub: "Borussia Dortmund",
    playerClubImage: "./Dortmund_logo.png",
    playerClubGoals: 161,
    playerAge: 34,
    playerCups: 4,
    playerNationalGoals: 15,
    numOfWorldCupAttends: 1,
    playerHeightCM: 180,
  },
  {
    id: 27,
    playerName: "Jadon Sancho",
    playerImage: "./Sancho.jpg",
    playerCountry: "England",
    playerCountryImage: "./England_flag.png",
    playerPosition: "LF",
    playerClub: "Manchester United",
    playerClubImage: "./Man_United_logo.png",
    playerClubGoals: 47,
    playerAge: 23,
    playerCups: 2,
    playerNationalGoals: 3,
    numOfWorldCupAttends: 0,
    playerHeightCM: 180,
  },
  {
    id: 28,
    playerName: "Frenkie de Jong",
    playerImage: "./De_Jong.jpg",
    playerCountry: "Netherlands",
    playerCountryImage: "./Netherlands_flag.png",
    playerPosition: "CM",
    playerClub: "Barcelona",
    playerClubImage: "./Barcelona_logo.png",
    playerClubGoals: 23,
    playerAge: 26,
    playerCups: 2,
    playerNationalGoals: 2,
    numOfWorldCupAttends: 1,
    playerHeightCM: 181,
  },
];

function getPlayerData(id) {
  let playerData = PLAYERS.find((player) => player.id === id);
  return playerData;
}
export { PLAYERS, getPlayerData };
