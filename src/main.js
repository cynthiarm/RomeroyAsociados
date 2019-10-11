/*!

 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import NowUiKit from './plugins/now-ui-kit';
import SequentialEntrance from 'vue-sequential-entrance';
import 'vue-sequential-entrance/vue-sequential-entrance.css';
import * as VueGoogleMaps from 'vue2-google-maps';
import {
  faUserSecret,
  faMoneyBillWave,
  faUserCheck,
  faCalendarCheck,
  faTasks,
  faClipboardList,
  faCalculator,
  faMoneyCheckAlt,
  faMapMarkerAlt,
  faGlobeAmericas,
  faEnvelope,
  faPhone,
  faUser,
  faGavel
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import EasySlider from 'vue-easy-slider';
import VueI18n from 'vue-i18n';
import i18n from '@/plugins/i18n';

Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.use(VueI18n);
Vue.use(SequentialEntrance);
Vue.use(EasySlider);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAlHai9MslPilBuf1aQcszbwBsIhkq3IrE',
    libraries: 'places'
  },

  installComponents: true
});

library.add(faUserSecret);
library.add(faMoneyBillWave);
library.add(faUserCheck);
library.add(faCalendarCheck);
library.add(faTasks);
library.add(faClipboardList);
library.add(faCalculator);
library.add(faMoneyCheckAlt);
library.add(faGlobeAmericas);
library.add(faMapMarkerAlt);
library.add(faEnvelope);
library.add(faPhone);
library.add(faUser);
library.add(faGavel);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app');
