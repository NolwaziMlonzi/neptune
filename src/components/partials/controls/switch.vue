<template>
  <div>
    <span v-if="disabled">
        <md-switch v-model="propData" :id="id" :class="className"  :value="value" disabled>{{name}}</md-switch>
    </span>
    <span v-if="!disabled">
        <md-switch v-model="propData" :id="id" :class="className"  :value="value">{{name}}</md-switch>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'RegularSwitch',
    data: () => ({
        propData:false
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
            type:[Number,String,Boolean]
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
  
</style>
