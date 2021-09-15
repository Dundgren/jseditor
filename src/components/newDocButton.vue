<template>
    <button @click="newDocument" id="new-doc-button">New Document</button>
</template>

<script>
export default {
    methods: {
        newDocument () {
            this.$store.commit("setCurrentId", "");
            this.$store.commit("setCurrentTitle", "");
            this.$store.commit("setCurrentContent", "");
            this.$store.commit("setEditStatus", "Editing new document");
        }
    }
}
</script>