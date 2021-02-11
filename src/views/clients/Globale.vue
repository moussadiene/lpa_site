<template>
  <div class="Globale" ref="accueil">
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

        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li class="item-menu accueil active">
              <a @click="scrollMeTo('accueil')"> Accueil </a>
            </li>
            <li class="item-menu propos">
              <a @click="scrollMeTo('propos')">A propos</a>
            </li>
            <li class="item-menu adoptions">
              <a @click="scrollMeTo('adoptions')">Adoptions</a>
            </li>
            <li class="item-menu blogs">
              <a @click="scrollMeTo('blogs')">Conseil-Animal</a>
            </li>
            <li class="item-menu annuaires">
              <a @click="scrollMeTo('annuaires')">Annuaire</a>
            </li>

            <li class="item-menu contact">
              <a @click="scrollMeTo('contact')">contact</a>
            </li>
          </ul>
        </nav>
        <!-- .nav-menu -->
        <a class="get-started-btn"
          ><v-btn color="primary" ml-5 rounded elevation="4" @click="dialog2 = true">
            <v-icon> mdi-lock-outline</v-icon> Login / Register</v-btn
          ></a
        >
      </div>
    </header>

    <main id="main">
      <div class="hello">
        <section id="hero" class="d-flex align-items-center mt-15">
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
                  La principale mission de LPA est de vacciner et de stériliser de la rue
                  à Dakar
                </h2>
                <div class="d-lg-flex flex-row-between pr-7">
                  <a href="#" class="btn-get-started"> Adopter un animal </a>
                  <a href="#" class="btn-get-started"> Faire dopter un animal </a>

                  <!-- <a
                    href="https://www.youtube.com/watch?v=a1ZxbOm91XA"
                    class="venobox btn-watch-video"
                    data-vbtype="video"
                    data-autoplay="true"
                  >
                    Suivre une video<i class="icofont-play-alt-2"> </i
                  ></a> -->
                </div>
              </div>
              <div
                class="col-lg-6 order-1 order-lg-2 hero-img text-center mt-5"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="2000"
              >
                <img src="img/img-og/cirq2.jpg" class="img-fluid animated lazy" alt="" />
              </div>
            </div>
          </div>
        </section>
        <!-- End Hero -->
      </div>

      <v-dialog v-model="dialog2" persistent max-width="580px" min-width="360px">
        <div>
          <v-tabs
            v-model="tab"
            show-arrows
            background-color="light-blue darken-3"
            icons-and-text
            dark
            grow
          >
            <v-tabs-slider color="cyan accent-3"></v-tabs-slider>
            <v-tab>
              <v-icon large>mdi-account</v-icon>
              <div class="caption py-1">Login</div>
            </v-tab>
            <v-tab>
              <v-icon large>mdi-account-plus</v-icon>
              <div class="caption py-1">Register</div>
            </v-tab>
            <v-tab-item>
              <v-card class="px-4">
                <v-card-text>
                  <v-form ref="loginForm" v-model="valid" @submit.prevent="Login">
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          prepend-icon="mdi-email"
                          v-model="loginEmail"
                          :rules="loginEmailRules"
                          label="E-mail"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          prepend-icon="mdi-key"
                          v-model="loginPassword"
                          :append-icon="show1 ? 'eye' : 'eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Password"
                          hint="minimun 8 caractere"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-col class="d-flex" cols="6">
                        <v-checkbox
                          v-model="checkbox"
                          :error-messages="checkboxErrors"
                          label="Rester connecter !"
                          required
                          @change="$v.checkbox.$touch()"
                          @blur="$v.checkbox.$touch()"
                        ></v-checkbox
                      ></v-col>
                      <v-col class="d-flex justify-end" cols="6"> </v-col>
                      <v-spacer></v-spacer>
                      <v-col class="d-flex justify-space-between">
                        <v-btn @click="cancel" class="mr-5 elevation-5 close">
                          annuler
                        </v-btn>

                        <v-btn
                          :disabled="!valid"
                          color="primary"
                          class="elevation-5"
                          type="submit"
                        >
                          Login
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card class="px-4">
                <v-card-text>
                  <v-form ref="registerForm" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="firstName"
                          :rules="[rules.required]"
                          label="First Name"
                          maxlength="20"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="lastName"
                          :rules="[rules.required]"
                          label="Last Name"
                          maxlength="20"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Password"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          block
                          v-model="verify"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, passwordMatch]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Confirm Password"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col class="d-flex justify-space-between">
                        <v-btn @click="reset" class="mr-5 elevation-5 close">
                          annuler
                        </v-btn>
                        <v-btn
                          :disabled="!valid"
                          class="elevation-10"
                          color="primary"
                          @click="validate"
                          >Enregistrer</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </div>
      </v-dialog>

      <v-dialog v-model="dialog3" persistent max-width="900px" min-width="360px">
        <div>
          <v-card>
            <v-card-title class="justify-between">
              <span class="headline">Formulaire d'Adoptions </span>
              <span
                ><v-btn color="danger" class="close" @click="reset" icon>x</v-btn></span
              >
            </v-card-title>
            <v-card-text>
              <v-col>
                <v-divider></v-divider>
              </v-col>
              <v-stepper v-model="e1">
                <v-stepper-header>
                  <template v-for="module in modules">
                    <v-stepper-step
                      :key="`${module.id}-step`"
                      :complete="e1 > modules.length"
                      :step="module.id"
                      editable
                    >
                      {{ module.libelle }}
                    </v-stepper-step>

                    <v-divider
                      v-if="modules.length !== module.id"
                      :key="module.id"
                    ></v-divider>
                  </template>
                </v-stepper-header>

                <v-stepper-items>
                  <v-stepper-content v-for="module in modules" :key="module.id" :step="module.id">
                    <v-card class="mb-12" color="grey lighten-1" height="200px">
                      {{module.ordre}}
                    </v-card>

                    <v-btn color="primary" @click="nextStep(rubrique)"> Continue </v-btn>

                    <v-btn text> Cancel </v-btn>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
            </v-card-text>
          </v-card>
        </div>
      </v-dialog>

      <!-- ======= A propos Us Section ======= -->
      <section id="propos" ref="propos" class="propos">
        <div
          class="container"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div class="section-title">
            <h2>A propos de nous</h2>
          </div>

          <div class="row content">
            <div
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="1000"
              class="col-lg-6"
            >
              <p>
                La Ligue pour la Protection des Animaux est une association à but non
                lucratif qui se consacre à la protection des animaux des rues de Dakar par
                la vaccination, la stérilisation, le plaidoyer et qui aide à trouver des
                foyers pour ces animaux lorsque cela est possible. La LPA n'a pas de
                locaux et dépend des familles d'accueil pendant que les animaux reçoivent
                des soins ou avant d'être adoptés. L’association a été créée en 2012 par
                des membres de la communauté et des vétérinaires de Dakar pour s'attaquer
                aux problèmes des animaux sans abri et abandonnés. La LPA est géré par des
                bénévoles engagés. Nous ne pouvons pas exister sans votre engagement et
                votre aide.
              </p>
              <ul>
                <li class="mb-5">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="info" block small v-bind="attrs" v-on="on">
                        Protection des animaux
                      </v-btn>
                    </template>
                    <span col='6'
                      >Les animaux sont des êtres vivants qui ont besoin d'être protéger
                      surtout quand ils sont jeunes, souffrants, bléssés. Leur donner à
                      boire et à manger quand ils ont faim et soif, les amener chez le
                      vétérinaire quand ils sont malades ou bléssés si on peut -- tout ces
                      gestes peuvent les aider à avoir une vie meilleure.
                    </span>
                  </v-tooltip>
                </li>
                <li class="mb-5">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="warning" block small v-bind="attrs" v-on="on">
                        Vaccination des animaux
                      </v-btn>
                    </template>
                    <span 
                      >Tout comme on vaccine les jeunes enfants pour éviter qu'ils tombent
                      malades, vacciner les animaux permet d'éviter des maladies telles
                      que la rage, la maladie de Carré, la leucémie féline qui sont
                      fréquemment mortelles. La LPA exige que tous les animaux qui sont
                      adoptés à travers l'association soient vaccinés parce que c'est une
                      des actions les plus efficaces pour assurer qu'un animal puisse
                      avoir une vie longue et en bonne santé. Faire vacciner les animaux
                      c'est éviter des traitements longs et coûteux plus tard et permet
                      d'arrêter la transmission de certaines maladies envers les êtres
                      humains, telle que la rage.
                    </span>
                  </v-tooltip>
                </li>
                <li class="mb-5">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" block small v-bind="attrs" v-on="on">
                        Sterilisation des animaux
                      </v-btn>
                    </template>
                    <span 
                      >La stérilisation est une procédure chirurgicale pour empêcher la
                      reproduction. Pourquoi le faire ? Tout d'abord, cela permet de
                      réduire la surpopulation des animaux des rues et d'éviter la
                      souffrance. C'est aussi bénéfique pour la santé de l'animal en
                      question car cela lui permet de vivre plus longtemps et d'éviter
                      certaines maladies telles que les infections utérines et certains
                      cancers de l'appareil reproductif. La stérilisation des jeunes mâles
                      peut empêcher ou diminuer des comportements agressifs. En plus, les
                      animaux stérilisés ont moins tendance à fuguer et de se perdre car
                      les mâles n'ont plus cet instinct de suivre les femelles en chaleur
                      et les femelles ne tombent plus en chaleur. Stériliser son chien ou
                      son chat c'est bon pour lui et pour toute la communauté.
                    </span>
                  </v-tooltip>
                </li>
              </ul>
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              class="col-lg-6 pt-4 pt-lg-0"
            >
              <v-carousel
                cycle
                height="400"
                hide-delimiter-background
                show-arrows-on-hover
              >
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                  <v-sheet :color="colors[i]" height="100%">
                    <v-row class="fill-height" align="center" justify="center">
                      <div class="display-3 text-center">{{ slide }} Slide</div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </div>
          </div>
        </div>
      </section>
      <!-- End A propos Us Section -->
      <!-- ======= Galerie ======= -->

      <section id="" class="portfolio section-bg2" ref="adoptions">
        <div
          class="container"
          data-aos="flip-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div class="section-title">
            <h2>Adoptions</h2>
            <p>Magnam dolores commodi suscipit.</p>
          </div>
          <!-- filtreTab -->
          <ul
            id="portfolio-flters"
            class="d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">Chien</li>
            <li data-filter=".filter-card">Chat</li>
            <li data-filter=".filter-web"></li>
          </ul>

          <!-- les images -->
          <div
            class="row portfolio-container"
            data-aos="zoom-up"
            data-aos-delay="200"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div class="port">
              <div class="portfolioContainer row">
                <div class="col-sm-6 col-lg-3 col-md-4 illustrator photography mb-10">
                  <v-card elevation="3">
                    <v-img
                      data-aos="zoom-in"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      src="img/img-og/Elsa-May2019.jpg"
                      class="white--text align-end"
                      data-gall="portfolioGallery"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                      height="280px"
                    >
                      <v-card-title> Elsa</v-card-title>
                    </v-img>

                    <v-card-actions class="flex-row-between">
                      <v-btn
                        color="primary"
                        @click="dialog3 = true"
                        elevation="3"
                        class="primary btn-sm btn-adopter lowercase"
                      >
                        adopter
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <a
                          href="img/img-og/Elsa-May2019.jpg"
                          data-gall="portfolioGallery three-bounce"
                          class="venobox preview-link"
                          title="visualité"
                          ><v-icon>mdi-eye</v-icon>
                        </a>
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <router-link to="/adoption">
                          <a class="details-link" title="Plus de Details"
                            ><v-icon>mdi-link-variant</v-icon></a
                          ></router-link
                        >
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>

                <div class="col-sm-6 col-lg-3 col-md-4 illustrator photography mb-10">
                  <v-card elevation="3">
                    <a
                      href="img/img-og/chat4.jpg"
                      data-gall="portfolioGallery"
                      class="venobox preview-link"
                      title="chat4"
                    >
                      <v-img
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        src="img/img-og/chat4.jpg"
                        class="white--text align-end"
                        data-gall="portfolioGallery"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                        height="280px"
                      >
                        <v-card-title> chat4</v-card-title>
                      </v-img>
                    </a>
                    <v-card-actions class="flex-row-between">
                      <v-btn
                        color="primary"
                        @click="dialog3 = true"
                        elevation="3"
                        class="primary btn-sm btn-adopter lowercase"
                      >
                        adopter
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <a
                          href="img/img-og/chat4.jpg"
                          data-gall="portfolioGallery"
                          class="venobox preview-link"
                          title="visualité"
                          ><v-icon>mdi-eye</v-icon>
                        </a>
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <router-link to="/adoption">
                          <a class="details-link" title="Plus de Details"
                            ><v-icon>mdi-link-variant</v-icon></a
                          ></router-link
                        >
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>

                <div class="col-sm-6 col-lg-3 col-md-4 illustrator photography mb-10">
                  <v-card elevation="3">
                    <a
                      href="img/img-og/chiot1.JPG"
                      data-gall="portfolioGallery"
                      class="venobox preview-link"
                      title="chiot1"
                    >
                      <v-img
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        src="img/img-og/chiot1.JPG"
                        class="white--text align-end"
                        data-gall="portfolioGallery"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                        height="280px"
                      >
                        <v-card-title> CHIOT 1</v-card-title>
                      </v-img>
                    </a>
                    <v-card-actions class="flex-row-between">
                      <v-btn
                        color="primary"
                        @click="dialog3 = true"
                        elevation="3"
                        class="primary btn-sm btn-adopter lowercase"
                      >
                        adopter
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <a
                          href="img/img-og/chiot1.JPG"
                          data-gall="portfolioGallery"
                          class="venobox preview-link"
                          title="visualité"
                          ><v-icon>mdi-eye</v-icon>
                        </a>
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <router-link to="/adoption">
                          <a class="details-link" title="Plus de Details"
                            ><v-icon>mdi-link-variant</v-icon></a
                          ></router-link
                        >
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>

                <div class="col-sm-6 col-lg-3 col-md-4 illustrator photography mb-10">
                  <v-card elevation="3">
                    <a
                      href="img/img-og/Big-Mo.jpg"
                      data-gall="portfolioGallery"
                      class="venobox preview-link"
                      title="chat4"
                    >
                      <v-img
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        src="img/img-og/Big-Mo.jpg"
                        class="white--text align-end"
                        data-gall="portfolioGallery"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                        height="280px"
                      >
                        <v-card-title> Big-Mo</v-card-title>
                      </v-img>
                    </a>
                    <v-card-actions class="flex-row-between">
                      <v-btn
                        color="primary"
                        @click="dialog3 = true"
                        elevation="3"
                        class="primary btn-sm btn-adopter lowercase"
                      >
                        adopter
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <a
                          href="img/img-og/Big-Mo.jpg"
                          data-gall="portfolioGallery"
                          class="venobox preview-link"
                          title="visualité"
                          ><v-icon>mdi-eye</v-icon>
                        </a>
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <router-link to="/adoption">
                          <a class="details-link" title="Plus de Details"
                            ><v-icon>mdi-link-variant</v-icon></a
                          ></router-link
                        >
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>

                <div class="col-sm-6 col-lg-3 col-md-4 illustrator photography mb-10">
                  <v-card elevation="3">
                    <a
                      href="img/img-og/Joe.jpg"
                      data-gall="portfolioGallery"
                      class="venobox preview-link"
                      title="chat4"
                    >
                      <v-img
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        src="img/img-og/Joe.jpg"
                        class="white--text align-end"
                        data-gall="portfolioGallery"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                        height="280px"
                      >
                        <v-card-title> Joe</v-card-title>
                      </v-img>
                    </a>
                    <v-card-actions class="flex-row-between">
                      <v-btn
                        color="primary"
                        @click="dialog3 = true"
                        elevation="3"
                        class="primary btn-sm btn-adopter lowercase"
                      >
                        adopter
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <a
                          href="img/img-og/Joe.jpg"
                          data-gall="portfolioGallery"
                          class="venobox preview-link"
                          title="visualité"
                          ><v-icon>mdi-eye</v-icon>
                        </a>
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <router-link to="/adoption">
                          <a class="details-link" title="Plus de Details"
                            ><v-icon>mdi-link-variant</v-icon></a
                          ></router-link
                        >
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>

                <div class="col-sm-6 col-lg-3 col-md-4 illustrator photography mb-10">
                  <v-card elevation="3">
                    <a
                      href="img/img-og/chart3.jpg"
                      data-gall="portfolioGallery"
                      class="venobox preview-link"
                      title="chat4"
                    >
                      <v-img
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        src="img/img-og/chart3.jpg"
                        class="white--text align-end"
                        data-gall="portfolioGallery"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                        height="280px"
                      >
                        <v-card-title> Chat potté</v-card-title>
                      </v-img>
                    </a>
                    <v-card-actions class="flex-row-between">
                      <v-btn
                        color="primary"
                        @click="dialog3 = true"
                        elevation="3"
                        class="primary btn-sm btn-adopter lowercase"
                      >
                        adopter
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <a
                          href="img/img-og/chart3.jpg"
                          data-gall="portfolioGallery"
                          class="venobox preview-link"
                          title="visualité"
                          ><v-icon>mdi-eye</v-icon>
                        </a>
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <router-link to="/adoption">
                          <a class="details-link" title="Plus de Details"
                            ><v-icon>mdi-link-variant</v-icon></a
                          ></router-link
                        >
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>

                <div class="col-sm-6 col-lg-3 col-md-4 illustrator photography mb-10">
                  <v-card elevation="3">
                    <a
                      href="img/img-og/chat2.jpg"
                      data-gall="portfolioGallery"
                      class="venobox preview-link"
                      title="chat4"
                    >
                      <v-img
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        src="img/img-og/chat2.jpg"
                        class="white--text align-end"
                        data-gall="portfolioGallery"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                        height="280px"
                      >
                        <v-card-title> chat2</v-card-title>
                      </v-img>
                    </a>
                    <v-card-actions class="flex-row-between">
                      <v-btn
                        color="primary"
                        @click="dialog3 = true"
                        elevation="3"
                        class="primary btn-sm btn-adopter lowercase"
                      >
                        adopter
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <a
                          href="img/img-og/chat2.jpg"
                          data-gall="portfolioGallery"
                          class="venobox preview-link"
                          title="visualité"
                          ><v-icon>mdi-eye</v-icon>
                        </a>
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <router-link to="/adoption">
                          <a class="details-link" title="Plus de Details"
                            ><v-icon>mdi-link-variant</v-icon></a
                          ></router-link
                        >
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>

                <div class="col-sm-6 col-lg-3 col-md-4 illustrator photography mb-10">
                  <v-card elevation="3">
                    <a
                      href="img/img-og/smiley2.jpg"
                      data-gall="portfolioGallery"
                      class="venobox preview-link"
                      title="chat4"
                    >
                      <v-img
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        src="img/img-og/smiley2.jpg"
                        class="white--text align-end"
                        data-gall="portfolioGallery"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                        height="280px"
                      >
                        <v-card-title> smiley2</v-card-title>
                      </v-img>
                    </a>
                    <v-card-actions class="flex-row-between">
                      <v-btn
                        color="primary"
                        @click="dialog3 = true"
                        elevation="3"
                        class="primary btn-sm btn-adopter lowercase"
                      >
                        adopter
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <a
                          href="img/img-og/smiley2.jpg"
                          data-gall="portfolioGallery"
                          class="venobox preview-link"
                          title="visualité"
                          ><v-icon>mdi-eye</v-icon>
                        </a>
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <router-link to="/adoption">
                          <a class="details-link" title="Plus de Details"
                            ><v-icon>mdi-link-variant</v-icon></a
                          ></router-link
                        >
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>

                <div class="col-sm-6 col-lg-3 col-md-4 illustrator photography mb-10">
                  <v-card elevation="3">
                    <a
                      href="img/img-og/Thelma1.jpg"
                      data-gall="portfolioGallery"
                      class="venobox preview-link"
                      title="chat4"
                    >
                      <v-img
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        src="img/img-og/Thelma1.jpg"
                        class="white--text align-end"
                        data-gall="portfolioGallery"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                        height="280px"
                      >
                        <v-card-title> Thelma1</v-card-title>
                      </v-img>
                    </a>
                    <v-card-actions class="flex-row-between">
                      <v-btn
                        color="primary"
                        @click="dialog3 = true"
                        elevation="3"
                        class="primary btn-sm btn-adopter lowercase"
                      >
                        adopter
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <a
                          href="img/img-og/Thelma1.jpg"
                          data-gall="portfolioGallery"
                          class="venobox preview-link"
                          title="visualité"
                          ><v-icon>mdi-eye</v-icon>
                        </a>
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <router-link to="/adoption">
                          <a class="details-link" title="Plus de Details"
                            ><v-icon>mdi-link-variant</v-icon></a
                          ></router-link
                        >
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>

                <div class="col-sm-6 col-lg-3 col-md-4 illustrator photography mb-10">
                  <v-card elevation="3">
                    <a
                      href="img/img-og/Miss-Muffet.jpg"
                      data-gall="portfolioGallery"
                      class="venobox preview-link"
                      title="chat4"
                    >
                      <v-img
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        src="img/img-og/Miss-Muffet.jpg"
                        class="white--text align-end"
                        data-gall="portfolioGallery"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                        height="280px"
                      >
                        <v-card-title> Miss-Muffet</v-card-title>
                      </v-img>
                    </a>
                    <v-card-actions class="flex-row-between">
                      <v-btn
                        color="primary"
                        @click="dialog3 = true"
                        elevation="3"
                        class="primary btn-sm btn-adopter lowercase"
                      >
                        adopter
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <a
                          href="img/img-og/Miss-Muffet.jpg"
                          data-gall="portfolioGallery"
                          class="venobox preview-link"
                          title="visualité"
                          ><v-icon>mdi-eye</v-icon>
                        </a>
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <router-link to="/adoption">
                          <a class="details-link" title="Plus de Details"
                            ><v-icon>mdi-link-variant</v-icon></a
                          ></router-link
                        >
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>

                <div class="col-sm-6 col-lg-3 col-md-4 illustrator photography mb-10">
                  <v-card elevation="3">
                    <a
                      href="img/img-og/chiot2.jpg"
                      data-gall="portfolioGallery"
                      class="venobox preview-link"
                      title="chat4"
                    >
                      <v-img
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        src="img/img-og/chiot2.jpg"
                        class="white--text align-end"
                        data-gall="portfolioGallery"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                        height="280px"
                      >
                        <v-card-title> chiot2</v-card-title>
                      </v-img>
                    </a>
                    <v-card-actions class="flex-row-between">
                      <v-btn
                        color="primary"
                        @click="dialog3 = true"
                        elevation="3"
                        class="primary btn-sm btn-adopter lowercase"
                      >
                        adopter
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <a
                          href="img/img-og/chiot2.jpg"
                          data-gall="portfolioGallery"
                          class="venobox preview-link"
                          title="visualité"
                          ><v-icon>mdi-eye</v-icon>
                        </a>
                      </v-btn>

                      <v-btn elevation="3" icon>
                        <router-link to="/adoption">
                          <a class="details-link" title="Plus de Details"
                            ><v-icon>mdi-link-variant</v-icon></a
                          ></router-link
                        >
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blogs" ref="blogs" class="blogs">
        <div
          class="container"
          data-aos="flip-down"
          data-aos-delay="50"
          data-aos-duration="2000"
        >
          <div class="section-title">
            <h2>Blog</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid
              fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam
              cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste
              officiis commodi quidem hic quas.
            </p>
          </div>
          <div class="row">
            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bxl-dribbble"></i></div>
                <h4><a href="">Lorem Ipsum</a></h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas molestias
                  excepturi
                </p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bx-file"></i></div>
                <h4><a href="">Sed ut perspici</a></h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore
                </p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bx-tachometer"></i></div>
                <h4><a href="">Magni Dolores</a></h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia
                </p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bx-layer"></i></div>
                <h4><a href="">Nemo Enim</a></h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="services section-bg">
        <div class="container aos-init aos-animate" data-aos="fade-up">
          <div class="section-title">
            <h2>Services</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid
              fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam
              cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste
              officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row">
            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bxl-dribbble"></i></div>
                <h4><a href="">Lorem Ipsum</a></h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas molestias
                  excepturi
                </p>
              </div>
            </div>
            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box">
                <div class="icon"><i class="bx bx-layer"></i></div>
                <h4><a href="">Nemo Enim</a></h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Blogs Section -->

      <!-- ======= Pricing Section =======
      <section id="pricing" class="pricing">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Pricing</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid
              fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam
              cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste
              officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row">
            <div
              class="col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div class="box">
                <h3>Blog 1</h3>
                <h4><sup>$</sup>0<span>per month</span></h4>

                <a href="#" class="buy-btn">lire la suite ...</a>
              </div>
            </div>

            <div
              class="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div class="box featured">
                <h3>Blog2</h3>
                <h4><sup>$</sup>29<span>per month</span></h4>

                <a href="#" class="buy-btn">lire la suite ...</a>
              </div>
            </div>

            <div
              class="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div class="box">
                <h3>Blog 3</h3>
                <h4><sup>$</sup>49<span>per month</span></h4>

                <a href="#" class="buy-btn">lire la suite</a>
              </div>
            </div>
          </div>
        </div>
      </section>
       End Pricing Section -->

      <!-- ======= Annuaire Section ======= -->
      <section id="annuaires" ref="annuaires" class="team section-bg">
        <div
          class="container"
          data-aos="flip-down"
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
                  <img src="img/team/team-1.jpg" class="img-fluid" alt="" />
                </div>
                <div class="member-infos">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>Explicabo voluptatem mollitia et repellat qui ...</p>
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
              >
                <div class="pic">
                  <img src="img/team/team-2.jpg" class="img-fluid" alt="" />
                </div>
                <div class="member-infos">
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
                  <img src="img/team/team-3.jpg" class="img-fluid" alt="" />
                </div>
                <div class="member-infos">
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
                  <img src="img/team/team-4.jpg" class="img-fluid" alt="" />
                </div>
                <div class="member-infos">
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
      <!-- <section>
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-sm-12">
              <div class="portfolioFilter">
                <a href="#" data-filter="*" class="current">All</a>
                <a href="#" data-filter=".webdesign">Web Design</a>
                <a href="#" data-filter=".graphicdesign">Graphic Design</a>
                <a href="#" data-filter=".illustrator">Illustrator</a>
                <a href="#" data-filter=".photography">Photography</a>
              </div>
            </div>
          </div>
        </div>
      </section> -->

      <!-- End row -->
      <!-- ======= Contact Section ======= -->
      <section id="contact" class="contact" ref="contact">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Contact</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid
              fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam
              cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste
              officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-5 d-flex align-items-stretch">
              <div class="infos bg-white">
                <div class="address">
                  <i class="icofont-google-map"></i>
                  <h4>Location:</h4>
                  <p>Sénégal, Dakar, Medina rue 10</p>
                </div>

                <div class="email">
                  <i class="icofont-envelope"></i>
                  <h4>Email:</h4>
                  <p>arl.dakar@gmail.com</p>
                </div>

                <div class="phone">
                  <i class="icofont-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameborder="0"
                  style="border: 0; width: 100%; height: 290px"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="name">Your Email</label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div class="validate"></div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="name">Subject</label>
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div class="validate"></div>
                </div>
                <div class="form-group">
                  <label for="name">Message</label>
                  <textarea
                    class="form-control"
                    name="message"
                    rows="10"
                    data-rule="required"
                    data-msg="Please write something for us"
                  ></textarea>
                  <div class="validate"></div>
                </div>
                <div class="mb-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/clients/templates/Footer.vue";
