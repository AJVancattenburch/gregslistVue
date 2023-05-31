<template>
  <div class="container-fluid">

    <section class="row p-3 justify-content-end">
        <button class="col-3 btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-job">Create Job
            🚘</button>
    </section>

    <!-- NOTE v-for is iterating over the jobs computed in the return...we aliased out each one as 'j' -->
    <!-- NOTE for the v-for...vue requires a 'key' so have a unique identifier -->
    <section class="row">
        <!-- NOTE when I want to pass data from a parent component to the child... we do that using props -->
        <div class="col-md-3 my-3" v-for="job in jobsInAppState" :key="job.id">
            <JobCard :jobProp="job" />
        </div>
    </section>

  </div>
  <Modal id="create-job">
    <JobForm/>
  </Modal>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { jobsService } from '../services/JobsService.js';
import { AppState } from '../AppState.js';
import JobCard from '../components/JobCard.vue';
import JobForm from '../components/JobForm.vue';

export default {
  components: { JobCard, JobForm },
  setup() {

    async function getJobs() {
      try {
        await jobsService.getJobs()
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }

    onMounted(() => {
        getJobs()
    })

    return {
        placeholderImg: 'http://thiscatdoesnotexist.com',
        jobsInAppState: computed(() => AppState.jobs)
    };
  },
}

</script>

<style>

  body {
    background-color: #2a2449;
  }

  .creator-img {
    height: 5vh;
    width: 5vh;
    border-radius: 50%;
  }

</style>