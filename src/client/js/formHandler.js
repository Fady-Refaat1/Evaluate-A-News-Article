async function handleSubmit (event) {
    event.preventDefault()
    let url= document.querySelector('#url').value
    let isUrl = Client.checkUrl(url)
    if(isUrl){
        document.getElementById('loading').innerHTML ='Loading ... ';
        dataToServer(url)
        .then((data)=>{
            if(Object.keys(data).length != 0){
            const fragm = document.createDocumentFragment();
            document.getElementById('Results').innerHTML ='';
            const list = document.getElementById('Results');
            Object.keys(data).map((prop)=>{
                let listElement = document.createElement('li'); 
                listElement.setAttribute('id',prop) 
                listElement.innerText = `The ${prop} : ${data[prop]}`;  
                fragm.appendChild(listElement);
                })
            list.appendChild(fragm);
            document.getElementById('loading').innerHTML ='';
            }
            else{
                alert('enter valid url ')
            }
        })
        .catch((e)=>{
            alert("sorry can't analyze this Article")
        })
        
    }
    else{
        alert('enter a valid url')
    }
}
export {handleSubmit}

const dataToServer = async (url)=>{ 
    let data = await fetch('http://localhost:8083/getDataFromApi',{
    method : 'POST',
    credentials:'same-origin',
    mode: 'cors',
    headers:{
        "content-Type":"application/json"
    },
    body: JSON.stringify({
        url
    })
})
let dataToDisplay = await data.json()
return dataToDisplay
}
