<template>
    <div class= "container">
        <div v-if="field.type && field.type.toLowerCase() =='text' || field.type.toLowerCase() =='textarea'|| field.type.toLowerCase() =='number' || field.type.toLowerCase() =='password' || field.type.toLowerCase() =='email' || field.type.toLowerCase() =='file'|| field.type.toLowerCase() =='password' || field.type.toLowerCase() =='date'">
            <div class="input textboxs">
                <label class="input-label">
                    <!-- {{field.labelName}} -->
                </label>
                <input-box
                :type="field.type"
                :id="'input_'+field.type+'_'+field.labelName"
                :placeholder="field.placeholder"
                :class="field.className || 'text-box'"
                :name="field.name"
                :value="field.value"
                :label="field.labelName"
                :disabled="field.disabled || false"
                :autogrow="field.autogrow || false"
                />
            </div>
        </div>
        <div v-if="field.type && field.type.toLowerCase() =='single select' || field.type.toLowerCase() =='multi select'">
            <div class="single-selectbox">
                <label class="input input-label">
                    <!-- {{field.labelName}} -->
                </label>
                <select-input
                :id="'input_'+field.type+'_'+field.labelName"
                :placeholder="field.placeholder"
                :className="field.className || 'select-box'"
                :name="field.name"
                :value="field.value"
                :options="field.options"
                :selectType="field.type"
                :disabled="field.disabled || false"
                />
            </div>
        </div>
        <div v-if="field.type && field.type.toLowerCase() =='radio'">
            <div class="input radioButton">
                <radio-input
                :id="'input_'+field.type+'_'+field.labelName"
                :className="field.className || 'radio-button'"
                :name="field.name"
                :value="field.value"
                :disabled="field.disabled || false"
                />
            </div>
        </div>
        <div v-if="field.type && field.type.toLowerCase() =='check'">
            <div class="input checkBox">
                <check-input
                :id="'input_'+field.type+'_'+field.labelName"
                :className="field.className || 'check-box'"
                :name="field.name"
                :value="field.value"
                :disabled="field.disabled || false"
                />
            </div>
        </div>
        <div v-if="field.type && field.type.toLowerCase() =='switch'">
            <div class="input switch">
                <switch-input
                :id="'input_'+field.type+'_'+field.labelName"
                :className="field.className || 'switch-input'"
                :name="field.name"
                :value="field.value"
                :disabled="field.disabled || false"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
   data:function data()
   {
       var data = 
       {

       }
       return data;
   }
   ,props:
   {
        field:
        {
            type: Object,
            required: true
        }
   }
   ,methods:
   {
   }
   ,components:
   {
       "select-input":function(){return import("@/components/partials/controls/select.vue")}
       ,"input-box":function(){return import("@/components/partials/controls/inputBox.vue")}
       ,"radio-input":function(){return import("@/components/partials/controls/radio.vue")}
       ,"check-input":function(){return import("@/components/partials/controls/checkbox.vue")}
       ,"switch-input":function(){return import("@/components/partials/controls/switch.vue")}
   } 
}
</script>
<style lang="scss" scoped>
.input{
    text-align: left !important
}
</style>