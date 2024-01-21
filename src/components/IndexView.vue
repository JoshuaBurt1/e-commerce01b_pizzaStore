<template>
  <div class="container1">
    <form id="pizzaForm" class="left-aligned-form" @submit.prevent="enterOrder">
      <header class="mb-4">
        <h2 class="header-text">Cult of Personality Pizza</h2>
      </header>

      <!-- Part 3: Pizza options-->
      <div class="mb-3">
        <label for="customerSelect" class="form-label">Enter customer name</label>
        <input type="text" class="form-control" id="customerSelect" v-model="selectedCustomer" placeholder="Enter your name">
      </div>

      <div class="mb-3">
        <label for="sizeSelect" class="form-label">Select Size</label>
        <select class="form-select" v-model="selectedSize" name="pizzaSize" @change="addSize">
          <option value="" disabled>Please choose...</option>
          <option v-for="size in sizeList" :key="size" :value="size">{{ size }}</option>
        </select>
      </div>

      <div id="toppingSelectC" class="mb-3">
        <label class="form-label">Select Toppings</label><br />
        <div v-for="(topping, index) in toppingListC" :key="index">
          <input ref="toppingCBs" type="checkbox" :value="topping.toLowerCase()" :id="index" @click="addToppingC">
          <label :for="index">{{ topping }}</label><br>
        </div>
      </div>

      <div class="mb-3">
        <label for="dipSelect" class="form-label">Select Dip</label>
        <select class="form-select" v-model="selectedDip" name="pizzaDip" @change="addDip">
          <option value="" disabled>Please choose...</option>
          <option v-for="dip in dipList" :key="dip" :value="dip">{{ dip }}</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="sideSelect" class="form-label">Select Side</label>
        <select class="form-select" v-model="selectedSide" name="pizzaSide" @change="addSide">
          <option value="" disabled>Please choose...</option>
          <option v-for="side in sideList" :key="side" :value="side">{{ side }}</option>
        </select>
      </div>

      <!-- Buttons -->
      <div class="mb-3">
        <button type="button" class="view-button" @click="viewOrder">View Order</button>
        <button type="reset" class="clear-button" @click="clearOrder">Clear</button>
        <button type="button" class="checkout-button" @click="enterOrder">Checkout</button>
      </div>

      <!-- Messages -->
      <p class="message-text">{{ message }}</p>
      <p class="price-text">{{ price }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: "",
      items: [0, 0, 0, 0],
      toppingArray: [],
      toppingListC: [
        "none : $0",
        "olive : $1",
        "pepper : $2",
        "pineapple : $2",
        "ham : $3",
        "pepperoni : $3",
        "bacon : $4",
        "extra cheese : $5",
      ],
      sizeList: [
        "none : $0",
        "small : $10",
        "medium : $12",
        "large : $15",
        "extra large : $20",
        "panzerotti : $14",
      ],
      dipList: [
        "none : $0",
        "jalapeno : $0.50",
        "habanero : $0.50",
        "ghost pepper : $0.50",
        "ranch : $0.50",
        "three cheese : $0.50",
        "sweet & sour : $0.50",
        "plum : $0.50",
      ],
      sideList: [
        "none : $0",
        "chicken wings : $10",
        "chicken bites : $12",
        "garlic bread : $6",
        "cheese bread : $7",
        "mozarella sticks : $8",
        "apple pie : $4",
      ],
      selectedSize: "",
      selectedDip: "",
      selectedSide: "",
      selectedCustomer: "",
      message: "",
      customerPizza: null,
    };
  },
  methods: {
    addSize() {
      const selectedSize = this.selectedSize.split(" : $");
      this.items[0] = Number(selectedSize[1]);
    },
    addToppingC() { 
    this.toppingArray.length = 0;
    for (let i = 0; i < this.$refs.toppingCBs.length; i++) {
      if (this.$refs.toppingCBs[i].checked) {
        this.toppingArray.push(" " + this.$refs.toppingCBs[i].value);
      }
    }

    // Topping sum calculation
    const toppingSum = this.toppingArray.reduce((acc, topping) => {
      const priceMatch = topping.match(/\$([\d.]+)/);
      return acc + (priceMatch ? parseFloat(priceMatch[1]) : 0);
    }, 0);

    this.items[1] = toppingSum;
    },
    addDip() {
        const selectedDip = this.selectedDip.split(" : $");
        this.items[2] = Number(selectedDip[1]);
    },
    addSide() {
      const selectedSide = this.selectedSide.split(" : $");
      this.items[3] = Number(selectedSide[1]);
    },
    viewOrder() {
      if (!this.selectedCustomer) {
        this.message = "Please enter your name";
      } else if (!this.selectedSize) {
        this.message = "Please select a size";
      } else if (this.toppingArray.length === 0) {
        this.message = "Please select a topping";
      } else if (!this.selectedDip) {
        this.message = "Please select a dip";
      } else if (!this.selectedSide) {
        this.message = "Please select a side";
      } else {
        this.message = "";
        var sum = this.items.reduce((acc, item) => acc + item, 0);
        console.log(sum);
        if (sum === 0) {
          this.message = "You ordered nothing. Check your order and try again";
        } else {
          this.message = `${this.selectedCustomer}'s order: a ${this.selectedSize} pizza with${this.toppingArray} toppings, ${this.selectedDip} dip, & ${this.selectedSide} side.`;
        }
        this.price = "Total cost: $" + sum;
      }
    },
    enterOrder() {
  const pizzaCostArray = [
    this.items[0], // pizza size cost
    this.items[1], // topping cost
    this.items[2], // dip cost
    this.items[3], // side cost
  ];

  // Map the pizzaCostArray elements to the correct orderItems format
  const orderItems = [
    { id: 1, name: "Pizza Size", priceInCents: pizzaCostArray[0] * 100, quantity: 1 },
    { id: 2, name: "Topping", priceInCents: pizzaCostArray[1] * 100, quantity: 1 },
    { id: 3, name: "Dip", priceInCents: pizzaCostArray[2] * 100, quantity: 1 },
    { id: 4, name: "Side", priceInCents: pizzaCostArray[3] * 100, quantity: 1 },
  ];
  console.log(orderItems);

  // Continue with the rest of your code; otherwise: http://localhost:8080
  fetch("https://cult-of-pizza.onrender.com/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      items: orderItems
    })
  })
  .then(res => {
    if (res.ok) return res.json();
    return res.json().then(json => Promise.reject(json));
  })
  .then(({url}) => {
    window.location = url;
  })
  .catch(e => {
    console.error("Client-side error:", e);
    });
},
    clearOrder() {
      this.$refs.toppingCBs.forEach((checkBox) => {
        checkBox.checked = false;
      });
      this.message = "";
      this.price = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container1 {
  margin-left: 2%;
}

.left-aligned-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
}

.form-label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.form-control,
.form-select {
  width: 70%; /* Make the input larger */
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.view-button,
.clear-button,
.checkout-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
}
.view-button {
  background-color: #3490dc;
  color: #fff;
}

.clear-button {
  background-color: #6b7280;
  color: #fff;
}

.checkout-button {
  background-color: #38a169;
  color: #fff;
}

.message-text,
.price-text {
  color: limegreen;
  margin-bottom: 1rem;
}

.header-text {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: limegreen;
}
</style>