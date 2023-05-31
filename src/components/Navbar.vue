<template>
  <nav class="navbar navbar-nav navbar-expand-lg navbar-dark bg-dark px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="../assets/img/cw-logo.png" height="45" />
      </div>
    </router-link>
    <router-link :to="{ name: 'Cars' }" class="btn text-success lighten-30 selectable text-uppercase">
      Cars
    </router-link>
    <router-link :to="{ name: 'Houses' }" class="btn text-success lighten-30 selectable text-uppercase">
      Houses
    </router-link>
    <router-link :to="{ name: 'Jobs' }" class="btn text-success lighten-30 selectable text-uppercase">
      Jobs
    </router-link>
      <!-- LOGIN COMPONENT HERE -->
      <Login />

  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav a.router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  text-shadow: 1px 1px 2px #77afc0;
  filter: brightness(120%);
  font-weight: 600;
}



@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
