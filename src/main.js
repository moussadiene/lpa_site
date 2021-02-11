import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';


import AOS from "aos";
import './assets/tailwind.css'
AOS.init();

Vue.use(require('vue-moment'));

import magnifique from "magnific-popup";
Vue.use(magnifique)

import isotope from "vueisotope"
Vue.use(isotope)


// lazy load
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)

// lightbox component
import LightBox from 'vue-image-lightbox'
Vue.use(LightBox)


require('./assets/vendor/bootstrap/css/bootstrap.min.css');
require('./assets/vendor/icofont/icofont.min.css');
require('./assets/vendor/boxicons/css/boxicons.min.css');
require('./assets/vendor/remixicon/remixicon.css');
require('./assets/vendor/venobox/venobox.css');
require('./assets/vendor/owl.carousel/assets/owl.carousel.min.css');
require('./assets/vendor/aos/aos.css');


require('./assets/css/core.css');
require('./assets/css/components.css');
require('./assets/css/menu.css');
require('./assets/css/pages.css');


require('./assets/css/style.css');
require('./assets/css/test.css');
require('./assets/vendor/jquery.steps/demo/css/jquery.steps.css');


require('./assets/vendor/jquery/jquery.min.js');
require('./assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
require('./assets/vendor/jquery.easing/jquery.easing.min.js');
// table view 
require('./assets/vendor/jquery.steps/build/jquery.steps.min.js');
require('./assets/vendor/jquery-validation/dist/jquery.validate.min.js');

// admin 
// import './assets/vendor/pages/jquery.chat.js';
// import './assets/vendor/pages/jquery.dashboad.js';
// import './assets/vendor/pages/jquery.todo.js';

require('./assets/vendor/venobox/venobox.min.js');
require('./assets/vendor/aos/aos.js');
require('./assets/js/main.js');

import VueFormWizard from 'vue-form-wizard'
Vue.use(VueFormWizard)

import vuelidate from "vuelidate"
Vue.use(vuelidate)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,

  render: h => h(App)
}).$mount('#app')
