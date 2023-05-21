export async function fetchWordList(){   

        let wordArray = fetch("http://192.168.0.151:8000/words",{
            headers: {               
                "Content-Type": "text/plain;charset=UTF-8"
              },
           cache:"no-cache"
            
        }).then(response => response.json()).catch(err=>console.log("error:",response))
       
        return (await wordArray)[getRandomInt(wordArray.length-1)];
        
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}