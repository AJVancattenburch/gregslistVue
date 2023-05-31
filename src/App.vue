<template>
  <!-- NOTE if you want something to remain 'hard-coded' to the DOM regardless of what page you're on.... do that here -->
  <header>
    <Navbar />
  </header>
  <main>
    <!-- NOTE this is where our pages draw....everything in the router.js -->
    <router-view />
  </main>
  <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer>
  <Modal id="create-car">
    <CarForm />
  </Modal>
</template>

<script>

import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Modal from './components/Modal.vue'
import CarForm from './components/CarForm.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, Modal, CarForm }
}

</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
