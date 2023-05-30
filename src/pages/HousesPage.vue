<template>
  <div class="container-fluid">

      <section class="row p-3 justify-content-end">
          <button class="col-3 btn btn-warning" data-bs-toggle="modal" data-bs-target="#create-house">Create House
              🛖</button>
      </section>

      <!-- NOTE v-for is iterating over the houses computed in the return...we aliased out ea. one as 'c' -->
      <!-- NOTE for the v-for...vue requires a 'key' so have a unique identifier -->
      <section class="row">
          <!-- NOTE when I want to pass data from a parent component to the child... we do that using props -->
          <div class="col-md-3 my-3" v-for="house in housesInAppState" :key="house.id">
              <HouseCard :houseProp="house" />
          </div>
      </section>

  </div>

  <Modal id="create-house">
    <HouseForm/>
  </Modal>
</template>
  

<script>

  import { computed, onMounted } from 'vue';
  import { logger } from '../utils/Logger.js';
  import { housesService } from '../services/HousesService.js';
  import Pop from '../utils/Pop.js';
  import { AppState } from '../AppState.js';
  import HouseCard from '../components/HouseCard.vue';
import HouseForm from "../components/HouseForm.vue";
  export default {
    components: { HouseCard, HouseForm },
    setup() {

        async function getHouses() {
            try {
                // logger.log('getting houses')
                await housesService.getHouses()
            } catch (error) {
                Pop.error(error.message)
                logger.log(error)
            }
        }

        // NOTE this onMounted says run whatever block of code is inside it as soon the page/components 'mounts' or renders
        // NOTE this is similar to calling a function/method in the constructor of a controller
        onMounted(() => {
            getHouses()
        })

        return {
            placeholderImg: 'http://thiscatdoesnotexist.com',
            // NOTE computeds almost always go on pages and 'parent components'
            housesInAppState: computed(() => AppState.houses)
        };
    },
  };

</script>

<style>

  .creator-img {
    height: 5vh;
    width: 5vh;
    border-radius: 50%;
  }

</style>