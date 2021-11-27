import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome';
import * as icons from './fa.available.js';

export default function configureFontAwesome() {
  library.add(...Object.values(icons));

  Vue.component('fa-icon', FontAwesomeIcon);
  Vue.component('fa-layer', FontAwesomeLayers);
  Vue.component('fa-text', FontAwesomeLayersText);
}
