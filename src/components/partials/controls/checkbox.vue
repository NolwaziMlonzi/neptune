<template>
    <div>
        <span v-if="disabled">
            <md-checkbox v-model="disabled" :id="id" :class="className"  :value="value" disabled>{{name}}</md-checkbox>
        </span>
        <span v-if="!disabled">
            <md-checkbox v-model="propData" :id="id" :class="className"  :value="value">{{name}}</md-checkbox>
        </span>
        <span v-if="!disabled && indeterminate">
            <md-checkbox v-model="propData" :id="id" :class="className"  indeterminate>Indeterminate</md-checkbox>
        </span>
        <span v-if="disabled && indeterminate">
            <md-checkbox v-model="propData" :id="id" :class="className"  indeterminate disabled>Indeterminate</md-checkbox>
        </span>
    </div>
</template>

<script>
  export default {
    name: 'RegularCheckboxes',
    data: () => ({
        propData:""
    })
    ,props:
    {   id:
        {
            type:String,
            required:true
        },
        className:
        {
            type:String,
            required:false
        },
        name:
        {
            type:String,
            required:true
        }
        ,indeterminate:
        {
            type:Boolean,
            required:false,
            default:false
        }
        ,value:
        {
            type:Boolean
            ,required:true
        }
        ,disabled:
        {
            type:Boolean,
            required:false
        }
    }
  }
</script>

<style lang="scss" scoped>
  .md-checkbox {
    display: flex;
  }

</style>