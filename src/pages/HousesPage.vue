<template>
  <div class="container-fluid">

      <section class="row p-3 justify-content-end">
          <button class="col-3 btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-house">Create House
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

body {
  background-color: #2a2449;
}

div.container-fluid > section:nth-child(2) > div:nth-child(1) > div {
  background-color: #571c57;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(2) > div {
  background-color: #4c1a4c;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(3) > div {
  background-color: #3d163d;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(4) > div {
  background-color: #381638;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(5) > div {
  background-color: #361830;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(6) > div {
  background-color: #30172b;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(7) > div {
  background-color: #2e1729;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(8) > div {
  background-color: #2a1626;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(9) > div {
  background-color: #291625;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(10) > div {
  background-color: #291123;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(11) > div {
  background-color: #1d0e1a;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(12) > div {
  background-color: #1d0f1a;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(13) > div {
  background-color: #1c0c18;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(14) > div {
  background-color: #160b13;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(15) > div {
  background-color: #160c14;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(16) > div {
  background-color: #130c12;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(17) > div {
  background-color: #110910;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(18) > div {
  background-color: #0c070b;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(19) > div {
  background-color: #0b070a;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(20) > div {
  background-color: #050305;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

div.container-fluid > section:nth-child(2) > div:nth-child(21) > div {
  background-color: #050300;
  color: white;
  text-shadow: 1px 1px 2px black;
  opacity: .85;
}

img.img-fluid.rounded-top {
  padding: .5rem;
}

.creator-img {
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
}

</style>