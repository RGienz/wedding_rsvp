import { ref } from 'vue'

export interface RSVPPayload {
  code : string,
  name: string
  attending: string
  guests: number
  plusOneName: string
  dietary: string
  drinkPreference: string
  shuttleRequired: string
  message: string,
  notToAttendMessageReg : string
}

export function useRSVPRegistration() {
  const rsvpData = ref<RSVPPayload>({
    code : '',
    name: '',
    attending: '',
    guests: 1,
    plusOneName: '',
    dietary: '',
    drinkPreference: '',
    shuttleRequired: '',
    message: '',
    notToAttendMessageReg : ''
  })

  const isSubmitted = ref(false)

  const setAttendance = (status: 'yes' | 'no') => {
    rsvpData.value.attending = status
    if (status === 'no') {
      rsvpData.value.guests = 1
      rsvpData.value.plusOneName = ''
      rsvpData.value.dietary = ''
      rsvpData.value.drinkPreference = ''
      rsvpData.value.shuttleRequired = ''
    }
  }

  const submitRSVP = () => {
    // console.log('Detailed RSVP Payload Generated:', rsvpData.value)
    // isSubmitted.value = true
    rsvpData.value.code = rsvpData.value.code.trim().toUpperCase()

    if (rsvpData.value.code.length !== 6) {
      alert('Please enter a valid 6-character invitation code.')
      return
    }
    const cleanPayload = JSON.parse(JSON.stringify(rsvpData.value))
    console.log('Detailed RSVP Payload Generated:', cleanPayload)

    isSubmitted.value = true
  }

  return {
    rsvpData,
    isSubmitted,
    setAttendance,
    submitRSVP
  }
}