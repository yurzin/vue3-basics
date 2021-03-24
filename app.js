const App = {
    data() {
        return {
            counter: 0,
            title: 'Счетчик'
        }
    }
};

// 1 способ инициализировать Vue
const app = Vue.createApp(App);
app.mount('#app');

// 2 способ инициализировать Vue
//Vue.createApp(App).mount('#app');