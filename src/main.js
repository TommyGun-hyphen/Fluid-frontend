// import './assets/main.css'
// import './style.css'
import 'primevue/resources/themes/aura-light-purple/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';
import Tooltip from 'primevue/tooltip';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
});
app.directive('tooltip', Tooltip);

app.mount('#app')
