<template>
  <div>
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
    <!-- ======= Header ======= -->

    <header id="header" class="fixed-top">
      <div
        class="container d-flex align-items-center"
        data-aos="zoom-in-down"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <h1 class="logo mr-auto">
          <a href="#"><img src="img/img-og/logo-LPA.jpg" class="img-fluid" alt="" /></a>
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

        <nav class="nav-menu d-none d-lg-block"></nav>
        <!-- .nav-menu -->
        <a class="get-started-btn"
          ><v-btn color="primary" ml-5 rounded elevation="4" @click="dialog2 = true">
            <v-icon> mdi-lock-outline</v-icon> Login / Register</v-btn
          ></a
        >
      </div>
    </header>
    <main id="main">
      <!-- ======= Breadcrumbs ======= -->
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container pt-20">
          <ol>
            <li><router-link to="/">Accueil</router-link></li>

            <li>Details de l'animal</li>
          </ol>
          <v-divider></v-divider>
          <h2>Informations de l'animal</h2>
        </div>
      </section>
      <!-- End Breadcrumbs -->

      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
        <div class="container">
          <div class="portfolio-details-container">
            <div class="portfolio-details-carousel">
               <v-system-bar lights-out></v-system-bar>
              <v-carousel>
                <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                  :src="item.src"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                ></v-carousel-item>
              </v-carousel>
              <!-- <img  src="img/img-og/cirq2.jpg" class="img-fluid" alt="img" /> -->
            </div>

            <div class="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Nom de l'animal</strong>: Talma</li>
                <li><strong>Type</strong>: Chien</li>
                <li><strong>Race</strong>: Laobé</li>
                <li><strong>Dates de naissance </strong>: 01 mars, 2020</li>
                <li><strong>localisation </strong>: <a href="#">Medina ....</a></li>
              </ul>
            </div>
          </div>

          <div class="portfolio-description">
            <h2>Description</h2>

            <v-sheet elevation="6" class="mx-auto p-10">
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque
                inventore commodi labore quia quia. Exercitationem repudiandae officiis
                neque suscipit non officia eaque itaque enim. Voluptatem officia
                accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi
                nulla at esse enim cum deserunt eius.
              </p>
              <div class="d-flex">
                <v-chip class="ma-2" color="info" label text-color="white">
                  <v-icon left> mdi-alert </v-icon>
                  vaccin contre x
                </v-chip>
                <v-chip class="ma-2" color="warning" label text-color="white">
                  <v-icon left> mdi-label </v-icon>
                  sterilser
                </v-chip>
                <v-chip class="ma-2" color="info" label text-color="white">
                  <v-icon left> mdi-label </v-icon>
                  vaccin contre y
                </v-chip>
                <v-chip class="ma-2" color="info" label text-color="white">
                  <v-icon left> mdi-label </v-icon>
                  vaccin contre z
                </v-chip>
              </div>
            </v-sheet>
          </div>
        </div>
      </section>
      <!-- End Portfolio Details Section -->
    </main>
    <!-- End #main -->
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/clients/templates/Footer.vue";
export default {
  data() {
    return {

      items: [
          {
            src: "img/img-og/chat4.jpg",
          },
          {
            src: 'img/img-og/chat4.jpg',
          },
          {
            src: 'img/img-og/chat4.jpg',
          },
          {
            src: 'img/img-og/chat4.jpg',
          },
        ],
      
      
    }
  },
  components: {
    Footer,
  },
};
</script>

<style scope></style>
