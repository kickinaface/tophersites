document.addEventListener("DOMContentLoaded", function(e){
    fetch('./js/messages.json')
        .then(function(data){
            console.log("data ", data[0]);
            if(data[0].showMessages == true){
                document.querySelector(".dashboardMessages").style.display = "block";
                document.querySelector(".dashboardMessages span").innerHTML = data.message;
            }
        })
        .then(function(data){
            //console.log(data);
        })
        .catch(function(err){
            console.error('Error:', err)
        });
});