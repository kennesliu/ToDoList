new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasks: [],
    completedTasks: []
  },
  methods: {
    addTask: function() {
      if (this.newTask.trim() !== '') {
        this.tasks.push(this.newTask.trim());
        this.completedTasks.push(false);
        this.newTask = '';
      }
    },
    removeTask: function(index) {
      this.tasks.splice(index, 1);
      this.completedTasks.splice(index, 1);
    }
  },
  computed: {
    totalTasks: function() {
      return this.tasks.length;
    },
    completedTasksCount: function() {
      return this.completedTasks.filter(task => task).length;
    }
  }
});
