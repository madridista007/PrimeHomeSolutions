<template>
  <div>
    <h1>Contact Us</h1>
    <p>Feel free to reach out via WhatsApp:</p>
    <a
      :href="whatsappLink"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-button"
    >
      Chat with us on WhatsApp
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Replace the number with your WhatsApp phone number (in international format without +)
      phoneNumber: "1234567890",
      message: "Hello! I would like to inquire about your services.",
    };
  },
  computed: {
    whatsappLink() {
      return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(
        this.message
      )}`;
    },
  },
};
</script>

<style>
.whatsapp-button {
  display: inline-block;
  padding: 10px 15px;
  background-color: #25d366;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}
.whatsapp-button:hover {
  background-color: #1ebe57;
}
</style>
