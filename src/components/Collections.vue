<template>
    <section class="w-[100%] h-[100%] mb-10 flex flex-col items-center ">

        <div class="flex w-[100vw] items-center justify-center">
            <img src="../assets/dash.svg" class="w-[30%]" alt="dotted line" />
            <h1 class="text-2xl font-bold tracking-widest px-[4rem] font-Roboto uppercase">Collections</h1>
            <img src="../assets/dash.svg" class="w-[30%]" alt="dotted line" />
        </div>

        <div class="flex justify-center flex-wrap mt-[4rem] w-[500px] mobile:mt-[0px] hr-[201.67px]">

            <a href="/collections/biodiversity"
                class="text-between md:text-sm hover:bg-black hover:text-white 
            tranisition-all duration-300 hover:border-transparent h-[28.33px]
            border-[0.1rem] border-grey px-[0.6rem] mr-[1.2rem] mt-[1.2rem] md:mt-[1.2rem] font-Commissioner">Biodiversity</a>
            <a href="/collections/biodiversity" class="text-between md:text-sm hover:bg-black hover:text-white 
            tranisition-all duration-300 hover:border-transparent h-[28.33px]
            border-[0.1rem] border-grey4 px-[0.6rem] mr-[1.2rem] mt-[1.2rem] md:mt-[1.2rem]">Clicular Economy</a>
            <a href="/collections/biodiversity" class="text-between md:text-sm hover:bg-black hover:text-white 
            tranisition-all duration-300 hover:border-transparent h-[28.33px]
            border-[0.1rem] border-grey4 px-[0.6rem] mr-[1.2rem] mt-[1.2rem] md:mt-[1.2rem]">Climate Change</a>
            <a href="/collections/biodiversity" class="text-between md:text-sm hover:bg-black hover:text-white 
            tranisition-all duration-300 hover:border-transparent h-[28.33px]
            border-[0.1rem] border-grey4 px-[0.6rem] mr-[1.2rem] mt-[1.2rem] md:mt-[1.2rem]">Food and Agriculture</a>
            <a href="/collections/biodiversity" class="text-between md:text-sm hover:bg-black hover:text-white 
            tranisition-all duration-300 hover:border-transparent h-[28.33px]
            border-[0.1rem] border-grey4 px-[0.6rem] mr-[1.2rem] mt-[1.2rem] md:mt-[1.2rem]">Conservation</a>
        </div>

        <div class="mobile:hidden flex flex-col items-center justify-center">
            <img src="../assets/down-arrow.svg" class="w-[70px] h-auto" alt="down-arrow" />
            <h1 class="uppercase font-bold tracking-widest text-black text-2xl text-center font-Roboto ">Subscribe</h1>


            <div class="h-[52px] bg-red-200 rounded-[8rem]  flex w-[1000px] px-[6.2rem] py-[0.6rem]  relative items-center max-w-[100rem] divide-x-2 divide-blue-300">
            
                <div class="relative h-full w-full ">
                    <input
                        class="peer h-full w-full border-0 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  outline-none transition-all    "
                        placeholder=" " />

                    <label
                        class="bg-bluge-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex 
                        h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all 
                        before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 
                        before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 
                        before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block 
                        after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r 
                        after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm 
                        peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 
                        peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent 
                        peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-l-2  peer-focus:after:border-t-2 
                        peer-focus:after:border-r-2 peer-disabled:text-transparent peer-disabled:before:border-transparent 
                        peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Firstname
                    </label>
                </div>
                <div class="relative h-full w-full ">
                    <input
                        class="peer h-full w-full border-0 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  outline-none transition-all    "
                        placeholder=" " />

                    <label
                        class="bg-bluge-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex 
                        h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all 
                        before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 
                        before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 
                        before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block 
                        after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r 
                        after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm 
                        peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 
                        peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent 
                        peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-l-2  peer-focus:after:border-t-2 
                        peer-focus:after:border-r-2 peer-disabled:text-transparent peer-disabled:before:border-transparent 
                        peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Last Name
                    </label>
                </div>

                <div class="relative h-full w-full ">
                    <input
                        class="peer h-full w-full border-0 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  outline-none transition-all    "
                        placeholder=" " />

                    <label
                        class="bg-bluge-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex 
                        h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all 
                        before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 
                        before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 
                        before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block 
                        after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r 
                        after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm 
                        peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 
                        peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent 
                        peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-l-2  peer-focus:after:border-t-2 
                        peer-focus:after:border-r-2 peer-disabled:text-transparent peer-disabled:before:border-transparent 
                        peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Email
                    </label>
                </div>
            </div>

        </div>

    </section>
</template>
    
<script>
export default {
    name: 'Collections',
    data() {
        return {

        }
    },

}
</script>