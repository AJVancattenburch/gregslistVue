<template>
  <div class="modal-content">
      <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Create Job</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <form @submit="submitJobForm()">
          <div class="modal-body" name="modal-body">
              <div class="mb-3">
                  <label for="jobTitle" class="form-label">Job Title:</label>
                  <input type="text" v-model="editable.jobTitle" required class="form-control" id="jobTitle">
              </div>
              <div class="mb-3">
                  <label for="company" class="form-label">Company:</label>
                  <input type="text" v-model="editable.company" required class="form-control" id="company">
              </div>
              <label for="rate" class="form-label">Salary:</label>
              <select v-model="editable.rate" required class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example">
                  <option v-for="rate in rate" :key="rate" :value="rate">{{ rate }}
                  </option>
              </select>
              <label for="hours" class="form-label">Hours:</label>
              <select v-model="editable.hours" required class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example">
                  <option v-for="hours in hours" :key="hours" :value="hours">{{ hours }}
                  </option>
              </select>
              <div class="mb-3">
                  <label for="description" class="form-label">Description:</label>
                  <textarea type="text" v-model="editable.description" required class="form-control" id="description"></textarea>
              </div>
              <div class="mb-3">
                  <label for="imgUrl" class="form-label">Please attach <b>at least one</b> image URL below:</label>
                  <textarea type="url" v-model="editable.imgUrl" required class="form-control" id="imgUrl"></textarea>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Create Job</button>
          </div>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { jobsService } from '../services/JobsService.js';
import { Modal } from 'bootstrap'
export default {
  setup() {
    const editable = ref({})
      return {
        editable,
          rate: [
            80000,
            100000,
            120000,
            250000,
            500000,
            1000000
          ],
          editable,
          hours: [
              20,
              30,
              40
          ],
          
          async submitJobForm() {
            try {
                  logger.log('submitting career form!')
                  const formData = editable.value
                  window.event.preventDefault()
                  await jobsService.createJob(formData)
                  editable.value = {}
                  Modal.getOrCreateInstance('#create-job').hide()
              } catch (error) {
                  Pop.error(error.message)
                  logger.log(error)
              }
          }
    };
  },
};
</script>
