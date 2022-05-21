export default {
    mutations: {
        setloginState(state, value) {
            state.islogin = value
        },
        setUserimg(state) {
            state.user.index = Math.round(Math.random() * 9);
        },
        setloginAd(state, value) {
            state.loginAd = value
        },
        setToken(state, token) {
            state.token = token
            localStorage.token = token //同步存储token至localStorage
        },

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
        },
        getloginAd(state) {
            return state.loginAd
        },
        getToken(state) {
            if (!state.token) {
                state.token = localStorage.getItem('token')
            }
            return state.token
        }
    },
    state: {
        user: {
            name: 'zxx',
            id: "123",
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
        token: "111",
        islogin: false,
        loginAd: "ParkingAd"
    }
}
