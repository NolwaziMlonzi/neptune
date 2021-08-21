<template>
    <div>
        <div class="md-layout md-gutter" v-if="!disabled && selectType && selectType.toLowerCase() == 'single select'">
            <div class="md-layout-item">
                <md-field>
                    <md-select
                    v-model="propData"
                    :name="name"
                    :id="id"
                    :placeholder="placeholder">
                        <md-option v-for="(option,index) in options"
                        :key="index"
                        :value="option">
                            {{option}}
                        </md-option>
                    </md-select>
                </md-field>
            </div>
        </div>
        <div class="md-layout md-gutter" v-if="!disabled && selectType && selectType.toLowerCase() == 'multi select'">
            <div class="md-layout-item">
                <md-field>
                    <md-select
                    v-model="propData"
                    :name="name"
                    :id="id"
                    :placeholder="placeholder" multiple>
                        <md-option v-for="(option,index) in options"
                        :key="index"
                        :value="option">
                            {{option}}
                        </md-option>
                    </md-select>
                </md-field>
            </div>
        </div>
        <div class="md-layout md-gutter" v-if="disabled && selectType && selectType.toLowerCase() == 'single select'">
            <div class="md-layout-item">
                <md-field>
                    <md-select
                    v-model="propData"
                    :name="name"
                    :id="id"
                    :placeholder="placeholder" disabled>
                        <md-option v-for="(option,index) in options"
                        :key="index"
                        :value="option">
                            {{option}}
                        </md-option>
                    </md-select>
                </md-field>
            </div>
        </div>
        <div class="md-layout md-gutter" v-if="disabled && selectType && selectType.toLowerCase() == 'multi select'">
            <div class="md-layout-item">
                <md-field>
                    <md-select
                    v-model="propData"
                    :name="name"
                    :id="id"
                    :placeholder="placeholder" multiple disabled>
                        <md-option v-for="(option,index) in options"
                        :key="index"
                        :value="option">
                            {{option}}
                        </md-option>
                    </md-select>
                </md-field>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'BasicSelect',
    data: function data()
    {
        var data = 
        {
            propData:""
        }
        return data;
    }
    ,props:
    {
        id:
        {
            type: String,
            required: true
        },
        selectType:
        {
            type: String,
            required: true
        },
        placeholder:
        {
            type: String,
            required: false
        },
        className:
        {
            type: String,
            required: false
        },
        name:
        {
            type: String,
            required: true
        },
        value:
        {
            type: [Number,String],
            required: true
        },
        disabled:
        {
            type:Boolean,
            required:false
        },
        options:
        {
            type: Array,
            required: true
        }
    }
  }
</script>