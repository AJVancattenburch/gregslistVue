import { Profile } from "./Account.js";

export class Job {
    constructor(data) {
        this.id = data.id
        this.jobTitle = data.jobTitle
        this.company = data.company
        this.rate = data.rate
        this.hours = data.hours
        this.description = data.description
        this.createdAt = new Date(data.createdAt)
        this.creatorId = data.creatorId
        // NOTE this is unneccessary but provides more intellisense when accessing properties on the 'creator' because it has been mapped to a class
        this.creator = new Profile(data.creator)
    }
}