

      const loginUrl = "http://localhost:8080/users";

      let loginBtn=document.getElementById("inp-login");

      let signupBtn = document.getElementById("inp-sign");
 
     logIn();

     function logIn(){
      const formLogIN = document.querySelector("form");
      formLogIN.addEventListener("submit", async (e) => {
       
      e.preventDefault();
      const formLData = new FormData(formLogIN);
      const formLDataSerialized = Object.fromEntries(formLData);
      const jsonObject ={
        ...formLDataSerialized
      }
       // const jsonObject = {
      //   //   ...formDataSerialized,
      //   //   sendToSelf: formDataSerialized.sendToSelf ? true : false,
      //   // };
      fetch(loginUrl, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          
        },
        mode:'cors',
        body: JSON.stringify(jsonObject),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
        
      });
    });
    }
     
      
     
    
    
    