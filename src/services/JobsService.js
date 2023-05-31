import { AppState } from "../AppState.js";
import { Job } from "../models/Job.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class JobsService {
  
      async getJobs() {
          const res = await api.get('api/jobs')
          logger.log('[GETTING JOBS]', res.data)
          AppState.jobs = res.data.map(j => new Job(j))
          logger.log(AppState.jobs)
      }
  
      async getJobById(jobId) {
          const res = await api.get(`api/jobs/${jobId}`)
          logger.log('[GETTING JOB BY ID]', res.data)
          AppState.activeJob = new Job(res.data)
      }

      async createJob(formData) {
        const res = await api.post('api/jobs', formData)
        logger.log('[CREATING JOB]', res.data)
        AppState.jobs.unshift(new Job(res.data))
      }

      async deleteJob(jobId) {
        const res = await api.delete(`api/jobs/${jobId}`)
        logger.log('[DELETING JOB]', res.data)
        AppState.jobs = AppState.jobs.filter(j => j.id != jobId)
      }
}

export const jobsService = new JobsService()