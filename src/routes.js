import HomePage from './components/HomePage'
import Event from "./views/Events.vue"
import Discovery from '../components/Discovery.vue';

const routes = [
    
  { path: '/', component: HomePage },
  { path: '/event', component: Event },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
