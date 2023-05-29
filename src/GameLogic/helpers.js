const serverIP = "http://192.168.2.109:8000"

export async function fetchWordList(){   

        let wordArray = fetch(`${serverIP}/words`,{
            headers: {               
                "Content-Type": "text/plain;charset=UTF-8"
              },
           cache:"no-cache"
            
        }).then(response => response.json()).catch(err=>console.log("error:",response))
       
        return (await wordArray)[getRandomInt(6)];       

}
export async function addRecord(record) {
    try {
        const response = await fetch(`${serverIP}/history`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(record),
        });

        if (response.ok) {
            console.log('Rekord został dodany do bazy danych.');
        } else {
            console.error('Wystąpił błąd podczas dodawania rekordu do bazy danych.');
        }
    } catch (error) {
       console.error('Wystąpił błąd podczas komunikacji z serwerem JSON.');
    }
};

export async function GetHistory() {

    let history = fetch(`${serverIP}/history`, {
        headers: {
            "Content-Type": "text/plain;charset=UTF-8"
        },
        cache: "no-cache"

    }).then(response => response.json()).catch(err => console.log("error:", response))

    return await history;

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function TopThreeAvg(history){

    let averageObj = {}

    history.forEach(record =>{
       
            
            if(Object.keys(averageObj).includes(record.name)){
                averageObj[record.name] = [...averageObj[record.name],record.tries]
            }
            else{
                averageObj[record.name] = [record.tries]
            }     
        
    })
   
        Object.keys(averageObj).forEach(record=>{
            let count = averageObj[record].length
            averageObj[record] = ((averageObj[record].reduce((prev,curr)=>prev+curr)/count)).toFixed(2)
        })
        
        let result = Object.entries(averageObj).sort((a,b)=>a[1] - b[1]).slice(0,3)
        
        return result

}
