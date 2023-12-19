<template>
  <div>
    <h2>Task List</h2>
    <ul>
      <li v-for="task in tasks" :key="task._id">{{ task.name }}</li>
    </ul>
    <router-link to="/">
      <button>Back to Add Task</button>
    </router-link>
  </div>
</template>

<script>
import apiClient from '@/services/api';

export default {
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await apiClient.get('/tasks');
        this.tasks = response.data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>
<style scoped>
  .task-list {
    margin-top: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    background-color: #f4f4f4;
    margin-bottom: 5px;
    padding: 10px;
    border-radius: 4px;
  }
  button{
    background-color: #41b883;
    color: white;
    padding: 10px;
    cursor: pointer;
  }
  </style>
  