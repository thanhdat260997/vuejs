<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
// import todoList from './components/todoList.vue'

export default {
  name: 'App',
  components: {
    // todoList
  }
}
</script>

<style>
       table {
        border-collapse: collapse;
        width: 70%;
        border: 1px solid black;
        margin: 10px;
    }
    tr th {
        border: 1px solid black;
        
        padding: 8px;
        text-align: center;
        
    }
</style>
