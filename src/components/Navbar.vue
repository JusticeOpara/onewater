
<template>
    <nav class=" transition-all w-full h-[119px] bg-grefren-200 flex flex-col items-center justify-center md:bg-yellow-600 "
        id="menu-">
        <div class="bg-white flex items-center justify-between h-[84px] desktop:w-[1263px] px-[48px] py-[12px] w-full">
            <div class="w-[200px] h-[60px] ">
                <img src="../assets/onewater.svg" class="w-full" alt="one water logo" />
            </div>


            <div v-show="!mobile"
                class="flex items-center justify-center desktop:h-[40px] md:bg-yellow-600 mobile:hidden desktop:w-[353px]">
                <ul class="flex justify-center items-center list-none gap-6 cursor-pointer w-full h-full ">
                    <img src="../assets/search-icon.svg" class="w-[26px] h-auto" alt="search icon" />
                    <li><router-link to="/"
                            class="hover:text-[#007aff] text-[1.5rem] font-Commissioner text-[#000]">about</router-link>
                    </li>
                    <li><router-link to="/about"
                            class="hover:text-[#007aff] text-[1.5rem] font-Commissioner text-[#000]">event</router-link>
                    </li>
                    <li><router-link to="/about"
                            class="hover:text-[#007aff] text-[1.5rem] font-Commissioner text-[#000]">engage</router-link>
                    </li>
                    <img src="../assets/person-icon.svg" class="w-[28px]  h-auto" alt="person icon" />
                </ul>
            </div>


            <!-- for mobile navigation -->
            <div
                class="h-[45px] w-[45px] justify-center flex bg-red-500 desktop:hidden md:block cursor-pointer hover:text-primary transition-all ease-in-out duration-300">
                <img @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active': mobileNav }" src="../assets/navbar.svg"
                    class="w-[33.75px] h-auto cursor-pointer transition-[0.8s]" alt="navbar" />
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobile" dropdown-nav
                    class="flex fixed flex-col items-center w-full max-w-[250px] h-screen z-[100] px-[] bg-blue-500 top-0 overflow-y-auto overflow-x-hidden right-0 ">
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
            </transition>
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
            windowWidth: null
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        }
    },
    checkScreen() {
        this.windowWidth = window.innerWidth
        if (this.windowWidth <= 915) {
            this.mobile = true
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
    display: flex,
}
.mobile-nav-enter-active,
.mobile-nav-leave-active{
transition: 1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to{
    transform:translateX(-250px)
}
.mobile-nav-enter-to{
    transform: translateX(0);
}
</style>
 