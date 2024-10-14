var products = [
  {
    photo: "img/big-mac.png",
    name: "Krabby Burger",
    price: 5.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/mc-chicken.png",
    name: "Bob Chicken",
    price: 4.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/pizza.png",
    name: "Pizza",
    price: 5.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/fries.png",
    name: "Fries",
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/nuggets.png",
    name: "Nuggets",
    price: 3.49,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/salad.png",
    name: "Salad",
    price: 2.79,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/cola.png",
    name: "Kelp Shake",
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/lipton.png",
    name: "Soda",
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/water.png",
    name: "Water",
    price: 1.49,
    active: false,
    quantity: 1,
  },
];
const SelfServiceMachine = {
  data() {
    return { products: products };
  },
  methods: {
    total: function () {
      var total = 0;
      this.products.forEach(function (item) {
        if (item.active) {
          total += item.price * item.quantity;
        }
      });
      return total;
    },
  },
};

Vue.createApp(SelfServiceMachine).mount("#app");
