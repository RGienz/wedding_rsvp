import { ref, computed, onMounted, onUnmounted } from 'vue'
import { db } from '../../firebase' // Adjust this path to where your firebase.ts file lives
import { 
  collection, 
  onSnapshot, 
  addDoc, 
  doc, 
  updateDoc, 
  deleteDoc 
} from 'firebase/firestore'

export interface Guest {
  id: string
  code: string
  name: string
  attending: 'yes' | 'no' | 'pending'
  message?: string
  notToAttendMessage?: string
}

export function useGuestManagement() {
    const guests = ref<Guest[]>([])
    const newGuestName = ref('')
    const editingId = ref<string | null>(null)
    const editForm = ref<Guest | null>(null)

    const guestsCollectionRef = collection(db, 'guests')
    let unsubscribe: (() => void) | null = null

    onMounted(() => {
        unsubscribe = onSnapshot(guestsCollectionRef, (snapshot) => {
            guests.value = snapshot.docs.map(docSnap => ({
                id: docSnap.id,
                ...docSnap.data()
            } as Guest))
        }, (error) => {
            console.error("Error fetching guests from Firestore: ", error)
        })
    })

    onUnmounted(() => {
        if (unsubscribe) unsubscribe()
    })

    const generateUniqueCode = (name: string): string => {
        let prefix = name.replace(/[^a-zA-Z]/g, '').toUpperCase()
        while (prefix.length < 3) {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            prefix += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        prefix = prefix.substring(0, 3)
        const randomNum = Math.floor(100 + Math.random() * 900)
        return `${prefix}${randomNum}`
    }

    // CREATE: Add guest to Firestore
    const addGuest = async () => {
        const cleanedName = newGuestName.value.trim()
        if (!cleanedName) return

        const generatedCode = generateUniqueCode(cleanedName)
        
        try {
            await addDoc(guestsCollectionRef, {
                code: generatedCode,
                name: cleanedName,
                attending: 'pending',
                message: '',
                notToAttendMessage: ''
            })
            newGuestName.value = ''
        } catch (error) {
            console.error("Error adding guest: ", error)
        }
    }

    const startEdit = (guest: Guest) => {
        editingId.value = guest.id
        editForm.value = {
            ...guest,
            message: guest.message || '',
            notToAttendMessage: guest.notToAttendMessage || ''
        }
    }

    const cancelEdit = () => {
        editingId.value = null
        editForm.value = null
    }

    const saveEdit = async () => {
        if (!editForm.value || !editingId.value) return

        const guestDocRef = doc(db, 'guests', editingId.value)
        
        const updatedData: Partial<Guest> = {
            code: editForm.value.code,
            name: editForm.value.name,
            attending: editForm.value.attending,
            message: editForm.value.message,
            notToAttendMessage: editForm.value.notToAttendMessage
        }

        try {
            await updateDoc(guestDocRef, updatedData)
            cancelEdit()
        } catch (error) {
            console.error("Error updating guest: ", error)
        }
    }

    const deleteGuest = async (id: string) => {
        const guestDocRef = doc(db, 'guests', id)
        try {
            await deleteDoc(guestDocRef)
            if (editingId.value === id) cancelEdit()
        } catch (error) {
            console.error("Error deleting guest: ", error)
        }
    }

    const metrics = computed(() => {
        const totalInvited = guests.value.length
        const confirmedAttending = guests.value.filter(g => g.attending === 'yes')
        const totalHeadcount = confirmedAttending.length
        const declinedCount = guests.value.filter(g => g.attending === 'no').length
        const pendingCount = guests.value.filter(g => g.attending === 'pending').length

        return { totalInvited, declinedCount, pendingCount, totalHeadcount }
    })

    return {
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
    }
}