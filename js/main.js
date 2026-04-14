var homepageMessages = {
    message:"BMAX is down for maintenance...",
    showMessages: true
};
document.addEventListener("DOMContentLoaded", function(e){
    //load messages
    var dashboardMessages = document.querySelector(".dashboardMessages");
    if(homepageMessages.showMessages == true){
        dashboardMessages.querySelector("span").innerHTML = homepageMessages.message;
    }
});