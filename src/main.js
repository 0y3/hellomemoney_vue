import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/css/clash-grotesk.css'; //font css
import '@fontsource/sora/100.css';
import '@fontsource/sora/200.css';
import '@fontsource/sora/300.css';
import '@fontsource/sora/400.css'; // Defaults to weight 400
import { library } from '@fortawesome/fontawesome-svg-core'; /* import the fontawesome core */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; /* import font awesome icon component */

import { fas } from "@fortawesome/free-solid-svg-icons";
// import {faHouse, faUser } from '@fortawesome/free-solid-svg-icons';


import './assets/css/globalstyle.css';
import './assets/css/responsive.css';
import './assets/css/theme-template.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// library.add(faUser,faHouse) ;
library.add(fas);/* add icons to the library */

const app = createApp(App)

app.component('fa-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
