import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/vue-material.min.css'
// import VueExcelEditor from 'vue-excel-editor'
// import MdModalDialog from 'vue-material-modal-dialog'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueRouter from 'vue-router';
// import Vue from 'vue'
// import VueQRCodeComponent from 'vue-qrcode-component'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)
// Vue.use(MdModalDialog)
// Vue.use(VueExcelEditor)
Vue.use(VueRouter);
// Vue.component('qr-code', VueQRCodeComponent)
new Vue({
  render: h => h(App),
}).$mount('#app')
