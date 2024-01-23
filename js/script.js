const {createApp} = Vue;

const app = createApp({
    name: 'VueTodoList',
    data: () => ({
        tasks
    })
});

app.mount('#root');