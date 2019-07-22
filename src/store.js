import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isEditOn: false,
    isAddNewOn: false,
    employee : [
      {
        "employee_id": 1,
        "empFirstName": "Abdullah",
        "empLastName": "Calisir",
        "empType": "trainer",
        "isOnline": true
      },
      {
        "employee_id": 2,
        "empFirstName": "Baris",
        "empLastName": "Babacanoglu",
        "empType": "backend developer",
        "isOnline": false
      },
      {
        "employee_id": 3,
        "empFirstName": "Mehmet",
        "empLastName": "Ozsoy",
        "empType": "designer",
        "isOnline": true
      },
      {
        "employee_id": 4,
        "empFirstName": "Mehmet",
        "empLastName": "Bulut",
        "empType": "backend developer",
        "isOnline": true
      },
      {
        "employee_id": 5,
        "empFirstName": "Arda",
        "empLastName": "Dogan",
        "empType": "frontend developer",
        "isOnline": false
      },
      {
        "employee_id": 6,
        "empFirstName": "Eray",
        "empLastName": "Izgi",
        "empType": "full stack developer",
        "isOnline": false
      }
    ]
  },
  mutations: {

  },
  actions: {
  },
  getters: {  
  }
})
