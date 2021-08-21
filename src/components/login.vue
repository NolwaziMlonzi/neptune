<template>
  <div class="login-container">
     <div class="login-page">
       <div class="wallpaper-login"></div>
        <div class="vue-tempalte">
        <div class="form">
            <h3>
                Love Mercy Hospital
               <md-icon style="font-size:30px">login</md-icon>
               <br>
               <img alt="Vue logo" src="../assets/logo.png">
            </h3>

            <div v-for="(field,index) in fields" :key="index">
                <div class="form-group">  
                    <input-control
                    ref="text"
                    :field="field"
                    />
                </div>
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Log In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <a href="">Forgot password?</a>
            </p>

        </div>
        </div>
   </div>
  </div>
</template>

<script>
    export default {
        data:function data() {
            var data = 
            {
                fields:
                {
                    username:
                    {
                        name:"username"
                        ,placeholder:"Email"
                        ,value:""
                        ,type:"text"
                        ,className:'username'
                        ,labelName:"Email"
                    }
                    ,password:
                    {
                        name:"password",
                        placeholder:"Password",
                        value:"",
                        type:"password",
                        labelName:"Password"
                    }
                }

            }
            return data;
        }
        ,methods:
        {

        }
        ,components:
        {
            "input-control":function(){return import("@/components/partials/inputControls.vue")}
        }
    }
</script>
<style lang="scss">

.login-page {
   align-items: center;
   display: flex;
   height: 100vh;
   background-color: #000000;

   .wallpaper-login {
       position: relative;
       z-index: 0;
      background: url('../assets/map.png')
         no-repeat center center;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
   }
}
.md-icon {
  position: relative;
  color:#fff !important;
  font-size: 30px !important;
}
h3
{
    padding: 20px;
    height: 80px;
    background: rgb(255, 0, 0);
    color: #fff;
    font-family: 'Roboto' !important;
}
.vue-tempalte
{
    padding: 170px 500px;
    position: absolute;
    background-color: rgba(1, 1, 1, 0.85)
}
.form
{
    background: rgba(145, 143, 143, 0.3);   
    width: 450px !important;
    height: 386px;
}
#input_text_Email::placeholder
{
    color: rgb(165, 161, 161);
}
#input_password_Password::placeholder
{
    color: rgb(165, 161, 161);
}
.btn-lg
{
    padding: .5rem 11.8rem !important;
}
</style>