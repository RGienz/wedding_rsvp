<script setup lang="ts">
import { useLocationMap } from '../../condition/location/location_map'
import { useRSVPRegistration } from '../../condition/rsvp_reg/rsvp_registration_condition'
import { useLifecycle } from '../../condition/life_cycle/life_cycle'


const {
    isMapModalOpen,
    mapUrls,
    openMapModal,
    closeMapModal
} = useLocationMap()

const { 
  rsvpData, 
  isSubmitted, 
  setAttendance,
  submitRSVP 
} = useRSVPRegistration()




</script>
<template>
    <div>
        <!-- first page -->
        <!-- <div class="relative h-screen flex items-center justify-center overflow-hidden"> -->
        <section class="relative h-screen w-full flex items-center justify-center overflow-hidden px-4 snap-start">
            <img
                src="../../reference/image/sageGreen4.png"
                alt="firstPage"
                class="absolute inset-0 w-full h-full object-cover opacity-80 animate-slow-zoom"
                style="animation-delay: 0.5s;"
            />
            <div class="relative z-10 flex flex-col items-center text-center w-full max-w-lg mx-auto text-[#2c2c2c] transform scale-95 sm:scale-100 transition-transform duration-300">
                
                <p class="uppercase text-[9px] sm:text-[10px] tracking-[0.25em] w-full max-w-sm px-4">Together with their Family</p>
                
                <div class="relative my-3 sm:my-4 md:my-6 flex flex-col items-center">
                    <p class="text-6xl sm:text-6xl md:text-7xl mr-25 sm:mr-30 lg:text-7xl font-windsong leading-none -translate-x-[10px]">Renz </p>
                    <p class="text-6xl sm:text-6xl md:text-7xl ml-30 sm:ml-40 lg:text-7xl font-windsong leading-none -translate-x-[10px]">Ross </p>
                    

                    <div class="flex items-center justify-center my-[-15px] sm:my-[-10px]">
                        <span class="text-3xl sm:text-[30px] font-windsong italic text-gray-500 lowercase ml-2 sm:ml-10 mt-3 sm:mt-4">&</span>
                    </div>

                    <p class="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-windsong leading-none translate-x-[15px] mt-1 sm:mt-2">Angelica</p>
                </div>

                <div class="uppercase text-[10px] sm:text-[11px] tracking-[0.2em] leading-relaxed text-gray-600 mt-4 mb-6 sm:mt-6 sm:mb-8">
                    <p>Invite you to their</p>
                    <p class="mt-1 font-semibold">Wedding Celebration</p>
                </div>
                
                <div class="text-xl sm:text-2xl font-light tracking-[0.15em] text-gray-800 border-y border-gray-400/60 py-2 w-full max-w-[240px]">
                    XX <span class="text-gray-300 font-thin mx-1">|</span> XX <span class="text-gray-300 font-thin mx-1">|</span> XXXX
                </div>
                
                <div class="uppercase text-[10px] sm:text-[11px] tracking-[0.2em] text-gray-600 mt-6 space-y-4 w-full">
                    <div>
                        <p class="text-[8px] sm:text-[9px] text-gray-400 mb-0.5">At</p>
                        <p class="font-medium text-gray-800">X:XX XX</p>
                    </div>

                    <div>
                        <p class="font-medium text-gray-800">Casa Hotel</p>
                        <p class="text-[9px] sm:text-[10px] text-gray-500 normal-case mt-0.5">1548 Street, Los Angeles, CA</p>
                    </div>
                </div>

                <p class="font-medium text-xs sm:text-sm tracking-[0.2em] text-gray-500 mt-8 uppercase">
                    reception to follow
                </p>

                <div class="mt-6 opacity-40 text-stone-600 w-12 h-12 sm:w-16 sm:h-16">
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
                        <circle cx="26" cy="36" r="16" />
                        <circle cx="41" cy="31" r="14" />
                        <path d="M41 17 L44 11 L41 8 L38 11 Z" fill="none" />
                        <path d="M38 11 L44 11 M41 17 L41 8" />
                    </svg>
                </div>
                
                <div class="mt-8 animate-bounce text-stone-400 text-[9px] sm:text-xs tracking-widest uppercase opacity-70">
                    ↓ Scroll Down
                </div>
            </div>
        </section>

        <!-- SECOND PAGE -->
        <section class="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 px-4 bg-[#f9f7f4]"> 
            <div class="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div class="lg:col-span-5 grid grid-cols-12 gap-4 relative order-2 lg:order-1">
                    <div class="absolute -inset-4 border border-stone-200/60 pointer-events-none rounded translate-x-2 translate-y-2 z-0"></div>
                    <div class="col-span-8 overflow-hidden rounded shadow-sm bg-stone-100 relative z-10 group">
                        <img src="../../reference/image/sageGreen1.png" alt="Couples portrait" class="w-full h-72 object-cover filter sepia-[15%] transition-transform duration-700 ease-out group-hover:scale-105" />
                    </div>
                    <div class="col-span-4 overflow-hidden rounded shadow-sm bg-stone-100 self-end relative z-10 group">
                        <img src="../../reference/image/sageGreen2.png" alt="Detail view" class="w-full h-40 object-cover filter grayscale-[10%] transition-transform duration-700 ease-out group-hover:scale-105" />
                    </div>
                    <div class="col-span-4 overflow-hidden rounded shadow-sm bg-stone-100 relative z-10 group">
                        <img src="../../reference/image/sageGreen3.png" alt="Venue preview" class="w-full h-44 object-cover filter contrast-[95%] transition-transform duration-700 ease-out group-hover:scale-105" />
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
                            You are welcome to stay! The resort has a 22-hour overnight stay so you can fully enjoy, celebrate, and relax.
                        </p>
                    </div>
                    <div @click="openMapModal" class="overflow-hidden rounded h-24 bg-stone-100 relative group cursor-pointer border border-stone-200">
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

        <div v-if="isMapModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs animate-fade-in" @click.self="closeMapModal" >
            <div class="bg-white max-w-md w-full rounded p-6 shadow-xl border border-stone-200/60 text-center relative transform transition-all animate-[fadeIn_0.3s_ease-out]">
                <button @click="closeMapModal" class="absolute top-4 right-4 text-stone-400 hover:text-stone-700 text-sm hover:cursor-pointer">✕</button>
                <p class="text-[9px] tracking-[0.3em] uppercase text-stone-400 block mb-1 font-sans">Travel &amp; Directions</p>
                <p class="text-lg font-light tracking-widest uppercase text-stone-800">Select Destination</p>
                <div class="w-12 h-[1px] bg-stone-300 mx-auto my-3"></div>
                <p class="text-xs text-stone-500 font-serif italic mb-6">Select a dynamic destination link below to launch external routing.</p>

                <div class="space-y-3">
                    <a :href="mapUrls.church" target="_blank" class="flex items-center justify-between border border-stone-200 hover:border-stone-500 rounded p-4 group transition-all bg-[#fcfbf9] hover:bg-white">
                        <div class="text-left">
                        <p class="text-[9px] tracking-wider uppercase text-stone-400 block font-sans">Part I — Ceremony</p>
                        <p class="text-xs font-semibold text-stone-700 tracking-wide">Belveder Towned 1 Church</p>
                        </div>
                        <p class="text-stone-400 group-hover:text-stone-700 text-xs font-sans tracking-widest">Map ↗</p>
                    </a>

                    <a :href="mapUrls.venue" target="_blank" class="flex items-center justify-between border border-stone-200 hover:border-stone-500 rounded p-4 group transition-all bg-[#fcfbf9] hover:bg-white">
                        <div class="text-left">
                        <p class="text-[9px] tracking-wider uppercase text-stone-400 block font-sans">Part II — Celebration</p>
                        <p class="text-xs font-semibold text-stone-700 tracking-wide">Gereral trias Cavite Event Place</p>
                        </div>
                        <p class="text-stone-400 group-hover:text-stone-700 text-xs font-sans tracking-widest">Map ↗</p>
                    </a>
                </div>

                <button @click="closeMapModal" class="mt-6 text-[10px] uppercase tracking-widest text-stone-500 hover:text-stone-800 underline hover:cursor-pointer">Close Window</button>
            </div>
        </div>

        <!-- fourth page -->
        <section class="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 px-4 bg-[#f4f1eb]">
            <img src="../../reference/sageGreen4.png" class="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply" alt="Background Texture" />
            
            <div class="relative z-10 w-full max-w-xl mx-auto text-center text-[#2c2c2c] bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded shadow-md border border-white">
                <span class="text-[10px] tracking-[0.4em] uppercase text-stone-400 block mb-1 font-sans">Attendance Check-In</span>
                <h2 class="text-3xl font-light tracking-[0.15em] uppercase text-stone-800">Response Portal</h2>
                <div class="w-16 h-[1px] bg-stone-400 mx-auto my-4 mb-6"></div>
                
                <div v-if="!isSubmitted">
                    <p class="text-xs text-stone-500 font-serif italic tracking-wide mb-8">
                        Please kindly complete your formal individual verification on or before <span class="font-sans font-bold not-italic text-stone-700">Unknown xx, xxxx</span>.
                    </p>
                    
                    <form @submit.prevent="submitRSVP" class="space-y-6 text-left">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-[10px] uppercase tracking-[0.2em] font-medium text-stone-600 mb-1.5">Invitation Code</label>
                                <input v-model="rsvpData.code" required placeholder="Invitation Code" class="w-full bg-white/90 border border-stone-300/80 px-3.5 py-2.5 text-xs rounded shadow-xs focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-400 transition-all" />
                            </div>
                            <div>
                                <label class="block text-[10px] uppercase tracking-[0.2em] font-medium text-stone-600 mb-1.5">Invited Guest</label>
                                <input v-model="rsvpData.name" type="text" readonly required placeholder="Loading name..." class="w-full bg-stone-100/80 cursor-not-allowed border border-stone-300/60 px-3.5 py-2.5 text-xs rounded text-stone-500 outline-none select-none" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-[10px] uppercase tracking-[0.2em] font-medium text-stone-600 mb-2">Will you join our celebration?</label>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div @click="setAttendance('yes')" :class="['flex items-center justify-center border rounded p-3.5 cursor-pointer transition-all duration-200 select-none', rsvpData.attending === 'yes' ? 'border-stone-600 bg-stone-50 shadow-xs ring-1 ring-stone-600' : 'border-stone-300/80 bg-white/50 hover:bg-white hover:border-stone-400']">
                                    <input type="radio" id="accept" name="attendance-choice" value="yes" :checked="rsvpData.attending === 'yes'" @change="setAttendance('yes')" class="accent-stone-700 mr-2.5 h-3.5 w-3.5 cursor-pointer" />
                                    <label for="accept" class="text-xs uppercase tracking-wider font-medium text-stone-700 cursor-pointer">Joyfully Accept</label>
                                </div>

                                <div @click="setAttendance('no')" :class="['flex items-center justify-center border rounded p-3.5 cursor-pointer transition-all duration-200 select-none', rsvpData.attending === 'no' ? 'border-stone-600 bg-stone-50 shadow-xs ring-1 ring-stone-600' : 'border-stone-300/80 bg-white/50 hover:bg-white hover:border-stone-400']">
                                    <input type="radio" id="decline" name="attendance-choice" value="no" :checked="rsvpData.attending === 'no'" @change="setAttendance('no')" class="accent-stone-700 mr-2.5 h-3.5 w-3.5 cursor-pointer" />
                                    <label for="decline" class="text-xs uppercase tracking-wider font-medium text-stone-700 cursor-pointer">Regretfully Decline</label>
                                </div>
                            </div>
                        </div>

                        <div v-if="rsvpData.attending === 'no'" class="space-y-5 pt-5 border-t border-stone-200/80 transition-all duration-300">

                            <div>
                                <label class="block text-[10px] uppercase tracking-[0.2em] font-medium text-stone-600 mb-2">Why Cannot Attend</label>
                                <div class="flex space-x-6 text-xs">
                                    <textarea @input="rsvpData.notToAttendMessageReg = rsvpData.notToAttendMessageReg.replace(/[^a-zA-Z]/g, '')" v-model="rsvpData.notToAttendMessageReg" cols="30" rows="3" class="w-full bg-white/90 border border-stone-300/80 px-3.5 py-2.5 text-xs rounded focus:outline-noen focus:border-stone-500 resize-none" placeholder="Please give use why you cannot attend on our wedding . . "></textarea>
                                </div>
                            </div>
                        </div>

                        <div v-if="rsvpData.attending !== ''" class="space-y-6 pt-2">
                            <div>
                                <label maxlength="6" required class="block text-[10px] uppercase tracking-[0.2em] font-medium text-stone-600 mb-1.5">Note to the Couple (Optional)</label>
                                <textarea v-model="rsvpData.message" rows="3" placeholder="Send your warm wishes..." class="w-full bg-white/90 border border-stone-300/80 px-3.5 py-2.5 text-xs rounded focus:outline-none focus:border-stone-500 resize-none"></textarea>
                            </div>

                            <button type="submit" class="w-full bg-stone-800 hover:bg-stone-900 text-white text-xs uppercase tracking-[0.25em] font-medium py-3.5 rounded transition-all duration-300 shadow-xs">
                                Send Response
                            </button>
                        </div>
                    </form>
                </div>

                <div v-else class="py-12 px-4 text-center space-y-4">
                    <div class="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-stone-600 border border-stone-200">✓</div>
                    <h3 class="text-xl font-light tracking-wide text-stone-800 uppercase pt-2">Thank You, {{ rsvpData.name || 'Response Sent' }}</h3>
                    <p class="text-xs text-stone-500 max-w-xs mx-auto">Your response has been successfully cataloged.</p>
                    <button @click="isSubmitted = false" class="text-[10px] uppercase tracking-widest text-stone-400 underline hover:text-stone-600 transition-colors pt-6 block mx-auto">
                        Change Input 
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
@font-face {
    font-family: 'WindSong';
    src: url('../../reference/font/WindSong/WindSong-Regular.ttf') format('truetype'),  
         url('../../reference/font/WindSong/WindSong-Regular.ttf') format('woff'),
         url('../../reference/font/WindSong/WindSong-Regular.ttf') format('woff2');
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