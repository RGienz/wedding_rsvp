<script setup lang="ts">
import { useGuestManagement } from '../../condition/guest_list/guest_management_condition'

const {
    guests,
    newGuestName,
    editingId,
    editForm,
    metrics,
    addGuest,
    startEdit,
    cancelEdit,
    saveEdit,
    deleteGuest
} = useGuestManagement()
</script>

<template>
    <div class="bg-[#fcfbf9] text-[#2c2c2c] min-h-screen p-6 sm:p-10 font-sans antialiased">
            <div class="max-w-7xl mx-auto space-y-10">
            
            <div class="text-center md:text-left border-b border-stone-200 pb-6">
                <span class="text-[10px] tracking-[0.4em] uppercase text-stone-400 block mb-1">Administrative Desk</span>
                <h1 class="text-3xl font-light tracking-[0.15em] uppercase text-stone-800">Wedding Guest Registry</h1>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="bg-white p-4 border border-stone-200 rounded text-center">
                    <p class="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Total</p>
                    <p class="text-2xl font-light text-stone-800 mt-1">{{ metrics.totalInvited }}</p>
                </div>
                <div class="bg-white p-4 border border-stone-200 rounded text-center">
                    <p class="text-[10px] uppercase tracking-wider text-emerald-600 font-medium">Attending Headcount</p>
                    <p class="text-2xl font-light text-emerald-700 mt-1">{{ metrics.totalHeadcount }}</p>
                </div>
                <div class="bg-white p-4 border border-stone-200 rounded text-center">
                    <p class="text-[10px] uppercase tracking-wider text-rose-600 font-medium">Declined Headcount</p>
                    <p class="text-2xl font-light text-rose-700 mt-1">{{ metrics.declinedCount }}</p>
                </div>
                <div class="bg-white p-4 border border-stone-200 rounded text-center">
                    <p class="text-[10px] uppercase tracking-wider text-amber-600 font-medium">Pending RSVP</p>
                    <p class="text-2xl font-light text-amber-700 mt-1">{{ metrics.pendingCount }}</p>
                </div>
                <!-- <div class="bg-white p-4 border border-stone-200 rounded text-center col-span-2 md:col-span-1">
                    <p class="text-[10px] uppercase tracking-wider text-sky-600 font-medium">Shuttle Seats</p>
                    <p class="text-2xl font-light text-sky-700 mt-1">{{ metrics.shuttleCount }}</p>
                </div> -->
            </div>

            <div class="bg-white p-6 rounded border border-stone-200 shadow-xs">
                <h2 class="text-xs uppercase tracking-[0.2em] font-semibold text-stone-700 mb-4">Generate Invitation Access</h2>
                <div class="w-full h-[1px] bg-stone-200 mx-auto lg:mx-0 my-4"></div>
                <form @submit.prevent="addGuest" class="flex flex-col sm:flex-row gap-4 items-end">
                    <div class="flex-1 w-full">
                        <label class="block text-[10px] uppercase tracking-[0.15em] font-medium text-stone-500 mb-1.5">Guest Full Name</label>
                        <input 
                            v-model="newGuestName" 
                            @input="newGuestName = newGuestName.replace(/[^a-zA-Z]/g, '')"
                            type="text" 
                            required 
                            placeholder="e.g., Luna Bear" 
                            class="w-full bg-[#fcfbf9] border border-stone-300 px-3.5 py-2 text-xs rounded focus:outline-none focus:border-stone-500 transition-all"
                        />
                    </div>
                    <button 
                        type="submit" 
                        class="w-full sm:w-auto bg-stone-800 hover:bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-medium px-6 py-2.5 rounded transition-all duration-300 whitespace-nowrap"
                    >
                        Add Guest
                    </button>
                </form>
            </div>

            <div class="bg-white border border-stone-200 rounded overflow-hidden shadow-xs ">
                <div class="max-h-[390px] overflow-y-auto overflow-x-auto">
                    <table class="w-full text-left border-collapse min-w-[1100px]  ">
                        <thead>
                            <tr class="bg-stone-50 border-b border-stone-200 text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
                                <th class="p-3 w-10 text-center">No</th>
                                <th class="p-4 w-32">Access Code</th>
                                <th class="p-4 w-48">Invited Guest</th>
                                <th class="p-4 text-center w-36">RSVP Status</th>
                                <!-- <th class="p-4 text-center w-32">Total Seats</th> -->
                                <!-- <th class="p-4 w-48">Companion Name</th> -->
                                <!-- <th class="p-4 text-center w-32">Shuttle Request</th> -->
                                <th class="p-4 min-w-[240px]">Wishes/Notes</th>
                                <th class="p-4 min-w-[240px]">Not Attending/Notes</th>
                                <th class="p-4 text-center w-48">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-stone-100 text-xs text-stone-600">
                            <tr v-for="(guest , index) in guests" :key="guest.id" class="hover:bg-stone-50/60 transition-colors vertical-align-middle ">
                                <!-- without Edit Trigger -->
                                <template v-if="editingId === guest.id && editForm">
                                    <td class="p-3">
                                        {{ index + 1 }}
                                    </td>
                                    <td class="p-3">
                                        <input v-model="editForm.code" type="text" class="w-full uppercase font-mono font-bold bg-[#fcfbf9] border border-stone-300 px-2 py-1 text-xs rounded text-stone-800" />
                                    </td>
                                    
                                    <td class="p-3">
                                        <input v-model="editForm.name" type="text" class="w-full bg-[#fcfbf9] border border-stone-300 px-2 py-1 text-xs rounded text-stone-800" />
                                    </td>
                                    
                                    <td class="p-3 text-center">
                                        <select v-model="editForm.attending" class="w-full bg-[#fcfbf9] border border-stone-300 px-2 py-1 text-xs rounded text-center font-medium">
                                        <option value="pending">Pending</option>
                                        <option value="yes">YES</option>
                                        <option value="no">NO</option>
                                        </select>
                                    </td>
                                    
                                    <td class="p-3">    
                                        <textarea 
                                            v-model="editForm.message" 
                                            rows="2" 
                                            placeholder="Add custom notes..." 
                                            class="w-full bg-[#fcfbf9] border border-stone-300 px-2 py-1 text-xs rounded font-serif italic text-stone-700 placeholder-stone-300 resize-y min-h-[38px]"
                                        ></textarea>
                                    </td>
                                    <td class="p-3">
                                        <textarea 
                                            v-model="editForm.notToAttendMessage"
                                            rows="2" 
                                            placeholder="Add custom notes..." 
                                            class="w-full bg-[#fcfbf9] border border-stone-300 px-2 py-1 text-xs rounded font-serif italic text-stone-700 placeholder-stone-300 resize-y min-h-[38px]"
                                        ></textarea>
                                    </td>

                                    <td class="p-3 text-center space-x-1.5 whitespace-nowrap">
                                        <button @click="saveEdit" class="text-white bg-stone-800 hover:bg-stone-900 px-3 py-1 rounded text-[10px] uppercase font-bold tracking-wider transition-colors">
                                            Save
                                        </button>
                                        <button @click="cancelEdit" class="text-stone-600 bg-stone-100 hover:bg-stone-200 px-3 py-1 rounded text-[10px] uppercase font-bold tracking-wider transition-colors border border-stone-200">
                                            Cancel
                                        </button>
                                    </td>
                                </template>

                                <!-- with Edit Trigger -->
                                <template v-else>
                                    <td class="p-4 font-mono font-bold text-stone-400 text-xs text-center ">
                                        {{ index + 1 }}
                                    </td>
                                    <td class="p-4 font-mono font-bold text-stone-800 tracking-widest text-xs">
                                        <span class="bg-stone-100 px-2.5 py-1 rounded border border-stone-200/80">{{ guest.code }}</span>
                                    </td>
                                    
                                    <td class="p-4 font-medium text-stone-900">{{ guest.name }}</td>
                                    
                                    <td class="p-4 text-center">
                                        <span 
                                            :class="[
                                                'px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border',
                                                guest.attending === 'yes' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : '',
                                                guest.attending === 'no' ? 'bg-rose-50 text-rose-700 border-rose-200' : '',
                                                guest.attending === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-200' : ''
                                            ]"
                                            >
                                            {{ guest.attending }}
                                        </span>
                                    </td>
                                    
                                    <td class="p-4 max-w-sm text-stone-500 font-serif italic text-left whitespace-normal break-words leading-relaxed">
                                        {{ guest.message || '—' }}
                                    </td>
                                    <td class="p-4 max-w-sm text-stone-500 font-serif italic text-left whitespace-normal break-words leading-relaxed">
                                        {{ guest.notToAttendMessage || '—' }}
                                        <!-- {{ guest }} -->
                                    </td>
                                    
                                    <td class="p-4 text-center space-x-2 whitespace-nowrap">
                                        <button 
                                            @click="startEdit(guest)" 
                                            class="text-stone-700 hover:text-stone-900 transition-colors uppercase tracking-widest text-[9px] font-bold border border-stone-300 px-2.5 py-1 rounded bg-white hover:bg-stone-50 shadow-2xs"
                                        >
                                        Edit
                                        </button>
                                        <button 
                                            @click="deleteGuest(guest.id)" 
                                            class="text-rose-400 hover:text-rose-600 transition-colors uppercase tracking-widest text-[9px] font-bold border border-rose-100 px-2 py-1 rounded bg-rose-50/30 hover:bg-rose-50"
                                        >
                                        Remove
                                        </button>
                                    </td>
                                </template>

                            </tr>
                        
                            <tr v-if="guests.length === 0">
                                <td colspan="8" class="p-12 text-center text-stone-400 italic font-serif">
                                No registered guests found. Generate codes above to populate your database.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>