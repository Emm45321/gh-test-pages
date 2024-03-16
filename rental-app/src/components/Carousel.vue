<template>


    <div id="default-carousel" class="relative w-full bg-slate-500 h-[100dvh]" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-full"> 
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://finescale.com/~/media/images/how-to/articles/2023/a-beginners-guide-to-building-plastic-model-car-kits/fsdbc0323_lede.jpg?h=400&la=en&mw=600&w=600"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://finescale.com/~/media/images/how-to/articles/2023/a-beginners-guide-to-building-plastic-model-car-kits/fsdbc0323_lede.jpg?h=400&la=en&mw=600&w=600"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://finescale.com/~/media/images/how-to/articles/2023/a-beginners-guide-to-building-plastic-model-car-kits/fsdbc0323_lede.jpg?h=400&la=en&mw=600&w=600"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://finescale.com/~/media/images/how-to/articles/2023/a-beginners-guide-to-building-plastic-model-car-kits/fsdbc0323_lede.jpg?h=400&la=en&mw=600&w=600"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 5 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://finescale.com/~/media/images/how-to/articles/2023/a-beginners-guide-to-building-plastic-model-car-kits/fsdbc0323_lede.jpg?h=400&la=en&mw=600&w=600"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
        </div>
        
        <!-- Slider controls -->
        <div class="text-center absolute top-0 left-0 right-0 bottom-0 border-2 border-red-300 z-40 grid place-items-center">
          <div>
              <h1 class="text-7xl text-white font-extrabold">Car Rentals</h1>
              <h3 class="text-2xl font-thin text-slate-400">Online Car Rental Services</h3>
          </div>
        </div>
    </div>

</template>

<script setup lang="ts">
    import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';

    onMounted(()=>{
        initFlowbite();
    });
</script>