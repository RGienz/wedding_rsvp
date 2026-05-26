import { ref } from 'vue'

export interface MapDestinations {
  church: string
  venue: string
}

export function useLocationMap() {
  const isMapModalOpen = ref(false)

  const mapUrls: MapDestinations = {
    // church: 'https://maps.google.com/?q=Cathedral+Church+Los+Angeles',
    church: 'https://www.google.com/maps/place/St.+John+Paul+II+Parish/@14.3197699,120.862416,18.5z/data=!4m14!1m7!3m6!1s0x33962a4a90f450f5:0x150cfc17ee330b3c!2s8V96%2BRW9,+Tanza,+Cavite!3b1!8m2!3d14.3195375!4d120.8623594!3m5!1s0x33962aed99aaf81b:0x7f93c992efcd4f4d!8m2!3d14.3206705!4d120.8626127!16s%2Fg%2F11df4xbfbx?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D',
    venue: 'https://maps.google.com/?q=1548+Estate+Road+Los+Angeles+CA'
  }

  const openMapModal = () => {
    isMapModalOpen.value = true
  }

  const closeMapModal = () => {
    isMapModalOpen.value = false
  }

  return {
    isMapModalOpen,
    mapUrls,
    openMapModal,
    closeMapModal
  }
}