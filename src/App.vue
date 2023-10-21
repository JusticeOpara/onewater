
<template>
  <Navbar />
  <Discovery />
  <Explore/>
  <Collection/>
  <Footer/>

</template>


<script >
import Navbar from './components/Navbar.vue';
import Discovery from './components/Discovery.vue';
import Collection from './components/Collections.vue'
import Footer from './components/Footer.vue'
import Explore from './components/Explore.vue';

export default {
  components: {
    Navbar,
    Discovery,
    Explore,
    Collection,
    Footer,
    
},

  data() {
    return {


    };
  },

}
</script>

