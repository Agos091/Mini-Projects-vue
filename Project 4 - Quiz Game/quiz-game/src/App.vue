<template>
  <div id="app">
    <ScoreBoard :win-Count="winCount" :lose-Count="loseCount" />
    <h1 v-html="question"></h1>
    <div v-for="(answer, index) in answers" :key="index" class="radio-wrapper">
      <input
        type="radio"
        :id="'option' + index"
        class="tgl"
        :name="question"
        :value="answer"
        :disabled="answerSubmitted"
        v-model="chosenAnswer"
      />
      <label v-html="answer" :for="'option' + index" class="tgl-btn"></label>
    </div>
    <button
      v-if="!answerSubmitted"
      @click="submitAnswer"
      class="send"
      type="button"
    >
      Send
    </button>
    <section v-if="answerSubmitted" class="result">
      <h4
        v-if="chosenAnswer == correctAnswers"
        v-html="'&#9989; Correct!'"
      ></h4>
      <h4 v-else v-html="'&#10060; Incorrect!'"></h4>
      <button @click="getNewQuestion" class="send" type="button">
        Next question
      </button>
    </section>
  </div>
</template>

<script>
import ScoreBoard from "@/components/ScoreBoard.vue";
import axios from "axios";

export default {
  name: "App",
  components: { ScoreBoard },
  data() {
    return {
      question: undefined,
      correctAnswers: "",
      incorrectAnswers: [],
      chosenAnswer: "",
      answerSubmitted: false,
      winCount: 0,
      loseCount: 0,
    };
  },
  computed: {
    answers() {
      return [...this.incorrectAnswers, this.correctAnswers].sort(
        () => Math.random() - 0.5
      );
    },
  },
  methods: {
    submitAnswer() {
      this.answerSubmitted = true;
      if (this.chosenAnswer === this.correctAnswers) this.winCount++;
      else this.loseCount++;
    },
    getNewQuestion() {
      this.answerSubmitted = false;
      this.chosenAnswer = "";
      axios
        .get("https://opentdb.com/api.php?amount=1&category=15&type=multiple")
        .then((response) => {
          const data = response.data.results[0];
          this.question = data.question;
          this.correctAnswers = data.correct_answer;
          this.incorrectAnswers = data.incorrect_answers;
        });
    },
  },
  created() {
    this.getNewQuestion();
  },
};
</script>

<style scoped>
@font-face {
  font-family: "MightySouly";
  src: url("@/assets/fonts/MightySouly-lxggD.ttf") format("truetype");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  font-family: "MightySouly", Arial, sans-serif;
  overflow: hidden;
  background: linear-gradient(135deg, #282c34, #1c1c1c);
}

#app {
  font-family: "MightySouly", Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #e0e0e0;
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: #000000;
  max-width: 90%;
}

.radio-wrapper {
  margin: 12px 0;
  display: flex;
  justify-content: center;
  width: 100%;
}

.tgl {
  display: none;
}

.tgl + .tgl-btn {
  font-family: "MightySouly", Arial, sans-serif;
  font-size: 1rem;
  background-color: #3a3a3a;
  color: #e0e0e0;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease, transform 0.2s ease;
  width: 260px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}

.tgl:checked + .tgl-btn {
  background-color: #4caf50;
  color: #fff;
  transform: scale(1.05);
}

.send {
  font-family: "MightySouly", Arial, sans-serif;
  background: #4caf50;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.3s;
  margin-top: 15px;
  width: 200px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}

.send:hover {
  background: #45a049;
}

.result h4 {
  font-size: 1.2rem;
  color: #000000;
  margin: 20px 0;
}
</style>
