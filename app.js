fetch("https://api.github.com/users/arjundevkota45").then(response => response.json()).then(function(data){
    document.getElementById("profile-image").src = data['avatar_url'];
    document.getElementById("user-bio").innerText = data['bio'];
    document.getElementById("user-location").innerText = data['location'];
})

fetch("https://api.github.com/users/arjundevkota45/repos").then(response => response.json()).then(function(data){
    const repoCount= data.length;
    console.log(repoCount);
    for(i=0; i < repoCount; i++){
        var listItem = document.createElement("li");
        listItem.innerHTML = `<li id='project-name'> ${data[i].name}</li>`;
        document.getElementById("project-list").appendChild(listItem);
    }
})
