<template>





    <section class="h-[100dvh]">
        <div class="mt-16">
            <Carousel />
        </div>



    </section>



    <!-- Section Available Cars -->
    <section class="h-[100dvh]">

        <div class="text-center my-10">
            <h1 class="text-xl font-semibold decoration-4 decoration-indigo-600 underline underline-offset-8">AVAILABLE
                CARS
            </h1>
        </div>

        <div class="mx-20">

            <div class="grid grid-cols-4 gap-6">

                <!-- Card -->
                <div v-for="n in 8" :key="n"
                    class="shadow-md hover:scale-110 transition duration-200 outline outline-1 outline-gray-200 rounded p-5">

                    <!-- Image -->
                    <div class="h-32 bg-slate-500">
                        <img class="bg-cover"
                            src="https://finescale.com/~/media/images/how-to/articles/2023/a-beginners-guide-to-building-plastic-model-car-kits/fsdbc0323_lede.jpg?h=400&la=en&mw=600&w=600"
                            alt="">
                    </div>

                    <!-- Details -->
                    <div class="text-center">
                        <h4 class="font-bold">Audi {{ n }}</h4>

                        <div class="text-sm mt-3 space-y-2">
                            <p>AC Fare: 100php/km & 3000php/day</p>
                            <p>Non-AC Fare: 100php/km & 3000php/day</p>

                        </div>
                    </div>

                </div>

            </div>




        </div>



    </section>













</template>

<script setup lang="ts">
    import Carousel from '../components/Carousel.vue';

</script>