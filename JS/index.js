console.log("Script")

let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "bhurem56",
    "email": "bhurem56@gmail.com",
    "score": 0.48,
    "state": "unknown",
    "domain": "gmail.com",
    "reason": "no_connect",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
  }



submitbtn.addEventListener("click", async (e)=> {
    e.preventDefault()
    console.log("Clicked!")

    resultCont.innerHTML =`<img width="123" src="img/loading.svg" alt="NotFound">`

    let key ="ema_live_PGBORy6y5B02SI61QUMMvNH68LuncRF1GAk4AHqz"
    let email = document.getElementById("username").value
let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
let res = await fetch(url)
let result = await res.json()

let str = ``
  for (key of Object.keys(result)){
    if(result[key] !=="" && result[key]!== " " ){


    str = str + `<div>${key}: ${result[key]}</div>`
    }
  }
console.log(str);
resultCont.innerHTML =str;

})




