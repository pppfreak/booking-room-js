       
       
    //    $(document).ready(function (){
            
    //         document.getElementById("accountDiv").style.display ="block";
    //         document.getElementById("loginDiv").style.display="none";
    //         document.getElementById("bookingDiv").style.display="none";
    //         document.getElementById("capacityDiv").style.display="none";
    //         document.getElementById("logoutLi").style.display="none";


    //       axios.interceptors.response.use(function (config){
    //           console.log('response received');
    //           console.log(config);
    //           if(config.headers.pragma){
    //               localStorage.setItem("token",config.headers.pragma);
    //           }
              
    //           return config;

    //       })

    //       axios.interceptors.request.use(function (config){
    //         console.log('request received');
    //         console.log(config);
    //         config.headers["Pragma"]=localStorage.getItem("token");
                
    //         return config;

    //     })
    //     })


       const signUpConfirmation = ()=> {
      
           const loginAPI= `http://localhost:8080/users`;
           const inpUsername = document.getElementById("signUp-username").value;
           const inpPassword = document.getElementById("signUp-password").value;
                       
           axios.post(loginAPI,{
               username:inpUsername,
               password:inpPassword
           })
           .then(res=>{
               signUp();            
           })
           .catch(err=>
           {
               showErrorNotification(err);
           })
            
       }
       
       const showErrorNotification = (error)=>{
          
          const errResponse = error.response.data.message;
          const firstChar = errResponse.charAt(0);

          switch(firstChar){
              case '-': alert("User  name already exist \nTry another name")
              case '~': alert("User name should be at least 3 characters");
              case '>': alert("Password should be 6 characters and contains with any symbol");
          }
     
       }


       const signUp = ()=> {
           
               document.getElementById("accountDiv").style.display="none";
               document.getElementById("loginDiv").style.display="block";
       }

       const doLogIn = ()=> {
        document.getElementById("accountDiv").style.display="none";
        document.getElementById("loginDiv").style.display="block";
       }

       const logInConfirmation = ()=> {
       
       
            const loginAPI= `http://localhost:8080/login`;
            const inpUsername = document.getElementById("logIn-username").value;
            const inpPassword = document.getElementById("logIn-password").value;
        
            axios.post(loginAPI,{
                username:inpUsername,
                password:inpPassword
            })
            .then(res=>{
                localStorage.setItem("token",res.headers.pragma);
                console.log(res.headers)
                document.getElementById("loginDiv").style.display="none";
            document.getElementById("bookingDiv").style.display="block";
            document.getElementById("logoutLi").style.display="block";
            document.getElementById("capacityDiv").style.display="block";
            })
            .catch(err=>console.log(err))

            
        }  

        function logout(){
                 
            const logoutAPI= `http://localhost:8080/logout`;
                   
            axios.post(logoutAPI)
            .then(res=>console.log(res))
            .catch(err=>console.log(err)) 
        
            document.getElementById("accountDiv").style.display="block";
                
        }  