<template>





    <section class="h-screen">
        <div class="img-div bg-cover bg-no-repeat bg-center h-full" >
            <div class="h-full bg-gradient-to-t from-black from-5%">
                <div class="grid place-items-center h-full">
                    <div class="w-9/12 text-gray-200">
                        <h1 class="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-l from-indigo-600 to-slate-300">FIND THE RIGHT CAR FOR YOU</h1>
                        <p class="text-2xl mt-5 text-slate-400">Find the right car for you.</p>

                        <button class="px-5 py-2 mt-5 bg-indigo-700">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>





    <!-- Section Available Cars -->
    <section class="h-screen">

        <div class="text-center my-10">
            <h1 class="text-xl font-semibold decoration-4 decoration-indigo-600 underline underline-offset-8">AVAILABLE
                CARS
            </h1>
        </div>

        <div class="relative">


            <!-- Search -->
            <div class="sticky top-[4.5rem] bg-white p-2 mb-3">
                <input type="text" class="border border-slate-300 focus:border-indigo-600 focus:ring-0 rounded-md bg-slate-100 text-sm w-[300px] placeholder:text-indigo-500 font-medium" placeholder="Search here">
            </div>

            <div class="grid grid-cols-2 gap-4 mx-2">


                <!-- Card -->
                <RouterLink to="/caroverview" v-for="n in 8" :key="n"
                    class="flex flex-col shadow md:hover:scale-110 transition duration-200 outline outline-1 outline-gray-200 h-[270px]">

                    <!-- Image -->
                    <div class=" h-44 bg-slate-500">
                        <img class="bg-cover"
                            src="https://finescale.com/~/media/images/how-to/articles/2023/a-beginners-guide-to-building-plastic-model-car-kits/fsdbc0323_lede.jpg?h=400&la=en&mw=600&w=600"
                            alt="">
                    </div>

                    <!-- Details -->
                    <div class="px-3 py-2 flex-grow flex flex-col text-sm">
                        <!-- Title card -->
                        <h4 class="font-medium line-clamp-2">[Car title goes with two lines and truncate when exceeded]</h4>

                        <div class="mt-auto flex items-center gap-1">
                            <div class="flex text-base">
                                <p class="font-bold text-indigo-500">₱70</p>
                                <div><span class="font-thin text-sm">/km</span></div>
                            </div>

                            <span class="text-lg">-</span>

                            <div class="flex text-base">
                                <p class="font-bold text-indigo-500">₱1000</p>
                                <div><span class="font-thin text-sm">/day</span></div>
                            </div>
                        </div>
                    </div>

                </RouterLink>

            </div>




        </div>



    </section>

</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router';

</script>

<style>
.img-div{
    background-image: url('../assets/car.jpg');
}
</style>