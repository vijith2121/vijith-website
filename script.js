$(document).ready(function(){
    $("#formId").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            email:{
              required:true,
              email:true
            },
            subject:{
                required:true,
                minlength:10,
                maxlength:100
            },
            message:{
                required:true,
                minlength:20,
                maxlength:100
            }
            
        
        }
        
    })
})