const button = document.querySelector("button")

const log = ()=>{
    axios.get("https://swapi.dev/api/planets/?search=alderaan")
        .then((res)=>{
            const {results} = res.data
            const alderaan = results[0]
            const {residents} = alderaan
            for(let i = 0; i < residents.length; i++){
                let myUrl = residents[i]
                axios.get(myUrl)
                    .then((res)=>{
                        let body = document.querySelector('body')
                        let resident = document.createElement("h2")
                        resident.textContent = res.data.name
                        body.appendChild(resident)
                    })
            }
        })
    console.log("button clicked")
}

button.addEventListener('click', log)