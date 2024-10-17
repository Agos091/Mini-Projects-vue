async function getSpotifyToken() {
  const clientId = "bda763f02206462db553896d3e4dbd59";
  const clientSecret = "9c0847eb0e3946c5af677a431b4b1bf0";

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });
  const data = await response.json();
  return data.access_token;
}

async function searchSongs(songName) {
  const token = await getSpotifyToken();
  const query = encodeURIComponent(songName.trim());
  if (!query) {
    console.error("O nome da música está vazio.");
    return null;
  }
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${songName}&type=track`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await response.json();
  if (data.tracks && data.tracks.items.length > 0) {
    return data.tracks.items[0];
  } else {
    console.log("Nenhuma música encontrada.");
    return null;
  }
}

const handlingForms = {
  data() {
    return {
      songName: "", // Nome da música que o usuário digita
      songInfo: null, // Informações da música
    };
  },
  methods: {
    async searchASong() {
      if (this.songName.trim() === "") {
        console.error("O nome da música não pode estar vazio.");
        alert("Por favor, insira o nome de uma música para buscar.");
        return;
      }

      try {
        const song = await searchSongs(this.songName);
        if (song) {
          this.songInfo = song;
        } else {
          console.log("Nenhuma música encontrada.");
        }
      } catch (error) {
        console.error("Erro ao buscar a música:", error);
      }
    },
  },
};

Vue.createApp(handlingForms).mount("#app");