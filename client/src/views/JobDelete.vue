<template>
  <div>
      <form class="form-center" >
    <h1></h1>
<div class="form-group">
    <label for="job">Title</label>
    <input type="text" class="form-control" name="subject" aria-describedby="research" :value="test.title" disabled="true">
</div>
<div class="form-group">
    <label for="job">Description</label>
    <input type="text" class="form-control" name="subject" aria-describedby="research" :value="test.description" disabled="true">
</div>
<div class="form-group">
    <label for="job">Education</label>
    <input type="text" class="form-control" name="subject" aria-describedby="research" :value="test.education" disabled="true">
</div>
   <div class="form-group">
    <label for="job">Experience</label>
   <input type="text" class="form-control" name="subject" aria-describedby="research" :value="test.experience" disabled="true">
</div>
<div class="form-group">
    <label for="job">Availability</label>
    <input type="text" class="form-control" name="subject" aria-describedby="research" :value="test.availability" disabled="true">
</div>
<router-link :to="{name:'JobList'}">
  <button class="btn btn-primary" v-on:click="deleteJob">Confirm</button>
  </router-link>
  
</form>
  </div>
  
</template>

<script>
import axios from 'axios'
import jobService from '../WorkService'
name: 'JobDelete'
  export default {
    name: "JobDelete",
    data() {
      return {
        // add: this.$route.query.jobs,
        test: {
          _id: this.$route.query.jobs._id,
          title: this.$route.query.jobs.title,
          description: this.$route.query.jobs.description,
          education: this.$route.query.jobs.education,
          experience: this.$route.query.jobs.experience,
          availability: this.$route.query.jobs.availability
        }   
    }
  },

  //Delete Method
  methods:{
      deleteJob(){
          try{
              this.job = jobService.deleteJob(this.test)
          }catch(err){
              this.error = err.message;
          }
          this.$router.push({ name: 'JobList'})
      },
  
  }
}
</script>