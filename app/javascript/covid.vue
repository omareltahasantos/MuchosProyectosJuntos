<template>
  <div>
    <div class="border border-light fondo-covid sticky-top">
      <span class="d-flex justify-content-center mt-3 mb-3">Covid-19 : We are delivering to your region with limited shipping options. Please expect extended delivery time.</span>
    </div>
    <div v-for="cats in catsArray" v-bind:key="cats">
      <p>{{cats.name}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  
    data (){
        return{
           catsArray: []
        }
        
    },
    methods: {
      
    },
    computed: {
     
    },
    created () {
     // axios.get('/cats')
     // .then((response) => {
     //   console.log(response.data);
      //  this.catsArray= response.data
       
   //  })
        axios
        .get('http://localhost:3000/cats')
        .then(response => (this.catsArray = response.data))
    }
}
</script>


<style scoped>
  .fondo-covid{
    background-color: grey;
    color: white;
    font-weight: bold;
  }
</style>