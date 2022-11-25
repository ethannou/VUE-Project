<template>
  <div>
      <form class="form-center" >
    <h1></h1>
<div class="form-group">
    <label for="job">Title</label>
    <input type="text" class="form-control" name="subject" aria-describedby="emailHelp" v-model="test.title">
</div>
<div class="form-group">
    <label for="job">Description</label>
    <input type="text" class="form-control" name="subject" aria-describedby="emailHelp" v-model="test.description" >
</div>
<div class="form-group">
    <label for="job">Education</label>
    <input type="text" class="form-control" name="subject" aria-describedby="emailHelp" v-model="test.education" >
</div>
   <div class="form-group">
    <label for="job">Experience</label>
   <input type="text" class="form-control" name="subject" aria-describedby="emailHelp" v-model="test.experience">
</div>
<div class="form-group">
    <label for="job">Availability</label>
    <input type="text" class="form-control" name="subject" aria-describedby="emailHelp" v-model="test.availability">
</div>
<router-link :to="{name:'JobList'}">
  <button class="btn btn-primary" v-on:click="updateJob">Update</button>
  </router-link>
  
</form>
  </div>
  
</template>

<script>
import axios from 'axios'
// import jobService from '../WorkService'
name: 'JobUpdate'
  export default {
    name: "JobUpdate",
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

  //Update Method
  methods:{
   updateJob(){
        axios.put(`http://localhost:4000/api/posts/update/${this.test._id}`, {
          _id: this.test._id,
        title: this.test.title,
        description: this.test.description,
        education: this.test.education,
        experience: this.test.experience,
        availability: this.test.availability
      }).then(res => {
        router.push({ name: 'JobList' })
      }).catch(err => {
        console.log(err)
      })
      }
  }
}
</script>