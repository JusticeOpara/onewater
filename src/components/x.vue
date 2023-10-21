

 
<script setup>
import { ref, onMounted, watch } from 'vue';

const mobile = ref(false);
const mobileNav = ref(false);
const windowWidth = ref(window.innerWidth);

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value;
};

const checkScreen = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 915) {
    mobile.value = true;
  } else {
    mobile.value = false;
  }
};

const closeMobileNav = (event) => {
  if (mobileNav.value && !event.target.closest('.mobile-nav-menu')) {
    mobileNav.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', checkScreen);
  checkScreen();
  document.addEventListener('click', closeMobileNav);
});

watch(mobile, (newValue) => {
  if (!newValue) {
    mobileNav.value = false;
  }
});
</script>