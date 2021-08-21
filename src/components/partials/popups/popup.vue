<template>
  <md-modal-dialog>
    <md-dialog-title>{{title}}</md-dialog-title>

    <md-dialog-content v-if="content.fields && !message">
      <!-- <md-field>
        <label>A number</label>
        <md-input type="number" v-model="number" />
      </md-field> -->
      <div class="input-fields" v-for="(field , index) in content.fields.inputFields" :key="index">
      <input-control
      ref="input-control"
      :field="field || {}"
      />
      </div>
    </md-dialog-content>
    <md-dialog-content v-if="message">
     <md-field>
       <div class="message">
       {{message}}
       </div>
     </md-field>
    </md-dialog-content>

    <md-dialog-actions>
         <md-button v-for="(button,index) in buttons" :key="index" @click="actionBtn(button.buttonAction)">{{button.buttonText}}</md-button>
      <!-- <md-button @click="$modal.submit(number)">Submit</md-button> -->
       <!-- <md-button @click="">Test</md-button> -->
      <!-- <md-button @click="$modal.cancel()">Cancel</md-button>   -->
    </md-dialog-actions>
  </md-modal-dialog>
</template>

<script>
  export default {
    name: 'GuessDialog',
    data:function data()
    {
        var data = {
            number:0
        }
        return data;
    },
    computed:
    {
        
    }
    ,mounted()
    {
        console.log("data ",this.content)
    }
    ,methods:
    {
        actionBtn:function(buttonAction)
        {
          return this.$emit(buttonAction)
        }
    }
    ,props:
    {
        title:
        {
            type:String,
            required:false
        }
        ,buttons:
        {
          type:Array,
          required:false
            // type: Function,
            // // Unlike object or array default, this is not a factory function - this is a function to serve as a default value
            // default()
            // {
            //     return 'Default function'
            // }
        }
        ,message:
        {
          type:String,
          required:false
        }
        ,content:
        {
            type:Object,
            required:false
        }
    }
    ,components:
    {
        "input-control":function(){return import("@/components/inputControls.vue")}
    }
  }
</script>
<style lang="scss" scoped>
.md-dialog-title
{
    text-align: center;
}
.message
{
  text-align: center;
}
</style>