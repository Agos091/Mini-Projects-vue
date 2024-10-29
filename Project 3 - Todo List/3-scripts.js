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
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } else {
        alert("To-do text is required");
      }
    },
  },
  created() {
    this.todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
  },
  watch: {
    todos: {
      handler(updatedTodos) {
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
      },
      deep: true,
    },
  },
};

Vue.createApp(todosApp).mount("#app");