import { required, maxLength, minLength, email } from "vuelidate/lib/validators";
import { mapGetters, mapState, mapActions } from "vuex";
import magnificPopup from "magnific-popup";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import $ from "jquery";

import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
//component code
export default {
  name: "Globale",

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    password: { required, minLength: minLength(10) },
    // select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },
  data: () => ({
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    //name: "",

    // email: "",
    // select: null,
    // password: "",
    // items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    // emailLogin: "",
    // passwordLogin: "",
    checkbox: false,
    dialog: false,
    dialog2: false,
    dialog3: false,
    tab: 0,
    tabs: [
      { name: "Login", icon: "mdi-account" },
      { name: "Register", icon: "mdi-account-plus" },
    ],
    valid: true,
    //login tabs form
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      (v) => !!v || "Email est obligatoire",
      (v) => /.+@.+\..+/.test(v) || "le mail doit être valide",
    ],
    emailRules: [
      (v) => !!v || "Email est obligatoire",
      (v) => /.+@.+\..+/.test(v) || "le mail doit être valide",
    ],

    show1: false,
    rules: {
      required: (value) => !!value || "Champ bligatoire.",
      min: (v) => (v && v.length >= 8) || "Minimun 8 characteres",
    },
    e1: 1,
  }),
  components: {
    Footer,
    FormWizard,
    TabContent,
  },
  computed: {
    ...mapState("modules", ["modules"]),

    ...mapState("rubriques", ["rubriques"]),

    ...mapState("typeAnimals", ["typeAnimals"]),
    passwordMatch() {
      return () => this.password === this.verify || "Password doit être identique";
    },
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("tu peut garder la session active!");
      return errors;
    },
    // selectErrors() {
    //   const errors = [];
    //   if (!this.$v.select.$dirty) return errors;
    //   !this.$v.select.required && errors.push("Item is required");
    //   return errors;
    // },
    // nameErrors() {
    //   const errors = [];
    //   if (!this.$v.name.$dirty) return errors;
    //   !this.$v.name.maxLength && errors.push("Name must be at most 10 characters long");
    //   !this.$v.name.required && errors.push("Name is required.");
    //   return errors;
    // },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.passWord && errors.push("le password doit être valide");
      !this.$v.password.required && errors.push("Mot de passe est obligatoire");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("le e-mail doit être valide");
      !this.$v.email.required && errors.push("E-mail est obligatoire");
      return errors;
    },
  },

  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
  },
  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },

    Login() {
      alert(this.loginPassword + " " + this.loginEmail);
    },
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...wl
        alert(this.$refs.loginForm.validate());
      }
    },
    cancel(e) {
      e.preventDefault();
      //e.$reset();
      $("#header").addClass("fixed-top");
      $("#topbar").addClass("fixed-top");

      this.dialog2 = false;
      this.dialog3 = false;
    },
    reset(e) {
      //this.$refs.form.$reset();
      e.preventDefault();
      //this.$refs.form.resetValidation();
      $("#header").addClass("fixed-top");
      $("#topbar").addClass("fixed-top");
      // this.firstName = '';
      // this.lastName = "";
      // this.email = "";
      // this.password = "";
      // this.verify = "";
      // this.loginPassword = "";
      // this.loginEmail = "";
      this.dialog2 = false;
      this.dialog3 = false;
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      $(".item-menu").removeClass("active");
      $("." + refName).addClass("active");
      window.scrollTo(0, top);
      //console.log();
      //console.log(top)
    },
    submit() {
      this.$v.$touch();
      $("#header").removeClass("fixed-top");
    },
    clear() {
      this.$v.$reset();
      //this.name = "";
      $("#header").addClass("fixed-top");
      $("#topbar").addClass("fixed-top");
      // this.email = "";
      // this.select = null;
      // this.checkbox = false;
      this.dialog2 = false;
      //
    },
  },
  created() {
    this.$store.dispatch("modules/getAllModules");
    this.$store.dispatch("rubriques/getAllRubriques");
    this.$store.dispatch("typeAnimals/getAllTypeAnimals");
  },
  mounted() {
    $(".venobox").venobox({
      border: "1px", // default: '0'
      bgcolor: "#fff", // default: '#fff'
      titleattr: "data-title", // default: 'title'
      numeratio: true, // default: false
      infinigall: true, // default: false
      share: ["facebook", "twitter", "download"], // default: []
    });

    $(".get-started-btn").click(function () {
      $("#topbar").removeClass("fixed-top");
      $("#header").removeClass("fixed-top");
    });
    $(".btn-adopter").click(function () {
      $("#topbar").removeClass("fixed-top");
      $("#header").removeClass("fixed-top");
    });

    $(".close").click(function () {
      $("#topbar").addClass("fixed-top");
      $("#header").addClass("fixed-top");
    });

    // $(window).on("load", function () {
    //   var $container = $(".portfolioContainer");
    //   $container.isotope({
    //     filter: "*",
    //     animationOptions: {
    //       duration: 750,
    //       easing: "linear",
    //       queue: false,
    //     },
    //   });

      // $(".portfolioFilter a").click(function () {
      //   $(".portfolioFilter .current").removeClass("current");
      //   $(this).addClass("current");

      //   var selector = $(this).attr("data-filter");
      //   $container.isotope({
      //     filter: selector,
      //     animationOptions: {
      //       duration: 750,
      //       easing: "linear",
      //       queue: false,
      //     },
      //   });
      //   return false;
      // });
    // });
    // $(".image-popup").magnificPopup({
    //   type: "image",
    //   closeOnContentClick: true,
    //   mainClass: "mfp-fade",
    //   gallery: {
    //     enabled: true,
    //     navigateByImgClick: true,
    //     preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    //   },
    // });
  },
};
</script>
