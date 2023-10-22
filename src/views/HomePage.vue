<template>
    <p>Home</p>
    <Discovery />
    <Explore />
    <Collections />
    
</template>



<script>
import Explore from '../components/Explore.vue';
import Collections from '../components/Collections.vue';
import Discovery from '../components/Discovery.vue';

export default {
    name:"HomePage",
    components: {
        Discovery,
        Explore,
        Collections,
    },

    data() {
        return {


        };
    },

}
</script>