export async function fetchWordList(){   

        let wordArray = fetch("http://192.168.0.151:8000/words",{
            headers: {               
                "Content-Type": "text/plain;charset=UTF-8"
              },
           cache:"no-cache"
            
        }).then(response => response.json()).catch(err=>console.log("error:",response))
       
        return (await wordArray)[getRandomInt(6)];       

}
export async function addRecord(record) {
    try {
        const response = await fetch('http://192.168.2.109:8000/history', {
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

    let history = fetch("http://192.168.2.109:8000/history", {
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