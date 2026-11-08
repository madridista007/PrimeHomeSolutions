<template>
  <section class="desks-page">
    <h1 class="page-title">Our Adjustable Desks</h1>

    <div class="desk-grid">
      <div v-for="desk in desks" :key="desk.id" class="desk-card">
        <img :src="desk.image" :alt="desk.name" />

        <div class="desk-info">
          <h2>{{ desk.name }}</h2>

          <div class="price-box">
            <p class="price">PKR {{ desk.price.toLocaleString() }}</p>
            <p class="price-accessories">
              With accessories: PKR
              {{ desk.priceWithAccessories.toLocaleString() }}
            </p>
          </div>

          <ul class="specs">
            <li v-for="spec in desk.specs" :key="spec">{{ spec }}</li>
          </ul>

          <h4>Accessories</h4>
          <ul class="accessories">
            <li v-for="item in desk.accessories" :key="item">
              {{ item }}
            </li>
          </ul>

          <button
            class="order-btn"
            @click="orderOnWhatsApp(desk.name, desk.price)"
          >
            Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import desk1 from "../../assets/desk1.jpg";
import desk2 from "../../assets/desk2.jpg";
import desk3 from "../../assets/desk3.jpg";
import desk4 from "../../assets/desk4.jpg";
import desk5 from "../../assets/desk5.jpg";

export default {
  name: "DesksView",

  data() {
    return {
      desks: [
        {
          id: 1,
          image: desk1,
          name: "Height Adjustable Electric Desk (Dual Motor)",
          price: 119999,
          priceWithAccessories: 124999,
          specs: [
            "Heavy duty steel body - Black",
            "Dual motor with 6 button controller",
            "Lifting speed 20mm/s",
            'Height range 28.74" to 46.45"',
            "Bearing capacity 120kg",
            "Anti-collision protection",
            "Frame thickness 1.2mm",
            "Size: 160 x 60 x 72 cm",
          ],
          accessories: ["Headphone hook", "Cup holder", "Cable management"],
        },
        {
          id: 2,
          image: desk2,
          name: "Adjustable Electric Gaming Desk with RGB (Single Motor)",
          price: 69999,
          priceWithAccessories: 74999,
          specs: [
            "Heavy duty steel body - Black",
            "Single motor with 6 button controller",
            "RGB lighting",
            "Lifting speed 10mm/s",
            'Height range 28.74" to 46.45"',
            "Bearing capacity 70kg",
            "Anti-collision protection",
            "Frame thickness 1.2mm",
            "Size: 120 x 60 x 73~118 cm",
          ],
          accessories: ["Headphone hook", "Cup holder", "Cable management"],
        },
        {
          id: 3,
          image: desk3,
          name: "Dual Motor Electric Desk Frame Only – HA-04CFR",
          price: 74999,
          priceWithAccessories: 79999,
          specs: [
            "Heavy duty iron body",
            "Color: White",
            "Six button controller",
            "Input voltage: 100V–230V",
            "Lifting speed: 20mm/s",
            'Lifting height: 28.74" – 46.45"',
            "Backward movement in case of obstruction",
            "Table frame thickness: 1.2mm",
            "Bearing capacity: 130kg",
          ],
          accessories: [
            "Headphone hook",
            "Water cup holder",
            "Cable management box",
          ],
        },
        {
          id: 4,
          image: desk4,
          name: "Electric Desk With Table Top – TL-01A-W (Single Motor)",
          price: 64999,
          priceWithAccessories: 69999,
          specs: [
            "Heavy duty steel body",
            "Color: White & Black",
            "Six button controller",
            "Lifting speed: 10mm/s",
            "Bearing capacity: 80kg",
          ],
          accessories: [
            "Headphone hook",
            "Water cup holder",
            "Cable management box",
          ],
        },
        {
          id: 5,
          image: desk5,
          name: "Electric Desk Frame Only – TL-00FR (Single Motor)",
          price: 54999,
          priceWithAccessories: 59999,
          specs: [
            "Heavy duty steel body",
            "Frame color: Black / White",
            "Six button controller",
            "Lifting speed: 10mm/s",
            "Bearing capacity: 80kg",
          ],
          accessories: [
            "Headphone hook",
            "Water cup holder",
            "Cable management box",
          ],
        },
      ],
    };
  },

  methods: {
    orderOnWhatsApp(name, price) {
      const message = `Hi, I'm interested in the ${name} priced at PKR ${price}. Is it available?`;
      const url = `https://wa.me/923106308195?text=${encodeURIComponent(
        message,
      )}`;
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.desks-page {
  padding: 3rem 2rem;
  background: #f7f9fc;
}

.page-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.desk-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.desk-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.desk-card:hover {
  transform: translateY(-8px);
}

.desk-card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.desk-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.price-box {
  background: #f2f4f8;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0 15px 0;
}

.price {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
}

.price-accessories {
  font-size: 0.9rem;
  color: #555;
}

.specs,
.accessories {
  font-size: 0.92rem;
}

ul {
  padding-left: 18px;
  margin-bottom: 1rem;
}

.order-btn {
  margin-top: auto;
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 30px;
  background: linear-gradient(45deg, #25d366, #128c7e);
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
}

.order-btn:hover {
  transform: scale(1.03);
}
</style>
