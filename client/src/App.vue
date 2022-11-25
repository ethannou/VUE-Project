<template>

  <div id="app">
    <b-navbar toggleable="xl" type="dark" variant="dark">
    <b-navbar-brand href="/">WORKFORCE</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item href="/jobpost" v-show="true">Job Post</b-nav-item> -->
        <!-- <b-nav-item :to="{ path: 'jobpost', query: { job: jobpost }}">Job Post</b-nav-item> -->
        <b-nav-item href="/login" >Sign In</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-3" placeholder="Search"></b-form-input>
          <b-button size="md" class="my-1 my-sm-0" variant="info" type="submit">Search</b-button>
        </b-nav-form>
        
        <!-- <b-nav-item-dropdown right> -->
          
          <b-nav-item-dropdown text="User" right>
          <template v-slot:button-content>
          <!-- <em>User</em> -->         
          </template>
          <b-dropdown-item href="/joblist">Job List</b-dropdown-item>
          <b-dropdown-item href="/profile">Profile</b-dropdown-item>
          <b-dropdown-item href="/login">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <router-view />
  </div>
</template>

<script>

export default {
  data(){
    return{
      jobpost: {
            title: "",
            description: "",
            education: "",
            experience: "",
            availability: ""
          },
    }
  },
  name: 'App',
  components: {
   
  }

}
</script>

<style scoped>
b-navbar-brand{
  color:red
}

</style>