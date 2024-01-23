const {createApp} = Vue;

const app = createApp({
    name: 'VueTodoList',
    data: () => ({
        tasks,
        newTaskText: ''
    }),

    methods: {
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => id !== task.id);
        },

        addTask() {
            const newTask = {
                id: new Date().toISOString(), 
                done: false,
                text: this.newTaskText
            }

            this.tasks.push(newTask);

            this.newTaskText = '';
            this.$refs.input.focus();
        },

        /* TOGGLE SENZA CHECKBOX (SOLTANTO CON ID)
        toggleTaskDone(clickedId) {
            this.tasks.forEach(task => {
                if (clickedId === task.id) {
                    task.done = !task.done
                }
            })
        }
        */
    }
});

app.mount('#root');