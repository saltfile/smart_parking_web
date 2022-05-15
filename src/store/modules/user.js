export default {
    mutations: {
        setloginState(state, value) {
            state.islogin = value
        },
        setUserimg(state) {
            state.user.index = Math.round(Math.random() * 9);
        }
    },
    getters: {
        getUser(state) {
            return state.user
        },
        getLogin(state) {
            return state.islogin
        },
        getUserimg(state) {
            return state.user.index
        }
    },
    state: {
        user: {
            name: 'zxx',
            index: 0,
            img: [
                "01.png",
                "02.png",
                "03.png",
                "04.png",
                "05.png",
                "06.png",
                "07.png",
                "08.png",
                "09.png",
                "10.png",
            ],
        },
        islogin: true,
    }
}
