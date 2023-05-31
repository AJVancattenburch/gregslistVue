<template>
  <div class="rounded elevation-5" v-if="jobProp">
    <router-link :to="{ name: 'JobDetails', params: { jobId: jobProp?.id } }">
        <div style="color: green; text-shadow: 1px 1px 3px #fcefce;" class="p-2 m-2 salary-border">
          <h2>Yearly Salary: ${{ jobProp?.rate }}</h2>
          <h2>Weekly Hours: {{ jobProp?.hours }}</h2>
        </div>
    </router-link>
    <div style="color: lightgray; text-shadow: 0 0 3px darkblue;" class="p-2">
      <h3 style="filter: brightness(150%); text-shadow: 0 0 3px lightblue; color: lightgray;" class="ps-2">{{ jobProp?.jobTitle }}</h3>
      <h5 class="ps-2">{{ jobProp?.description }}</h5>
      <div class="d-flex justify-content-between align-items-center">
          <p class="text-end ps-2" style="color: dodgerblue; text-shadow: 0 0 1px aliceblue;">{{ jobProp?.company }}</p>
          <img class="creator-img" :src="jobProp?.creator.picture" alt="">
      </div>
      <div class="text-end py-2">
          <button 
          @click="deleteJob(jobProp?.id)" v-if="jobProp?.creator.id == account?.id" class="btn btn-danger" 
          title="Delete Job"><i class="mdi mdi-delete"></i> </button>
      </div>
    </div>
  </div>
</template>

<script>

  import { computed } from 'vue';
  import { Job } from '../models/Job.js';
  import { AppState } from '../AppState.js';
  import { logger } from '../utils/Logger.js';
  import { jobsService } from '../services/JobsService.js';

  export default {
    props: {
        jobProp: { type: Job, required: true }
    },
    setup() {

        return {

            async deleteJob(jobId) {
                try {
                    await jobsService.deleteJob(jobId)
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            },

            account: computed(() => AppState.account)
        };
    },
  };

</script>

<style>

  .salary-border {
    border-top: none;
    border-left: 3px solid skyblue;
    border-bottom: 3px solid #69acc2;
    border-right: 3px solid #4b92aa;
    border-radius: 1rem;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
  }

</style>