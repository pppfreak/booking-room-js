

        const getCapacity = ()=> {
            const givenDate = document.getElementById("searchDate").value;
            const capacityAPI = `http://localhost:8080/booking/getCapacity/${givenDate}`
           
                        
            axios.get(capacityAPI,{
                headers: headers
            })
            .then(response=>{
                 capacityNotification(response,givenDate);
            })
            .catch(err=>console.log(err))
        }

        const capacityNotification = (response,givenDate)=> {

            const message = `<p id="capacityMessage">The capacity of free working places on ${givenDate} is ${response.data}%</p>`;
            document.getElementById("capacityNotification").style.display="block";
            const capacityPercentage =  document.createElement('div');
            
            capacityPercentage.className = "notified";
            capacityPercentage.innerHTML = message;
            document.getElementById("capacityNotification").appendChild(capacityPercentage);

        }