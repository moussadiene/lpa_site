<template>
  <div>
      <!-- ======= Annuaire Section ======= -->
    <section id="annuaire"  ref="annuaire" class="team section-bg">
      <div
        class="container"
        data-aos="flip-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div class="section-title">
          <h2>Annuaire</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid
            fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam
            cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste
            officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div
              class="member d-flex align-items-start"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="pic">
                <img src="" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <div
              class="member d-flex align-items-start"
              data-aos="flip-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div class="pic">
                <img src="public/img/team/team-2.jpeg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div
              class="member d-flex align-items-start"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="pic">
                <img src="public/img/team/team-3.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div
              class="member d-flex align-items-start"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="pic">
                <img src="public/img/team/team-4.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Annuaire Section -->
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    test: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
