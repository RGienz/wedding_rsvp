<script setup lang="ts">

</script>
<template>
    <div>
        <!-- first page -->
        <div class="relative h-screen flex items-center justify-center overflow-hidden">
            <img
                src="../../reference/image/sageGreen4.png"
                alt="firstPage"
                class="absolute inset-0 w-full h-full object-cover opacity-80 animate-slow-zoom"
                style="animation-delay: 0.5s;"
            />
            <div class="relative z-10 flex flex-col items-center text-center w-full max-w-xs sm:max-w-sm md:max-w-md px-6 text-[#2c2c2c] transform scale-95 sm:scale-100 lg:scale-105 xl:scale-110 transition-transform duration-300">
                <p class="uppercase text-[10px] trackin-[0.25em] max-w-sm px-6 text-[#2c2c2c]">Together with their Family</p>
                <div class="relative my-3 sm:my-4 md:my-6 flex flex-col items-center">
                    <p class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-windsong leading-none -translate-x-[10px]">Renz</p>

                    <div class="flex items-center justify-center my-[-15px] sm:my-[-10px]">
                        <span class="text-lg  sm:text-[30px] font-windsong italic text-gray-500 lowercase ml-2 sm:ml-10 ">and</span>
                    </div>

                    <p class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-windsong leading-none translate-x-[15px] mt-1 sm:mt-2">Gie</p>
                </div>


                    <div class="uppercase text-[11px] tracking-[0.2em] leading-relaxed font-sans text-gray-600 mt-10 mb-8">
                        <p>Invite you to their</p>
                        <p class="mt-1">Wedding Celebration</p>
                    </div>
                    
                    <div class="text-2xl font-light font-sans tracking-[0.15em] text-gray-800 border-y border-gray-400 py-2 w-full max-w-[240px] ">
                        XX <span class="text-gray-300 font-thin mx-1">|</span> XX <span class="text-gray-300 font-thin mx-1">|</span> XXXX
                    </div>
                    
                    <div class="uppercase text-[11px] tracking-[0.2em] text-gray-600 mt-6 space-y-4">
                        <div>
                            <p class="text-[9px] text-gray-400 mb-0.5">At</p>
                            <p class="font-medium text-gray-800">X:XX XX</p>
                        </div>

                        <div class="">
                                <p class="font-medium text-gray-800 ">Casa Hotel</p>
                                <p class="text-[10px] text-gray-500 lowercase first-letter:uppercase">1548 street los angeles ca</p>
                        </div>
                    </div>

                    <p class="font-medium text-[10px] sm:text-2xl md:text-3xl text-gray-500 mt-8 sm:mt-12 uppercase ">
                        reception to follow
                    </p>
                    <div class="absolute -bottom-16 sm:-bottom-20 animate-bounce text-stone-400 text-xs tracking-widest uppercase opacity-60">
                        ↓ Scroll Down
                    </div>
                    
            </div>

        </div>
        <!-- SECOND PAGE -->
            <section class="relative h-screen w-full flex items-start justify-center overflow-hidden snap-start p-3">
                <div>
                    <img
                        src="../../reference/image/sageGreen4.png"
                        alt="firstPage"
                        class="absolute inset-0 w-full h-full object-cover opacity-80 animate-slow-zoom"
                        style="animation-delay: 0.5s;"
                    />
                    <div class="relative z-10 text-center text-[#2c2c2c]">
                        <h2 class="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.2em] uppercase">Our Story</h2>
                        <div class="w-12 h-[1px] bg-stone-400 mx-auto my-4"></div>
                        <p class="mt-2 text-gray-500">test2</p>
                    </div>
                </div>
            </section>

            <!-- THIRD PAGE -->
            <section class="relative h-screen w-full flex items-start justify-center overflow-hidden snap-start p-3">
                <div>
                    <img
                        src="../../reference/image/sageGreen4.png"
                        alt="firstPage"
                        class="absolute inset-0 w-full h-full object-cover opacity-80 animate-slow-zoom"
                        style="animation-delay: 0.5s;"
                    />
                    <div class="relative z-10 text-center text-[#2c2c2c]">
                        <h2 class="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.2em] uppercase">Guest Attendance Concierge</h2>
                        <div class="w-12 h-[1px] bg-stone-400 mx-auto my-4"></div>
                        <p class="mt-2 text-gray-500">test3</p>
                    </div>
                </div>
            </section>

            <!-- FOURTH PAGE -->
            <section class="relative h-screen w-full flex items-start justify-center overflow-hidden snap-start p-3">
                <div>
                    <img
                        src="../../reference/image/sageGreen4.png"
                        alt="firstPage"
                        class="absolute inset-0 w-full h-full object-cover opacity-80 animate-slow-zoom"
                        style="animation-delay: 0.5s;"
                    />
                    <div class="relative z-10 text-center text-[#2c2c2c]">
                        <h2 class="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.2em] uppercase">RSVP</h2>
                        <div class="w-12 h-[1px] bg-stone-400 mx-auto my-4"></div>
                        <p class="mt-2 text-gray-500">test4</p>
                    </div>
                </div>
            </section>
    </div>
</template>

<style>
@font-face {
    font-family: 'WindSong';
    src: url('../../reference//font/WindSong/WindSong-Regular.ttf') format('truetype'),  
         url('../../reference//font/WindSong/WindSong-Regular.ttf   ') format('woff'),
         url('../../reference//font/WindSong/WindSong-Regular.ttf   ') format('woff2');
    font-weight: normal;
    font-style: normal;
}

body {
    /* font-family: 'WindSong', sans-serif; */
    font-family: sans-serif;
}

.font-windsong {
    font-family: 'WindSong', cursive;
}
</style>
