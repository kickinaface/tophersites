var homepageMessages = {
    message:"Performing maintenance tasks...",
    showMessages: true
};
document.addEventListener("DOMContentLoaded", function(e){
    //load messages
    var dashboardMessages = document.querySelector(".dashboardMessages");
    if(homepageMessages.showMessages == true){
        dashboardMessages.style.display = "block";
        dashboardMessages.querySelector("span").innerHTML = homepageMessages.message;
    }
});