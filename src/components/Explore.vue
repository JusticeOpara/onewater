
<template>
    <section class="w-[100%] h-[100%]  flex flex-col justify-center items-center bg-brown-200 mb-[4.8rem]">

        <div class="flex w-[100vw] items-center justify-center">
            <img src="../assets/dash.svg" class="w-[30%]" alt="dotted line" />
            <h1
                class=" mobile:text-base tracking-widest px-[2rem] font-Roboto uppercase font-light flex items-center gap-2">
                <span class="italic text-right font-Commissioner text-lg">Explore </span> <span
                    class="font-bold text-xl">Stories</span> <span
                    class="italic text-lg font-Commissioner text-left">online</span>
            </h1>

            <img src="../assets/dash.svg" class="w-[30%]" alt="dotted line" />
        </div>


        <!-- create a linke to read ,watch and listen -->
        <div class=" h-[45px]  w-[456px] my-[2.4rem]  flex justify-center items-center text-center font-bold  "> 
            <a href="/" class="cursor-pointer text-2xl font-Roboto text-center  min-w-[12rem] flex items-center justify-center hover:border-[2px] h-full hover:text-blue-200 transition-all duration-300 ease-in-out peer">read</a>

            <a href="/" class="cursor-pointer text-2xl  font-Roboto text-center  min-w-[12rem] flex items-center justify-center hover:border-[2px] h-full hover:text-blue-200 transition-all duration-300 ease-in-out peer">watch</a>

            <a href="/" class="cursor-pointer text-2xl font-Roboto text-center  min-w-[12rem] flex items-center justify-center hover:border-[2px] h-full hover:text-blue-200 transition-all duration-300 ease-in-out peer">listen</a>
        </div>



        <div class="desktop:w-[950px] h-[250px] bg-white border-black border rounded flex py-[12px] px-[12px] mb-[24px]">


            <div class="w-[40%] h-full">
                <img src="../assets/water-sarcity-2.jpeg" class="w-full  object-cover rounded-br-[5rem] group-hover:rounded-br-sm h-full 
                    md:rounded-sm group-hover:scale-110 rounded-sm transition-all duration-300 ease-in-out"
                    loading="lazy" alt="water saracity in india" />
            </div>

            <div class="w-[60%] h-full px-8 font-Commissioner flex flex-col justify-evenly">
                <div class="flex justify-between">
                    <div class="flex item-center gap-2">
                        <time class="whitespace-nowrap text-xs font-semibold"> October 09, 2023</time>
                        <p class="font-bold text-sm"> /byKarl Zimmermann</p>
                    </div>
                    <p class="text-sm font-bold italic">6 mins</p>
                </div>
                <div class="flex flex-col">
                    <p class="font-bold text-xl w-[450px] italic">From mountain glows to piped flows: <span
                            class="bg-red-200">Nepal's</span> <span class="bg-blue-200">water jounrey</span> </p>

                    <a href="/"
                        class="text-sm leading-[1.6rem] py-[2px] hover:bg-black hover:text-white w-[150px] font-bold
            tranisition-all duration-300 hover:border-transparent border-[0.1rem] border-black italic px-[1rem] mr-[1rem] mt-[1rem] ">Water
                        Supply</a>
                </div>


            </div>

        </div>


        <div class="desktop:w-[950px] h-[250px] bg-white border-black border rounded flex py-[12px] px-[12px] mb-[24px]">

            <div class="w-[60%] h-full px-8 font-Commissioner flex flex-col justify-evenly">
                <div class="flex justify-between">
                    <div class="flex item-center gap-2">
                        <time class="whitespace-nowrap text-xs font-semibold"> October 09, 2023</time>
                        <p class="font-bold text-sm"> /by Hani Sewilam and obinna Richfield Anah</p>
                    </div>
                    <p class="text-sm font-bold italic">6 mins</p>
                </div>
                <div class="flex flex-col">

                    <p class=" font-bold italic text-xl  ease-in-out transition-all 
duration-300 px-[0.6rem] w-[450px]"><span class="bg-red-200">Africa’s Voice on Water (AVOW) </span>–
                        Setting the stage for <span class="bg-blue-200">water wisdom in Africa</span></p>

                    <div class="flex gap-4">
                        <a href="/"
                            class="text-sm leading-[1.6rem] py-[2px] hover:bg-black hover:text-white px-[10px] tranisition-all duration-300 hover:border-transparent border-[0.1rem] border-black italic text-center font-black mt-[1rem] ">Culture</a>
                        <a href="/"
                            class="text-sm leading-[1.6rem] py-[2px] hover:bg-black hover:text-white px-[10px] tranisition-all duration-300 hover:border-transparent border-[0.1rem] border-black italic text-center font-black mt-[1rem]  ">Governance</a>
                        <a href="/"
                            class="text-sm leading-[1.6rem] py-[2px] hover:bg-black hover:text-white px-[10px] tranisition-all duration-300 hover:border-transparent border-[0.1rem] border-black italic text-center font-black mt-[1rem]  ">Water
                            Supply</a>
                    </div>

                </div>



            </div>
            <div class="w-[40%] h-full">
                <img src="../assets/banner.png" class="w-full  object-cover rounded-bl-[5rem] group-hover:rounded-bl-sm h-full 
        md:rounded-sm group-hover:scale-110 rounded-sm transition-all duration-300 ease-in-out" loading="lazy"
                    alt="water saracity in india" />
            </div>
        </div>

        <div class="text-black text-lg hover:text-blue-200 cursor-pointer transition-all duration-300 ease-in-out">Show more
        </div>

    </section>
</template>

<script>
export default {
    name: 'Explore',
    data() {
        return {

        }
    },

}

</script>

<style>
</style>
