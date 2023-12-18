<template>
  <div id="app">
    <header>
      <h1>Task Manager</h1>
    </header>
    <main>
      <TaskForm />
      <TaskList />
    </main>
  </div>
</template>

<script>
import TaskForm from "@/components/TaskForm.vue";
import TaskList from "@/components/TaskLists.vue";

export default {
  name: "App",
  components: {
    TaskForm,
    TaskList,
  },
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
