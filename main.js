document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#name');
    const userNameElement = document.querySelector('#userName');
    const avatarElement = document.querySelector('#avatar');
    const repos = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/RaphaelLunaDev')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            userNameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            repos.innerText = json.public_repos;
            linkElement.href = json.html_url
        })
})