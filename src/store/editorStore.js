import { createStore } from "vuex";

const store = createStore({
    state () {
        return {
            testState: 0,
            currentId: "",
            currentTitle: "",
            currentContent: ""
        }
    },
    mutations: {
        testMutation (state) {
            state.testState++
        },
        setCurrentId (state, id_) {
            state.currentId = id_;
        },
        setCurrentTitle (state, Title) {
            state.currentTitle = Title;
        },
        setCurrentContent (state, Content) {
            state.currentContent = Content;
        }
    }
});

export default store;
