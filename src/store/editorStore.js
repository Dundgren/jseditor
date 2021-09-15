import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            testState: 0,
            currentId: "",
            currentTitle: "",
            currentContent: "",
            editStatus: "Editing new document",
            docs: []
        }
    },
    mutations: {
        testMutation(state) {
            state.testState++
        },
        setCurrentId(state, id_) {
            state.currentId = id_;
        },
        setCurrentTitle(state, title) {
            state.currentTitle = title;
        },
        setCurrentContent(state, content) {
            state.currentContent = content;
        },
        setEditStatus(state, editString) {
            state.editStatus = editString;
        },
        setDocs(state, docs) {
            state.docs = docs
        },
        updateDoc(state, doc) {
            const docIndex = state.docs.findIndex((doc) => doc._id);
            state.docs[docIndex] = doc;
            state.docs = [...state.docs];
        }
    }
});

export default store;
