
        const token = localStorage.getItem("token");
            
        const headers ={
               'pragma': token
        }

        const  bookingConfirmation = ()=> { 
            const workingPlace = document.getElementById("rooms").value;
            const bookingAPI = `http://localhost:8080/booking/${workingPlace}` 
           
            const inpDate = document.getElementById("bookingDate").value;
            const givenName = document.getElementById("name").value;

            axios.post(bookingAPI,{
                bookingDate:inpDate,
                username:givenName
            },{
                headers: headers
            })
            .then(response=>{
                createNotification(response,workingPlace);         
            })
            .catch(err=>{
                console.log(err)
            })

            document.getElementById("capacityDiv").style.display="block";     
        }


        const createNotification = (response,workingPlace)=>{

             if(response.data.trigger){
                    const successMessage =
                    `<h3 id="confirmation">Booking Confirmation</h3>
                    <p id="successMessage">
                    We booked successfully a place in ${workingPlace} 
                    on ${response.data.bookingDate} for you.</p>`;     
                        
                    showNotification(successMessage); 
            }else{
                const personList =response.data.bookedPersonsList;
                const roomList = [...response.data.roomList];                   
                const roomNames = roomList.map(room=> room.roomName);        
                let roomSuggestedMessage ="";

                const title = `<h3 id="suggestion"> Another room suggestion </h3>`

                if(roomNames.length == 0){
                    roomSuggestedMessage =`${title} There have no available room  on this day.`
                }
                else{
                    roomSuggestedMessage=
                           `${title}
                           <h4 id="suggestionMessage"> Room is already booked out by
                           ${personList} on this day.
                           Try room(s): ${roomNames}</h4>`;

                }
                    
                showNotification(roomSuggestedMessage);

                }
        }

 
        const showNotification = (message)=>{
          document.getElementById("bookingNotification").innerHTML = "";       
          const bookingInfo =   document.createElement("div");
          bookingInfo.className = "bookingDetails";
          bookingInfo.innerHTML = message;
          document.getElementById("bookingNotification").appendChild(bookingInfo);
          
          document.getElementById("bookingNotification").style.display="block";
        }