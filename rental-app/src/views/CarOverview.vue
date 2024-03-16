<template>





    <section class=" h-[500px]">
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
            </div>




        </div>



    </section>

</template>

<script setup lang="ts">
import { onMounted } from 'vue';


    onMounted(()=> window.scrollTo(0, 0))

</script>