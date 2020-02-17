const state = {
    payload: {
        data: {
            "test": "world"
        },
        file: "ka"
    }

}

const mutations = {
    updateName(state, data) {
        state.payload.data.adresse = data
    },
    updateAdresse(state, data) {
        state.payload.data.adresse = data
    },
    updateForm(state, data) {
        state.payload.data = data
    }

}

export default {
    state,
    mutations,
}
