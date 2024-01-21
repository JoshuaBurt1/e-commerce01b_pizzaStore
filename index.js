require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.static("public"));
app.use(
  cors({
    origin: "*", // Allow all origins during development
  })
);
//DEPLOYMENT TO HOSTING:
//when deploying to render, all instances of "http://localhost:8080" --> https://cult-of-pizza-vue.onrender.com
//enter STRIPE_SECRET_KEY in deployment step --> no quotes around secret key

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log(stripe);

app.post("/checkout", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name, // Assuming your client-side sends the name
          },
          unit_amount: item.priceInCents,
        },
        quantity: item.quantity,
      })),
      success_url: `https://cult-of-pizza-vue.onrender.com/success`,
      cancel_url: `https://cult-of-pizza-vue.onrender.com`,
    });
    res.json({ url: session.url });
  } catch (e) {
    console.error("Server error:", e);
    res.status(500).json({ error: "An unexpected error occurred on the server." });
  }
});

app.listen(8080, () => {
  console.log("Server is running on https://cult-of-pizza-vue.onrender.com");
});