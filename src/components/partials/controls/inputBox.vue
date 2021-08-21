<template>
    <div>
        <!-- disabled input control e.g date,number,file,text--> 
        <md-field v-if="disabled && type && type.toLowerCase() !='date'">
            <label>{{label}}</label>
            <md-input :id="id" :name="name" :class="className" v-model="fileData" :value="value" readonly></md-input>
        </md-field>
        <!-- disabled date value -->
        <md-field v-else-if="disabled && type && type.toLowerCase() =='date'">
            <md-input :id="id" :name="name" :class="className" v-model="fileData" :type="type" readonly/>
        </md-field>
        <!-- Enabled input controls -->
        <md-field v-else-if="!disabled && type && type.toLowerCase() !='date'">
            <label>{{label}}</label>
            <md-input :id="id" :name="name" class='text' :class="className" v-model="fileData" :placeholder="placeholder" :type="type"></md-input>
        </md-field>
        <!-- Enabled date input control -->
        <md-field v-else-if="!disabled && type && type.toLowerCase() =='date'">
            <md-input :id="id" :name="name" :class="className" v-model="fileData" :type="type"/>
        </md-field>
        <!-- Disabled textarea input control -->
        <md-field v-else-if="disabled && type && type.toLowerCase()=='textarea'">
            <md-textarea :id="id" :name="name" :class="className" v-model="fileData" disabled></md-textarea>
        </md-field>

        <md-field v-if="autogrow && type && type.toLowerCase()=='textarea'">
            <md-textarea :id="id" :name="name" :class="className" v-model="fileData" md-autogrow></md-textarea>
        </md-field>
        <!-- Enabled textarea -->
        <md-field v-if="!disabled && !autogrow && type && type.toLowerCase()=='textarea'">
            <md-textarea :id="id" :name="name" :class="className" v-model="fileData"></md-textarea>
        </md-field>
  </div>
</template>

<script>
  export default {
    name: 'TextFields',
    data:function data ()
    {
        var data = 
        {
            fileData:""
        }
        return data;
    }

    // ,watch:
    // {
    //     value:
    //     {
    //         handler: async function (val)
    //         {
    //             this.fileData = val;
    //         }
    //         ,immediate: true
    //         ,deep:true
    //     }
    // }
    ,props:
    {
        label:
        {
            type:String,
            required:false
        }
        ,name:
        {
            type:String,
            required:true
        }
        ,type:
        {
            type:String,
            required:true
        },
        autogrow:
        {
            type:Boolean,
            required:false
        },
        disabled:
        {
            type:Boolean,
            required:false
        }
        ,placeholder:
        {
            type:String,
            required:false
        }
        ,value:
        {
            type:String,
            required:true
        },
        id:
        {
            type:String,
            required:true
        },
        className:
        {
            type:String,
            required:false
        }
    }
    ,methods:
    {
    }
    ,computed:
    {
    }
  }
</script>
<style lang="scss">
input::placeholder {
  color: red;
}
</style>
