import TaskForm from '@/components/TaskForm.vue';
import TaskList from '@/components/TaskLists.vue';
import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TaskForm },
    { path: '/task-list', component: TaskList },
  ],
});

export default router;
