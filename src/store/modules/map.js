import Vue from 'vue'
export default {
    mutations: {
        setItem(state, value) {
            state.infoItem = value
        },
        setPrice(state,value){
            state.Marker[state.infoIndex].price = value
        },
        setIndex(state,value){
            state.infoIndex = value    
        }
    },
    getters: {
        getMarker(state) {
            return state.Marker
        },
        getItem(state) {
            return state.infoItem
        },
        getIndex(state) {
            return state.infoindex
        }
    },
    state: {
        infoItem:{},
        infoindex:0,
        Marker: [
            {
                lng: 117.201509,
                lat: 39.085318,
                stationName: "q停车场",
                stationAddress: "天津市东100m",
                parkingSpaces: 500,
                Space: 240,
                price: 8,
            },
            {
                lng: 121.126757,
                lat: 31.140653,
                stationName: "1停车场",
                stationAddress: "上海市牛头山路东100m",
                parkingSpaces: 500,
                Space: 240,
                price: 5,
            },
            {
                lng: 121.126757,
                lat: 31.140653,
                stationName: "3停车场",
                stationAddress: "上海市牛头山路东100m",
                parkingSpaces: 500,
                Space: 240,
                price: 10,
            },
            {
                lng: 113.672544,
                lat: 37.138809,
                stationName: "xxx停车场",
                stationAddress: "上海市牛头山路东100m",
                parkingSpaces: 500,
                Space: 240,
                price: 8,
            },
            {
                lng: 112.065793,
                lat: 38.057122,
                stationName: "xxx停车场",
                stationAddress: "上海市牛头山路东100m",
                parkingSpaces: 500,
                Space: 240,
                price: 6,
            },
        ],
    }
}
