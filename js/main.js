var linkList = [
    {
        title:"Alphabet Scriptor (Web Version)",
        url:"https://bs37v5e6er.loclx.io"
    },
    {
        title:"HP Machine 1 (Waterblaze) Dashboard",
        url:"https://kjdgzhebdg.loclx.io"
    },
    {
        title:"Dell XPS 400 (Linux)",
        url:"https://6ymhookxez.loclx.io"
    }
]

document.addEventListener("DOMContentLoaded", function(e){
    //dom content loaded, run script.
    //var siteLinks = document.querySelector(".siteLinks");
    // for(var i = 0; i<= linkList.length-1; i++){
    //     siteLinks.innerHTML+="<a href='https://bs37v5e6er.loclx.io'>Alphabet Scriptor (Web Version)</a> <button onclick=location.href='mailto:6142089419@txt.att.net?subject=`Broken Link: Alphabet Scriptor'>Report Broken</button><br>";
    // }

    fetch('https://ryzen.flounder-lime.ts.net/uploads/Development/dashboardMessages/messages.json')
        .then(function(data){
            if(data.showMessages == true){
                document.querySelector(".dashboardMessages").style.display = "block";
                document.querySelector(".dashboardMessages span").innerHTML = data.message;
            }
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.error('Error:', err)
        });
});