<template>
  <div class="modal-content">
      <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Create House</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <form @submit="submitHouseForm()">
          <div class="modal-body" name="modal-body">
              <div class="mb-3">
                  <label for="price" class="form-label">Price:</label>
                  <input type="number" v-model="editable.price" min="5" required class="form-control" id="price">
              </div>
              <select v-model="editable.levels" required class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example">
                  <option v-for="levels in levels" :key="levels" :value="levels">{{ levels }}
                  </option>
              </select>
              <select v-model="editable.bedrooms" required class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example">
                  <option v-for="bedrooms in bedrooms" :key="bedrooms" :value="bedrooms">{{ bedrooms }}
                  </option>
              </select>
              <select v-model="editable.bathrooms" required class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example">
                  <option v-for="bathrooms in bathrooms" :key="bathrooms" :value="bathrooms">{{ bathrooms }}
                  </option>
              </select>
              <div class="mb-3">
                  <label for="year" class="form-label">Built in:</label>
                  <input type="number" v-model="editable.year" min="1980" required class="form-control" id="year">
              </div>
              <div class="mb-3">
                  <label for="description" class="form-label">Description:</label>
                  <input type="text" v-model="editable.description" required class="form-control" id="description">
              </div>
              <div class="mb-3">
                  <label for="imgUrl" class="form-label">Image:</label>
                  <input type="url" v-model="editable.imgUrl" required class="form-control" id="imgUrl">
              </div>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Create House</button>
          </div>
      </form>

  </div>
</template>

<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
// import bootstrap from 'bootstrap';
import { Modal } from 'bootstrap'
export default {
  setup() {
      // NOTE 'ref' is reactive and can be any data type we want
      // NOTE because we need to format an object to POST to the server....this ref will serve as the 'placeholder' object for storing all of the input values from the form
      const editable = ref({})
      return {
          editable,
          bedrooms: [
              '1',
              '2',
              '3',
              '4',
              '5'
          ],
          editable,
          bathrooms: [
              '1',
              '1.5',
              '2',
              '2.5',
              '3',
              '3.5',
              '4',
              '4.5',
              '5'
          ],

          async submitHouseForm() {
              try {
                  logger.log('submitting the house form')
                  // NOTE we must send the editable.value to 'strip' the proxy layer 
                  const formData = editable.value
                  window.event.preventDefault()
                  await housesService.createHouse(formData)
                  editable.value = {} // NOTE this is the VUE equivalent of form.reset()
                  Modal.getOrCreateInstance('#create-house').hide() // NOTE close the modal
              } catch (error) {
                  Pop.error(error.message)
                  logger.log(error)
              }
          }


      };
  },
};
</script>

<style></style>