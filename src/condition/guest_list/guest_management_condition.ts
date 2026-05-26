import { ref, computed } from 'vue'

export interface Guest {
  id: string
  code: string
  name: string
  attending: 'yes' | 'no' | 'pending'
  guests: number
  plusOneName?: string
  shuttleRequired: 'yes' | 'no' | 'none'
  message?: string
}

export function useGuestManagement() {
  const guests = ref<Guest[]>([
    {
      id: '1',
      code: 'REN482',
      name: 'Renz',
      attending: 'yes',
      guests: 2,
      plusOneName: 'Angelica',
      shuttleRequired: 'yes',
      message: 'Can\'t wait for our big day!'
    },
    {
      id: '2',
      code: 'MIC893',
      name: 'Michael Smith',
      attending: 'no',
      guests: 0,
      plusOneName: '', // Holds empty string instead of undefined for easier form binding
      shuttleRequired: 'none',
      message: 'Sending love from afar.'
    }
  ])

  const newGuestName = ref('')
  const editingId = ref<string | null>(null)
  const editForm = ref<Guest | null>(null)

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

  const addGuest = () => {
    if (!newGuestName.value.trim()) return
    const generatedCode = generateUniqueCode(newGuestName.value)
    
    guests.value.push({
      id: Date.now().toString(),
      code: generatedCode,
      name: newGuestName.value.trim(),
      attending: 'pending',
      guests: 0, 
      plusOneName: '',
      shuttleRequired: 'none',
      message: ''
    })
    newGuestName.value = ''
  }

  const startEdit = (guest: Guest) => {
    editingId.value = guest.id
    // Clone data and ensure properties exist so form fields are fully editable
    editForm.value = { 
      ...guest,
      plusOneName: guest.plusOneName || '',
      message: guest.message || ''
    }
  }

  const cancelEdit = () => {
    editingId.value = null
    editForm.value = null
  }

  const saveEdit = () => {
    if (!editForm.value || !editingId.value) return
    
    // Auto-clean data if status remains or changes to "No"
    if (editForm.value.attending === 'no' || editForm.value.attending === 'pending') {
      editForm.value.guests = 0
      editForm.value.plusOneName = ''
      editForm.value.shuttleRequired = 'none'
    }

    const index = guests.value.findIndex(g => g.id === editingId.value)
    if (index !== -1) {
      guests.value[index] = { ...editForm.value }
    }
    
    cancelEdit()
  }

  const deleteGuest = (id: string) => {
    guests.value = guests.value.filter(g => g.id !== id)
    if (editingId.value === id) cancelEdit()
  }

  const metrics = computed(() => {
    const totalInvited = guests.value.length
    const confirmedAttending = guests.value.filter(g => g.attending === 'yes')
    const totalHeadcount = confirmedAttending.reduce((sum, g) => sum + g.guests, 0)
    const declinedCount = guests.value.filter(g => g.attending === 'no').length
    const pendingCount = guests.value.filter(g => g.attending === 'pending').length
    const shuttleCount = confirmedAttending.filter(g => g.shuttleRequired === 'yes').reduce((sum, g) => sum + g.guests, 0)

    return { totalInvited, totalHeadcount, declinedCount, pendingCount, shuttleCount }
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