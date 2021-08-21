<template>
    <div>
        <div :class="className+` radio`" v-if="!disabled">
            <md-radio v-model="propData" :id="id" :name="name" :class="className" :value="value">{{name}}</md-radio>
        </div>
        <div v-if="disabled">
            <md-radio v-model="propData" :id="id" :name="name" :class="className" :value="value" disabled>{{name}}</md-radio>
        </div>
  </div>
</template>

<script>
  export default {
    name: 'RegularRadio',
    data: () => ({
        propData:false
    }),
    props:
    {
        name:
        {
            type:String,
            required:true
        }
        ,id:
        {
            type:String,
            required:true
        },
        className:
        {
            type:String,
            required:false
        },
        value:
        {
            type:[String,Boolean,Number],
            required:true
        },
        disabled:
        {
            type:Boolean,
            required:false,
            default:false
        }
    }
  }
</script>

<style lang="scss" scoped>
.radio
{
    text-align: left;
    display: flex;
}
</style>