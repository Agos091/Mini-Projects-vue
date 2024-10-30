<template>
  <div>
    <section class="score">
      <span class="player"> 🤖Player: {{ winCount }}</span>
      <span class="separator"> | </span>
      <span class="computer">💻Computer: {{ loseCount }}</span>
    </section>
  </div>
</template>

<script>
export default {
  props: ["winCount", "loseCount"],
};
</script>

<style scoped>
@font-face {
  font-family: "MightySouly";
  src: url("@/assets/fonts/MightySouly-lxggD.ttf") format("truetype");
}

.score {
  font-family: "MightySouly", Arial, sans-serif;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.player {
  color: #0077ff;
  font-weight: bold;
}

.computer {
  color: #f44336;
  font-weight: bold;
}

.separator {
  color: #e0e0e0;
  margin: 0 15px;
  font-size: 1.3rem;
}
</style>
