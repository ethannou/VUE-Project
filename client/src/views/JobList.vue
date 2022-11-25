<template>
  <div>
    <b-table hover :items="job" :fields="fields">
    <!-- <b-table striped hover :items="job" :fields="fields"> -->
    <template v-slot:cell(index)="data">
    <p :to="{name: 'JobList', query:{ jobs: job[data.index]}}">{{data.index}}</p>
    <!-- <b-button @click="editJob(data.index)" variant="primary" size="sm">Edit</b-button> -->
    
    <router-link :to="{name:'JobUpdate', query:{ jobs: job[data.index]}}">
      <b-button class="btn btn-primary">Edit</b-button></router-link>
    

    <router-link :to="{name:'JobDelete', query:{ jobs: job[data.index]}}"> 
      <b-button variant="danger">Delete</b-button></router-link>

    <!-- <b-button @click="deleteJob(data.index)" v-b-modal="'edit-modal'" variant="danger" size="sm">Delete</b-button> -->
    
    </template>
     </b-table>
  </div>
  
</template>

<script>
import job from '../WorkService'
  export default {
    name: "JobList",
    data() {
      return {
        job: [],
        jobs: Object,

        diffObject:{
          FirstName:'',
        },

        jobId:'',
        err:'',
        fields: [ 
          'Index',
          {
            key: 'title',
            sortable: false,
            variant: 'dark'
          },
          {
            key: 'description',
            sortable: false,
            variant: 'info'
          },
          {
            key: 'education',
            sortable: false,
            variant: 'secondary'
          },
          {
            key: 'experience',
            sortable: false,
          },
          {
            key: 'availability',
            sortable: false,
          },    
        ]    
      }
    },
//Retrieve 
    async created(){
      try{
        this.job = await job.getWorker();
      }catch(err){
        this.error = err.message;
      }
  }
  

  }
</script>