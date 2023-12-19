<template>
  <div id="app">
    <header>
      <h1>Task Manager</h1>
    </header>
    <main>      
    <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #41b883;
  padding: 20px;
  color: white;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  margin: 0;
}

</style>
