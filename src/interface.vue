<template>
    <div class="human-readable-id">
        <v-input v-model="value" @input="handleChange($event.target.value)">
            <template #prepend>
                <v-icon name="perm_identity" />
            </template>
        </v-input>
        <v-button @click="refresh" icon><v-icon name="refresh"/></v-button>
    </div>
</template>

<script>
    import getHRI from './hri';

    export default {
        props: {
            value: {
                type: String,
                default: null,
            }
        },
        
        emits: ['input'],
        
        mounted: function() {
            if ( !this.value ) {
                let init = getHRI();
                this.$emit('input', init);
            }
        },

        methods: {

            /**
             * Clean the user input
             * - remove special characters
             * - replace spaces
             * @param {String} value value from user input
             */
            handleChange: function(value) {
                let replaced = value.replace(/\s+/g, '-');
                replaced = replaced.replace(/[^a-z0-9\-]/gi, '');
                this.$emit('input', replaced);
            },

            /**
             * Get a new human-readable-id for the value
             */
            refresh: function() {
                let value = getHRI();
                this.$emit('input', value);
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