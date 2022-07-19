<template>
    <div class="human-readable-id">
        <v-input v-model="value" @input="handleChange($event.target.value)">
            <template #prepend>
                <v-icon name="perm_identity" />
            </template>
        </v-input>
        <v-button icon><v-icon name="refresh"/></v-button>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: null,
            }
        },
        
        emits: ['input'],
        
        mounted: function() {
            console.log("MOUNTED:");
            console.log(this.value);
        },

        methods: {

            handleChange: function(value) {
                console.log(`Value Changed: ${value}`);
                this.emit('input', value);
            }

        }
    };
</script>


<style scoped>
    .human-readable-id {
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }
</style>