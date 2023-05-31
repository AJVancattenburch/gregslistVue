<template>

  <div class="container-fluid">
    <section class="row justify-content-center">

        <div class="col-8">
            <HouseCard :jobProp="activeJob" />
            <span>
              <h1>{{ activeJob?.rate }}</h1>
              <h1>{{ activeJob?.hours }}</h1>
            </span>
            <h2>{{ activeJob?.description }}</h2>
        </div>

    </section>
  </div>

</template>

<script>
  import { computed, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import Pop from '../utils/Pop.js';
  import { AppState } from '../AppState.js';
  import { logger } from '../utils/Logger.js';
  import { jobsService } from '../services/JobsService.js';
  import JobCard from '../components/JobCard.vue';

  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      async function getJobById() {
        try {
          const jobId = route.params.jobId;
          await jobsService.getJobById(jobId);
        } catch (error) {
          Pop.error(error.message);
          logger.log(error);
        }
      }
      onMounted(() => {
        getJobById();
      });
      return {
        activeJob: computed(() => AppState.activeJob)
      };
    },
    components: { JobCard }
  };

</script>

<style></style>