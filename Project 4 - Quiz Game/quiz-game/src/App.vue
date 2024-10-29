<template>
  <div id="app">
    <h1>Ola, Mundo!</h1>
    <input type="radio" name="options" value="True" />
    <label>True</label><br />
    <input type="radio" name="options" value="False" />
    <label>False</label><br />
    <button class="send" type="button" @click="fetchData">Send</button>
    <div v-if="question">
      <h2>{{ question.question }}</h2>
      <p>Category: {{ question.category }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      question: undefined,
      correctAnswers: [],
      incorrectAnswers: [],
    };
  },
  created() {
    this.axios
      .get("https://opentdb.com/api.php?amount=1&category=21")
      .then((response) => {
        this.question = response.data.results[0].question;
        this.correctAnswers = response.data.results[0].correct_answer;
        this.incorrectAnswers = response.data.results[0].incorrect_answers;
      });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
