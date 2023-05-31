<template>
    <div class="container-fluid">

        <section class="row p-3 justify-content-end">
            <button class="col-3 btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-car">Create Car
                🚘</button>
        </section>

        <!-- NOTE v-for is iterating over the cars computed in the return...we aliased out ea. one as 'c' -->
        <!-- NOTE for the v-for...vue requires a 'key' so have a unique identifier -->
        <section class="row">
            <!-- NOTE when I want to pass data from a parent component to the child... we do that using props -->
            <div class="col-md-3 my-3" v-for="car in carsInAppState" :key="car.id">
                <CarCard :carProp="car" />
            </div>
        </section>

    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { carsService } from '../services/CarsService.js'
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import CarCard from '../components/CarCard.vue';
export default {
    components: { CarCard },
    setup() {

        async function getCars() {
            try {
                // logger.log('getting cars')
                await carsService.getCars()
            } catch (error) {
                Pop.error(error.message)
                logger.log(error)
            }
        }

        // NOTE this onMounted says run whatever block of code is inside it as soon the page/components 'mounts' or renders
        // NOTE this is similar to calling a function/method in the constructor of a controller
        onMounted(() => {
            getCars()
        })

        return {
            placeholderImg: 'http://thiscatdoesnotexist.com',
            // NOTE computeds almost always go on pages and 'parent components'
            carsInAppState: computed(() => AppState.cars)
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