<template>
    <div class="container">
        <div class="jumbotron mt-4">
            <div class="col-sm-5 mx-auto" >
                <h1 class="text-center">PROFILE</h1>
            </div>
            <table class="table col-md-6 mx-auto">
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{{first_name}}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{{last_name}}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{{email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div>
  <b-card bg-variant="info">
    <b-form-group
      label-cols-lg="3"
      label="Job Form"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label-cols-sm="3"
        label="Job Title:"
        label-size="lg"
        label-align-sm="right"
        label-for="nested-street"
        

      >
        <b-form-input id="nested-street" v-model="jobpost.title"></b-form-input>
      </b-form-group>

    
      <b-form-group
        label-cols-md="3"
        label="Job Description:"
        label-size="lg"
        label-align-md="right"
        label-for="nested-state"
        placehold="Details about this job."
       
        
      >
      <!-- <input type="text" name="description" id="" v-model="jobpost.description"> -->
        <b-form-input id="nested-state"  v-model="jobpost.description"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Education Req:"
        label-size="lg"
        label-align-sm="right"
        label-for="nested-state1"
       
        
      >
        <b-form-input id="nested-state1"  v-model="jobpost.education"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Experience:"
        label-size="lg"
        label-align-sm="right"
        label-for="nested-country1"
       
        
      >
        <b-form-input id="nested-country1"  v-model="jobpost.experience"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Shift:"
        label-size="lg"
        label-align-sm="right" class="mb-0"  
      >
      <b-form-input id="nested-country"  v-model="jobpost.availability"></b-form-input>
      
      
        
      </b-form-group>
      <button class="btn btn-primary align-right" v-on:click="jobPost">Submit</button>
      <!-- <button class="btn btn-primary" v-on:click="jobPost">Log In</button> -->
    </b-form-group>
  
  </b-card>

</div>
    
    </div>
    
    
</template>

<script>
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import router from '../router'
export default {
  data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,

      jobpost: {
            // company:  "",
            title: "",
            description: "",
            education: "",
            experience: "",
            availability: ""
        },
    
    }
    
},
 methods: {
      jobPost(){
            // this.$router.push({name: 'Home'})
        axios.post('http://localhost:4000/api/posts/', {
        title: this.jobpost.title,
        description: this.jobpost.description,
        education: this.jobpost.education,
        experience: this.jobpost.experience,
        availability: this.jobpost.availability
      }).then(res => {
        router.push({ name: 'Home' })
      }).catch(err => {
        console.log(err)
      })
      }
     }
}
</script>