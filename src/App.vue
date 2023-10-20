
<template>
  <Navbar />
  <Discovery />
  <Collection/>
  <Footer/>
</template>


<script >
import Navbar from './components/Navbar.vue';
import Discovery from './components/Discovery.vue';
import Collection from './components/Collections.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Discovery,
    Collection,
    Footer

  },

  data() {
    return {


    };
  },

}
</script>

