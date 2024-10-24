const todosApp = {
  data() {
    return {
      todos: [],
      newTodo: {
        done: false,
      },
    };
  },
  methods: {
    addWork: function () {
      if (this.newTodo.text) {
        this.todos.push({
          work: this.newTodo.text,
          done: false,
        });
        this.newTodo.text = "";
      } else {
        alert("To-do text is required");
      }
    },
  },
};
Vue.createApp(todosApp).mount("#app");
