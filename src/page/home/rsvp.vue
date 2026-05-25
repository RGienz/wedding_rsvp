<script setup lang="ts">

</script>
<template>
    <div>
        <!-- first page -->
        <!-- <div class="relative h-screen flex items-center justify-center overflow-hidden"> -->
        <div class="relative h-screen flex items-start justify-center overflow-hidden pt-20 sm:pt-28 md:pt-36">
            <img
                src="../../reference/image/sageGreen4.png"
                alt="firstPage"
                class="absolute inset-0 w-full h-full object-cover opacity-80 animate-slow-zoom"
                style="animation-delay: 0.5s;"
            />
            <div class="relative z-10 flex flex-col items-center text-center w-full max-w-xs sm:max-w-sm md:max-w-md px-6 text-[#2c2c2c] transform scale-95 sm:scale-100 lg:scale-105 xl:scale-110 transition-transform duration-300">
                
                <p class="uppercase text-[10px] tracking-[0.25em] max-w-sm px-6 text-[#2c2c2c]">Together with their Family</p>
                
                <div class="relative my-3 sm:my-4 md:my-6 flex flex-col items-center">
                    <p class="text-6xl sm:text-6xl md:text-7xl mr-25 sm:mr-30 lg:text-7xl font-windsong leading-none -translate-x-[10px]">Renz </p>
                    <p class="text-5xl sm:text-6xl md:text-7xl ml-30 sm:ml-40 lg:text-7xl font-windsong leading-none -translate-x-[10px]">Ross </p>
                    

                    <div class="flex items-center justify-center my-[-15px] sm:my-[-10px]">
                        <span class="text-3xl sm:text-[30px] font-windsong italic text-gray-500 lowercase ml-2 sm:ml-10 mt-3 sm:mt-4">&</span>
                    </div>

                    <p class="text-7xl sm:text-6xl md:text-7xl lg:text-8xl font-windsong leading-none translate-x-[15px] mt-1 sm:mt-2">Angelica</p>
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

                    <div>
                        <p class="font-medium text-gray-800 ">Casa Hotel</p>
                        <p class="text-[10px] text-gray-500 lowercase first-letter:uppercase">1548 street los angeles ca</p>
                    </div>
                </div>

                <p class="font-medium text-[10px] sm:text-2xl md:text-3xl text-gray-500 mt-8 sm:mt-4 uppercase ">
                    reception to follow
                </p>

               <div class="mt-8 sm:mt-4 opacity-40 text-stone-600 w-16 h-16 sm:w-20 sm:h-20">
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="26" cy="36" r="16" />
                        
                        <circle cx="41" cy="31" r="14" />
                        
                        <path d="M41 17 L44 11 L41 8 L38 11 Z" fill="none" />
                        <path d="M38 11 L44 11 M41 17 L41 8" />
                    </svg>
                </div>
                
                <div class="absolute -bottom-15 sm:-bottom-28 animate-bounce text-stone-400 text-xs tracking-widest uppercase opacity-60">
                    ↓ Scroll Down
                </div>
            </div>
        </div>
        <!-- SECOND PAGE -->
        <section class="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 px-4 bg-[#f9f7f4]"> 
            <div class="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div class="lg:col-span-5 grid grid-cols-12 gap-4 relative order-2 lg:order-1">
                    <div class="absolute -inset-4 border border-stone-200/60 pointer-events-none rounded translate-x-2 translate-y-2 z-0"></div>
                    <div class="col-span-8 overflow-hidden rounded shadow-sm bg-stone-100 relative z-10 group">
                        <img src="../../reference/image/sageGreen4.png" alt="Couples portrait" class="w-full h-72 object-cover filter sepia-[15%] transition-transform duration-700 ease-out group-hover:scale-105" />
                    </div>
                    <div class="col-span-4 overflow-hidden rounded shadow-sm bg-stone-100 self-end relative z-10 group">
                        <img src="../../reference/image/sageGreen4.png" alt="Detail view" class="w-full h-40 object-cover filter grayscale-[10%] transition-transform duration-700 ease-out group-hover:scale-105" />
                    </div>
                    <div class="col-span-4 overflow-hidden rounded shadow-sm bg-stone-100 relative z-10 group">
                        <img src="../../reference/image/sageGreen4.png" alt="Venue preview" class="w-full h-44 object-cover filter contrast-[95%] transition-transform duration-700 ease-out group-hover:scale-105" />
                    </div>
                    <div class="col-span-8 overflow-hidden rounded shadow-sm bg-stone-100 relative z-10 group">
                        <img src="../../reference/image/sageGreen4.png" alt="Landscape snapshot" class="w-full h-48 object-cover filter brightness-[98%] transition-transform duration-700 ease-out group-hover:scale-105" />
                    </div>
                </div>
                <div class="lg:col-span-7 text-center lg:text-left space-y-6 order-1 lg:order-2">
                    <span class="text-[10px] tracking-[0.4em] uppercase text-stone-400 block">The Foundation</span>
                    <p class="text-3xl sm:text-4xl font-light tracking-[0.15em] uppercase text-stone-400">Our Story</p>
                    <div class="w-16 h-[1px] bg-stone-400 mx-auto lg:mx-0 my-4"></div>
                    <div class="space-y-6 text-sm sm:text-base text-stone-600 leading-relaxed font-serif italic max-w-xl mx-auto lg:mx-0 ">
                        <p>It began with a simple conversation that turned into hours of shared laughter, turning ordinary days into unforgettable milestones.</p>
                        <p class="font-windsong text-4xl text-stone-700 my-4 normal-case tracking-normal block text-center lg:text-left py-2"> Years of love, laughter, &amp; timeless memories</p>
                        <p>Through every dynamic season, we've walked side by side as best friends and partners. Today, we step into our greatest chapter yet.</p>
                    </div>
                </div>

            </div>
        </section>

        <!-- THIRD PAGE -->
        <section class="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 px-4 bg-white">
            <div class="relative z-10 w-full max-w-5xl mx-auto text-center text-[#2c2c2c] px-2">
               <span class="text-[10px] tracking-[0.4em] uppercase text-stone-400 block mb-2 font-sans">Guest Attendance Concierge</span>
               <span class="text-3xl sm:text-4xl font-light tracking-[0.15em] uppercase text-stone-800">Wedding Details</span>
               <div class="w-16 h-[1px] bg-stone-400 mx-auto my-4 mb-12" />

               <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-4xl mx-auto">
                    <div class="bg-[#fcfbf9] p-8 rounded border border-stone-200/80 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md">
                        <p class="text-[11px] tracking-[0.25em] uppercase font-semibold text-stone-700 mb-4 border-b border-stone-300 pb-2 w-full">Dress Code</p>
                        <p class="text-xs uppercase tracking-widest text-stone-600 mb-2 font-medium font-sans">Formal Attire Requested</p>
                        <p class="text-[12px] text-stone-500 font-serif italic loading-relaxed mb-6">We kindly invite our guests to celebrate with us clean-tailored in our seasonal palette.</p>
                        <div class="w-full grid grid-cols-2 gap-2 mb-6 overflow-hidden rounded">
                            <img src="../../reference/image/sageGreen4.png" class="w-full h-16 object-cover opacity-90" />
                            <img src="../../reference/image/sageGreen5.png" class="w-full h-16 object-cover opacity-90" />
                        </div>
                        <div class="flex space-x-2.5 my-auto">
                            <p class="w-5 h-5 rounded-full bg-[#7D8471] ring-1 ring-offset-2 ring-stone-300"></p>
                            <p class="w-5 h-5 rounded-full bg-[#A3A899] ring-1 ring-offset-2 ring-stone-300"></p>
                            <p class="w-5 h-5 rounded-full bg-[#E5DEC9] ring-1 ring-offset-2 ring-stone-300"></p>
                        </div>
                    </div>
                    <div class="bg-[#fcfbf9] p-8 rounded border border-stone-200/80 text-center flex flex-col justify-between transition-all duration-300 hover:shadow-md">
                        <p class="text-[11px] tracking-[0.25em] uppercase font-semibold text-stone-700 mb-6 border-b border-stone-300 pb-2 w-full">The Schedule</p>
                        <div class="space-y-6 text-xs flex-grow flex flex-col justify-center">
                            <div>
                                <p class="font-semibold text-stone-800 tracking-widest font-sans text-sm">8:30 PM</p>
                                <p class="text-stone-500 font-serif italic mt-0.5">Arrival &amp; Church</p>
                            </div>
                            <div>
                                <p class="font-semibold text-stone-800 tracking-widest font-sans text-sm">3:30 PM</p>
                                <p class="text-stone-500 font-serif italic mt-0.5">Arrival &amp; Welcome Drinks</p>
                            </div>
                            <div>
                                <p class="font-semibold text-stone-800 tracking-widest font-sans text-sm">4:00 PM</p>
                                <p class="text-stone-500 font-serif italic mt-0.5">Sacred Exchange Ceremony</p>
                            </div>
                            <div>
                                <p class="font-semibold text-stone-800 tracking-widest font-sans text-sm">6:30 PM</p>
                                <p class="text-stone-500 font-serif italic mt-0.5">Grand Dinner &amp; Revelry</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#fcfbf9] p-8 rounded border border-stone-200/80 flex flex-col justify-between text-center transition-all duration-300 hover:shadow-md">
                        <div>
                            <h3 class="text-[11px] tracking-[0.25em] uppercase font-semibold text-stone-700 mb-4 border-b border-stone-200 pb-2 w-full">Important Notes</h3>
                            <p class="text-xs uppercase tracking-widest text-stone-600 mb-1 font-medium font-sans">Adults-Only Occasion</p>
                            <p class="text-[12px] text-stone-500 font-serif italic leading-relaxed mb-4">To allow all guests a night of relaxation, our wedding day is an adults-only occasion.</p>
                        </div>
                        <div class="border-t border-stone-200/80 pt-4 mt-4">
                            <p class="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-sans mb-1">Gifts Registry</p>
                            <p class="text-[12px] text-stone-600 font-serif italic leading-relaxed">Your presence on our day is the ultimate gift.</p>
                        </div>
                    </div>
               </div>
               <div class="mt-12 p-6 max-w-4xl mx-auto border-border-stone-200/60 bg-[#fcfbf9]/50 rounded text-left grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                        <p class="text-xs uppercase tracking-widest font-semibold text-stone-700 mb-1">
                            Accommodations &amp; Stay
                        </p>
                        <p class="text-[12px] text-stone-500 font-serif italic leading-relaxed">
                           We want this weekend to be a beautiful escape for you.
                            Come early to enjoy the crystal pools, savor the curated menus, and join us for a night of endless fun, dance, and celebration.
                        </p>
                    </div>
                    <div class="overflow-hidden rounded h-24 bg-stone-100 relative group cursor-pointer border border-stone-200">
                        <div class="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/20 transition-colors z-10 flex items-center justify-center">
                        <span class="text-[10px] uppercase tracking-widest text-white font-medium drop-shadow-sm px-3 py-1 bg-stone-900/40 rounded backdrop-blur-xs transition-all duration-300 group-hover:scale-105">
                            View Map Locations
                        </span>
                        </div>
                        <img src="../../reference/image/sageGreen4.png" alt="Geographic map preview" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
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
