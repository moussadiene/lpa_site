<template>
  <div
    id="topbar"
    class="d-none d-lg-flex align-items-center fixed-top"
    data-oas="fade-up"
    data-aos-anchor-placement="center-bottom"
    data-aos-easing="linear"
    data-aos-duration="5000"
  >
    <div class="container d-flex">
      <div class="contact-info mr-auto">
        <i class="icofont-envelope"></i>
        <a href="mailto:arl.dakar@gmail.com"> arl.dakar@gmail.com</a>
        <i class="icofont-phone"></i> +1 5589 55488 55
        <i class="icofont-google-map"></i> Sénégal, Dakar, medina rue 10
      </div>
      <div class="social-links">
        <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
        <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
        <a href="#" class="skype"><i class="icofont-skype"></i></a>
        <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topbar",
  props: {
    test: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
