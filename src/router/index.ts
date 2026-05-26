import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home_Rs from '../page/home/invitation_rsvp.vue'
import Guest_List from '../page/guest_list/guestList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home_Rs,
    },
    {
      path: '/guest_list_master',
      name: 'Guest_List',
      component: Guest_List,
      beforeEnter: (to, from, next) => {
        // Helper function to send the user back to where they came from
        const handleFailure = () => {
          if (from.path && from.path !== to.path && from.path !== '/') {
            next(from.path); // Send them back to the exact previous page
          } else {
            next('/'); // Fallback to the main home page if there's no history
          }
        };

        const username = prompt('Enter Username:');
        
        // If user cancels the username prompt
        if (username === null) {
          return handleFailure();
        }

        const password = prompt('Enter Password:');

        // If user cancels the password prompt
        if (password === null) {
          return handleFailure();
        }

        // Check credentials using your Vite environment variables
        if (username === import.meta.env.VITE_USERDATA && password === import.meta.env.VITE_PASSDATA) {
          next(); // Proceed to the guest list
        } else {
          alert('Incorrect username or password!');
          handleFailure(); // Kick them back out
        }
      }
    },
    {
      path: '/HO',
      name: 'home1',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router