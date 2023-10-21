<template>
    <div
        class="md:items-center text-white w-full px-[9.6rem] md:px-[2.4rem] pt-[4.8rem] text-xl bg-black font-Commissioner">
        <div class="flex w-full justify-between items-end md:flex-wrap md:items-center bg-blue-700">

            <div class="flex flex-col md:w-[17rem]">
                <a href="/" class="hover:text-blue-300 ">About us</a><a href="/"
                    class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Mission</a>
                <a href="/" class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Values</a>
                <a href="/" class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Our Team</a>
            </div>

            <div class="flex flex-col md:w-[17rem] xxsm:mt-[2.4rem]">
                <a href="/" class="hover:text-blue-300">Privacy</a>
                <a href="/" class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Partners</a>
                <a href="/" target="_blank" rel="noreferrer"
                    class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Careers</a>
                <a href="/" class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Imprint &amp;
                    Contact</a>
            </div>
            <div class="flex flex-col md:w-[17rem] [@media(max-width:580px)]:mt-[2.4rem]">
                <a href="/" class="hover:text-blue-300">Impact</a>
                <a href="/" class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Engage</a>
                <a href="/" class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Services</a>
                <a href="/" class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem] sm:text-[17*px]">Water professionals</a>
            </div>

            <div class="flex flex-col self-end md:w-[17rem] md:mt-[2.4rem]"><a href="/"
                    class="hover:text-blue-300 mt-[0.6rem] sm:mt-0">Editorial Policies</a><a href="/"
                    class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem] sm:text-[17px]">Terms &amp; Conditions</a>
            </div>
            <div
                class="flex flex-col text-white md:mt-[4.8rem] sm:items-center md:absolute md:bottom-[7.2rem] md:left-[50%] md:translate-x-[-50%]">
                <a href="/" class="hover:text-blue-300 text-center">Contact us</a>
                <div class="flex mt-[1.2rem] md:mt-[2.4rem] max-w-[9.5rem] flex-wrap">
                    <a href="https://www.facebook.com/onewater.blue" target="_blank" rel="noreferrer">
                        <button href="" type="button"
                            class="button rounded-[50%] bg-white hover:bg-blue-300 group w-[3.5rem] h-[3.5rem] px-[0.8rem] py-[0.8rem] mr-[2.4rem]">

                            <img src="../assets/facebook.svg" class="w-[50px] h-auto" alt="facebook-icon" />

                        </button>
                    </a>

                    <a href="" target="_blank" rel="noreferrer">
                        <button href="" type="button"
                            class="button rounded-[50%] bg-white hover:bg-blue-300 group w-[3.5rem] h-[3.5rem] px-[0.8rem] py-[0.8rem]">
                            <img src="../assets/instargram.svg" class="w-[50px] h-auto" alt="instagram-icon" />


                        </button>
                    </a>

                    <a href="" target="_blank" rel="noreferrer">
                        <button href="" type="button"
                            class="button rounded-[50%] bg-white hover:bg-blue-300 group w-[3.5rem] h-[3.5rem] px-[0.8rem] py-[0.8rem] mt-[1.6rem] mr-[2.4rem]">

                            <img src="../assets/linkedin.svg" class="w-[50px] h-auto" alt="linkedin-icon" />
                        </button>
                    </a>

                    <a href="" target="_blank" rel="noreferrer">
                        <button href="" type="button"
                            class="button rounded-[50%] bg-white hover:bg-blue-300 group w-[3.5rem] h-[3.5rem] px-[0.8rem] py-[0.8rem] mt-[1.6rem]">
                            <img src="../assets/twitter.svg" class="w-[50px] h-auto" alt=" twitter-icon" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div class="mt-[4.8rem] mb-[1.2rem] sm:mt-[2.4rem] text-white text-sm md:pt-[19rem] text-center">
            Copyright @ 2023
            WaterSciencePolicy</div>
    </div>
</template>












<template>
    <nav class=" transition-all w-full h-[119px] flex flex-col items-center justify-center md:bg-yellow-600 " id="menu-">
        <div class="bg-white flex items-center justify-between h-[84px] desktop:w-[1263px] px-[48px] py-[12px] w-full">
            <div class="w-[200px] h-[60px] mt-5 ">
                <img src="../assets/onewater.svg" class="w-full" alt="one water logo" />
            </div>


            <div v-show="!mobile"
                class="flex items-center justify-center desktop:h-[40px] md:bg-yellow-600 mobile:hidden desktop:w-[353px]">
                <ul class="flex justify-center items-center list-none gap-6 cursor-pointer w-full h-full ">
                    <img src="../assets/search-icon.svg" class="w-[26px] h-auto" alt="search icon" />
                    <li><router-link to="/"
                            class="hover:text-[#007aff] text-[1.3rem] font-medium font-Commissioner text-[#000]">about</router-link>
                    </li>
                    <li><router-link to="/about"
                            class="hover:text-[#007aff] text-[1.3rem] font-medium font-Commissioner text-[#000]">event</router-link>
                    </li>
                    <li><router-link to="/about"
                            class="hover:text-[#007aff] text-[1.3rem] font-medium font-Commissioner text-[#000]">engage</router-link>
                    </li>
                    <img src="../assets/person-icon.svg" class="w-[28px]  h-auto" alt="person icon" />
                </ul>
            </div>


            <!-- for mobile navigation -->
            <div
                class="h-[45px] w-[45px] justify-center bg-green-100 flex mobile:visible desktop:hidden md:block cursor-pointer hover:text-primary transition-all ease-in-out duration-300">
                <img @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active': mobileNav }"
                    src="../assets/navbar.svg" class="w-[33.75px] h-auto cursor-pointer transition-[0.8s]" alt="navbar" />
            </div>
            <Transition name="mobile-nav">
                <ul v-show="mobile" dropdown-nav
                    class="flex fixed flex-col items-center w-full max-w-[250px] h-screen z-[100]  bg-blue-500 top-0  left-0 ">
                    <img src="../assets/search-icon.svg" class="w-[26px] h-auto" alt="search icon" />
                    <li><router-link to="/"
                            class="hover:text-[#007aff] text-[1.5rem] mr-0 font-Commissioner text-[#000]">about</router-link>
                    </li>
                    <li><router-link to="/about"
                            class="hover:text-[#007aff] text-[1.5rem] mr-0 font-Commissioner text-[#000]">event</router-link>
                    </li>
                    <li><router-link to="/about"
                            class="hover:text-[#007aff] text-[1.5rem] mr-0 font-Commissioner text-[#000]">engage</router-link>
                    </li>
                    <img src="../assets/person-icon.svg" class="w-[28px] h-auto" alt="person icon" />
                </ul>
            </Transition>
        </div>


        <div class="text-base font-Roboto font-medium tracking-widest overflow-hidden whitespace-nowrap   bg-red-300">

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
                        <!---->
                    </li><!--]-->
                </ul>


            </marquee>
        </div>

    </nav>
</template>

<script>


export default {
    name: 'Navbar',
    data() {
        return {
            mobile: null,
            mobileNav: null,

        }
    },
    
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen(); // Call the method with parentheses
    },

    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
            console.log(mobileNav, "--mobileNav")
        }

    },
    checkScreen() {
        this.windowWidth = window.innerWidth

        if (this.windowWidth <= 915) {
            this.mobile = true
            console.log(this.mobile, "--this mobile sef")
            return
        }
        this.mobile = false
        this.mobileNav = false
        return
    }

}
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
 
