<template>
  <footer id="footer" class="shadow-lg">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-md-6 footer-contact"
            data-aos="zoom-in-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h3>LPA</h3>
            <p>
              Sénégal <br />
              Dakar, Medina<br />
              Rue N°10 <br /><br />
              <strong>Telephone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> mosila2138@gmail.com<br />
            </p>
          </div>

          <div
            class="col-lg-3 col-md-6 footer-links"
            data-aos="zoom-in-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h4>Lien menu</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Accueil</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">A propos</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Adoptions</a></li>
            </ul>
          </div>

          <div
            class="col-lg-3 col-md-6 footer-links"
            data-aos="zoom-in-left"
            data-aos-delay="5s0"
            data-aos-duration="1000"
          >
            <h4>Adoption un animal</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Categorie Chiens</a>
              </li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Categorie Chats</a></li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Product Management</a>
              </li>
            </ul>
          </div>

          <div
            class="col-lg-3 col-md-6 footer-links"
            data-aos="zoom-in-left"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h4>Reseaux sociaux</h4>
            <p>Vous pouvez nous retrouver également sur :</p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
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
