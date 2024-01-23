const {createApp} = Vue;

const app = createApp({
    name: 'VueTodoList',
    data: () => ({
        tasks
        
    }),

    methods: {
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => id !== task.id);
        }
    }
});

app.mount('#root');