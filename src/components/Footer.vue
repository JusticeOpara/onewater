<template>
    <div class="md:items-center text-white w-full px-[9.6rem] md:px-[2.4rem] pt-[4.8rem] text-xl bg-black font-Commissioner">
        <div class="flex w-full justify-between items-end md:flex-wrap md:items-center">

            <div class="flex flex-col md:w-[17rem]">
                <router-link class="hover:text-blue-300 ">About us</router-link><router-link
                    class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Mission</router-link>
                <router-link class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Values</router-link>
                <router-link class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Our Team</router-link>
            </div>

            <div class="flex flex-col md:w-[17rem] xxsm:mt-[2.4rem]">
                <router-link class="hover:text-blue-300">Privacy</router-link>
                <router-link class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Partners</router-link>
                <router-link target="_blank" rel="noreferrer"
                    class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Careers</router-link>
                <router-link class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Imprint &amp;
                    Contact</router-link>
            </div>
            <div class="flex flex-col md:w-[17rem] [@media(max-width:580px)]:mt-[2.4rem]">
                <router-link class="hover:text-blue-300">Impact</router-link>
                <router-link class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Engage</router-link>
                <router-link class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem]">Services</router-link>
                <router-link class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem] sm:text-[17*px]">Water professionals</router-link>
            </div>

            <div class="flex flex-col self-end md:w-[17rem] md:mt-[2.4rem]"><router-link
                    class="hover:text-blue-300 mt-[0.6rem] sm:mt-0">Editorial Policies</router-link><router-link
                    class="hover:text-blue-300 mt-[0.6rem] sm:mt-[1.2rem] sm:text-[17px]">Terms &amp; Conditions</router-link>
            </div>
            <div
                class="flex flex-col text-white md:mt-[4.8rem] sm:items-center md:absolute md:bottom-[7.2rem] md:left-[50%] md:translate-x-[-50%]">
                <router-link class="hover:text-blue-300 text-center">Contact us</router-link>
                <div class="flex mt-[1.2rem] md:mt-[2.4rem] max-w-[9.5rem] flex-wrap">
                    <router-link href="https://www.facebook.com/onewater.blue" target="_blank" rel="noreferrer">
                        <button href="" type="button"
                            class="button rounded-[50%] bg-white hover:bg-blue-300 group w-[3.5rem] h-[3.5rem] px-[0.8rem] py-[0.8rem] mr-[2.4rem]">

                          <img src="../assets/facebook.svg" class="w-[50px] h-auto" alt="facebook-icon"/>

                        </button>
                    </router-link>

                    <router-link target="_blank" rel="noreferrer">
                        <button href="" type="button"
                            class="button rounded-[50%] bg-white hover:bg-blue-300 group w-[3.5rem] h-[3.5rem] px-[0.8rem] py-[0.8rem]">
                            <img src="../assets/instargram.svg" class="w-[50px] h-auto" alt="instagram-icon" />


                        </button>
                    </router-link>

                    <router-link target="_blank" rel="noreferrer">
                        <button href="" type="button"
                            class="button rounded-[50%] bg-white hover:bg-blue-300 group w-[3.5rem] h-[3.5rem] px-[0.8rem] py-[0.8rem] mt-[1.6rem] mr-[2.4rem]">

                            <img src="../assets/linkedin.svg" class="w-[50px] h-auto" alt="linkedin-icon" />
                        </button>
                    </router-link>

                    <router-link target="_blank" rel="noreferrer">
                        <button href="" type="button"
                            class="button rounded-[50%] bg-white hover:bg-blue-300 group w-[3.5rem] h-[3.5rem] px-[0.8rem] py-[0.8rem] mt-[1.6rem]">
                            <img src="../assets/twitter.svg" class="w-[50px] h-auto" alt=" twitter-icon" />
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="mt-[4.8rem] mb-[1.2rem] sm:mt-[2.4rem] text-white text-sm md:pt-[19rem] text-center">
            Copyright @ 2023
            WaterSciencePolicy</div>
    </div>
</template>
    
<script>

export default {
    name: 'Footer',
    data() {
        return {

        }
    },

}
</script>