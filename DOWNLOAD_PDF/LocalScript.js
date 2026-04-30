// tutto di importante da index.html
const InputUrl = document.getElementById("InputUrl");
const ButURL = document.getElementById("ButURL");
const Linka = document.getElementById("LinkInvisibile");
const MesFin = document.getElementById("Mes");

ButURL.addEventListener("click", () => {
    const url = InputUrl.value;
    if(url.startsWith("https://") || url.startsWith("http://") && url.endsWith(".pdf")){
        // controllare se il sito esiste e se la risposta è 200
        fetch(url).then(response => {
            if(response.ok){
                Linka.setAttribute("href", url);
                Linka.click();
                MesFin.style.color = "green";
                MesFin.textContent = "File downloaded successfully!";
            }else{
                MesFin.style.color = "red";
                MesFin.textContent = "error status: " + response.status;
            }
        }).catch(error => {
            console.log(error);
        })
    }else{
        MesFin.style.color = "red";
        MesFin.textContent = "URL does not meet requirements";
    }
});


