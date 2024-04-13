


// fetch('./user.json')
//     .then((response) => 
//     {
//         return response.json()
//     })
//     .then((jso) => {
//         console.log(jso);
//     })

    // var fetching = new Promise((resolve,reject)=>{
    //     fetch('./user.json').then(res=>resolve(res.json())).catch(err=>reject(err))
    // })
    

    // console.log(fetching)

    document.addEventListener("submit",async(e)=>{
        e.preventDefault();
        // console.log("JSEYGFEUYS")
        // var detail;
        // await fetching.then(data=>detail=data).catch(err=>console.log(err))

        // // console.log(detail)
        // // detail.filter((val,ind)=>{
        // //     console.log(val,ind)
        // // })
        // detail.forEach(element => {
        //     console.log(element)
        // });

       const email =  document.getElementById("user").value;
       const pass = document.getElementById("pass").value;
     
        fetch('./user.json')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            var values = data.user;
            values.find((values)=>{
                console.log(values)
                    
                    if(email == values.mail && pass == values.password){
                        // console.log(Users)
                        window.location.href="./Time.html"
                    }else{
                        console.log("Not Found this email and password");
                    }
            })
            // console.log(Users)
            
        })
        .catch(err=>console.log(err))
    })
