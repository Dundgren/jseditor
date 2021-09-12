import { createStore } from "vuex";

const store = createStore({
    state () {
        return {
            testState: 0,
            currentId: "",
            currentTitle: "",
            currentContent: "",
            editStatus: "Editing new document"
        }
    },
    mutations: {
        testMutation (state) {
            state.testState++
        },
        setCurrentId (state, id_) {
            state.currentId = id_;
        },
        setCurrentTitle (state, title) {
            state.currentTitle = title;
        },
        setCurrentContent (state, content) {
            state.currentContent = content;
        },
        setEditStatus (state, editString) {
            state.editStatus = editString;
        }
    }
});

export default store;
