<template>
  <div class="hello">
    <h1>{{ test }}</h1>
    <section id="hero" class="d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 mb-5"
            data-aos="zoom-in-down"
            data-aos-delay="50"
            data-aos-duration="2000"
            
          >
            <h1>Bienvenue à la Ligue pour la Protection des Animaux</h1>
            <h2>
              La principale mission de LPA est de vacciner et de stériliser de la rue à
              Dakar
            </h2>
            <div class="d-lg-flex">
              <a href="#" class="btn-get-started scrollto">  Adopter un animal</a>

              <a
                href="https://www.youtube.com/watch?v=a1ZxbOm91XA"
                class="venobox btn-watch-video"
                data-vbtype="video"
                data-autoplay="true"
              >
                Suivre une video<i class="icofont-play-alt-2"></i
              ></a>
            </div>
          </div>
          <div
            class="col-lg-6 order-1 order-lg-2 hero-img text-center mt-5"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            <img
              src="img/vaccin_chiot2.png"
              class="img-fluid animated lazy"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    
  </div>
</template>

<script>
export default {
  name: "Accueil",
  components: {
  },
  props: {
    test: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
