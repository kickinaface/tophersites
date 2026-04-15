var homepageMessages = {
    message:"Performing BMAX maintenance tasks...",
    showMessages: false
};
document.addEventListener("DOMContentLoaded", function(e){
    //load messages
    var dashboardMessages = document.querySelector(".dashboardMessages");
    if(homepageMessages.showMessages == true){
        dashboardMessages.style.display = "block";
        dashboardMessages.querySelector("span").innerHTML = homepageMessages.message;
    }
});