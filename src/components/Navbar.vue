
<template>
    <nav class=" transition-all w-full h-[119px] flex flex-col items-center justify-center md:bg-yellow-600 " id="menu-">
        <div class="bg-white flex items-center justify-between h-[84px] desktop:w-[1263px] px-[48px] py-[12px] w-full">
            <div class="w-[200px] h-[60px] mt-5 ">
                <img src="../assets/onewater.svg" class="w-full" alt="one water logo" />
            </div>


            <div v-show="!mobile"
                class="flex items-center justify-center desktop:h-[40px] md:bg-yellow-600 mobile:hidden desktop:w-[353px]  ">
                <ul class="flex justify-center items-center list-none gap-6 cursor-pointer w-full h-full ">
                    <!-- <input class="bg-[#f0f0f0] rounded-[0.2rem] max-height-[30rem] outline-none resize-none " type="text" placeholder="search"/> -->
                    
                    <img src="../assets/search-icon.svg" class="w-[26px] h-auto" alt="search icon" />
                    <li><router-link to="/"
                            class="hover:text-[#007aff] text-[1.3rem] font-medium font-Commissioner text-[#000]">about</router-link>
                    </li>
                    <li><router-link to="/event"
                            class="hover:text-[#007aff] text-[1.3rem] font-medium font-Commissioner text-[#000]">event</router-link>
                    </li>
                    <li><router-link to="/"
                            class="hover:text-[#007aff] text-[1.3rem] font-medium font-Commissioner text-[#000]">engage</router-link>
                    </li>
                    <img src="../assets/person-icon.svg" class="w-[28px]  h-auto" alt="person icon" />
                </ul>
            </div>

            <div @click="toggleMobileNav"
                class="h-[45px] w-[45px] justify-center bg-green-100 flex mobile:visible desktop:hidden md:block cursor-pointer hover:text-primary transition-all ease-in-out duration-300">
                <img   v-show="mobile" :class="{ 'icon-active': mobileNav }" src="../assets/navbar.svg"
                    class="w-[33.75px] h-auto cursor-pointer transition-[0.8s]" alt="navbar" />
            </div>

            <Transition name="mobile-nav">
                <ul v-show="mobileNav"  @click.stop=""
                    class="flex fixed flex-col items-center justify-evenly w-full max-w-[250px] h-screen z-[100]  bg-white top-0  left-0 font-Roboto">
                  
                  <div class="w-[120px] h-[45px] bg-black text-white flex justify-center items-center">
                   <span> English</span> 
                  </div>
                    <li class="flex bg-white gap-5"> 
                         <img src="../assets/search-icon.svg" class="w-[26px] h-auto" alt="search icon" />
                         <router-link  class="hover:text-[#007aff] text-xl mr-0  text-[#000]">search</router-link></li>
                   
                    <li class="flex gap-5">
                        <img src="../assets/eye.svg" class="w-[26px] h-auto" alt="about-icon"/>
                        <router-link to="/"
                            class="hover:text-[#007aff] text-xl mr-0 text-[#000]">about</router-link>
                    </li>
                    <li class="flex gap-5">
                        <img src="../assets/event.svg" class="w-[26px] h-auto" alt="event-icon"/>
                        <router-link to="/about"
                            class="hover:text-[#007aff] text-xl mr-0 text-[#000]">event</router-link>
                    </li>
                    <li class="flex gap-5">
                        <img src="../assets/person-icon.svg"  class="w-[26px] h-auto"  alt=" person-icon"/>
                        <router-link to="/about"
                            class="hover:text-[#007aff] text-xl mr-0 font-light text-[#000]">engage</router-link>
                    </li>
                
                    <li class="flex gap-5">
                        
                        <img src="../assets/person-icon.svg"  class="w-[26px] h-auto"  alt=" person-icon"/>
                        <router-link to="/about"
                            class="hover:text-[#007aff] text-xl mr-0 font-light text-[#000]">Podcasts</router-link>
                    </li>
                    
                    <h1 class="font-bold font-Roboto text-xl leading-normal">Collection</h1>
                </ul>
            </Transition>
        </div>


        <div class="text-base font-Roboto font-medium tracking-widest overflow-hidden whitespace-nowrap border-y-[1px] border-black">

            <marquee>

                <!-- <div class="marquee marquee--hover-pause h-[3.5rem] tracking-widest font-bely font-semibold text-base md:text-sm text-dark" -->

                <ul class="marquee__content">
                    <!--[-->
                    <li><span>
                            <p>We are looking for photostories <a
                                    href="https://watersciencepolicy.notion.site/Call-for-Researchers-articles-Stories-of-the-Euphrates-247b0cb3fe564de99ebf9c838a70692b?pvs=4"
                                    style="text-decoration: underline;">[Click here]</a> as well as article contribution
                                from researchers and development professionals with a focus on the Euphrates in Syria
                                <a href="https://watersciencepolicy.notion.site/Call-for-Researchers-articles-Stories-of-the-Euphrates-247b0cb3fe564de99ebf9c838a70692b?pvs=4"
                                    style="text-decoration: underline;">[Click here]</a>. Deadline 31st of October! •
                                And
                                our partners at AMCOW are welcoming contributions for the next edition of Africa's Voice
                                on
                                Water <a
                                    href="https://watersciencepolicy.notion.site/Africa-s-Voice-on-Water-a2ecd685bc9e43d5acdc4ff3a9a8db8f?pvs=4"
                                    style="text-decoration: underline;">[Click here]</a>.
                            </p>
                        </span>
                    
                    </li>
                </ul>


            </marquee>
        </div>

    </nav>
</template>
                    
<!-- input__field[data-v-2f38afa9] {
    background: #f0f0f0;
    border-radius: 0.2rem;
    color: #000;
    font-family: greycliff-cf;
    height: 100%;
    max-height: 30rem;
    outline: none;
    padding: 1.2rem 0.8rem 0.6rem;
    resize: none;
    vertical-align: top;
    width: 100%;
} -->

<script setup>

import { ref, onMounted } from 'vue';

const mobile = ref(false);
const mobileNav = ref(false); // Initialize mobileNav to false
const windowWidth = ref(window.innerWidth);

const toggleMobileNav = () => {
  console.log('toggleMobileNav called'); // Add this line for debugging
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

onMounted(() => {
  window.addEventListener('resize', checkScreen);
  checkScreen();
});
</script>

 
  
<style>
.icon-active {
    transform: rotate(180deg);
}

.dropdown-nav {
    display: flex;
    position: fixed;
    flex-direction: column;
    background-color: brown;
    width: 100%;
    max-width: 250px;
    top: 10px;
    right: 0;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px)
}

.mobile-nav-enter-to {
    transform: translateX(0);
}
</style>
 