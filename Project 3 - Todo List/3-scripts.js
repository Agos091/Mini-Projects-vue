var todos = [
  {
    work: "teste",
    done: true,
  },
  {
    work: "Salve",
    done: true,
  },
  {
    work: "top",
    done: false,
  },
];
const todosApp = {
  data() {
    return {
      todos: window.todos,
      newTodo: {},
    };
  },
};
Vue.createApp(todosApp).mount("#app");
