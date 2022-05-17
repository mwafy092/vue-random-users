const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Wick',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/7.jpg',
        };
    },
    methods: {
        async getUser() {
            const apiResponse = await fetch('https://randomuser.me/api/');
            const data = await apiResponse.json();
            const {
                name: { first, last },
                email,
                gender,
                picture: { large },
            } = data?.results[0];

            this.firstName = first;
            this.lastName = last;
            this.email = email;
            this.gender = gender;
            this.picture = large;
        },
    },
});

app.mount('#app');
