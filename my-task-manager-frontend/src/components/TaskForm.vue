<template>
  <div>
    <h2>Task Form</h2>
    <form @submit.prevent="submitTask">
      <label for="taskName">Task Name:</label>
      <input type="text" id="taskName" v-model="taskName" required />
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskName: "",
    };
  },
  methods: {
    async submitTask() {
      // Add logic to send the task to the backend API
      try {
        const response = await fetch('http://localhost:3000/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: this.taskName }),
        });

        if (response.ok) {
          console.log('Task submitted successfully');
          // Optionally, you can update the task list after a successful submission
          this.$emit('task-submitted');
          this.taskName = ""; // Clear the input after submitting
        } else {
          console.error('Failed to submit task');
        }
      } catch (error) {
        console.error('Error submitting task:', error);
      }
    },
  },
};
</script>
  
  <style scoped>
  div {
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
  
  label {
    margin-bottom: 8px;
  }
  
  input,
  textarea {
    margin-bottom: 16px;
    padding: 8px;
    font-size: 16px;
  }
  
  button {
    background-color: #41b883;
    color: white;
    padding: 10px;
    cursor: pointer;
  }
  </style>
  