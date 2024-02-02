function sauvegarde() {
    var username = document.getElementById("User").value;
    var password = document.getElementById("Mdp").value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    console.log(username, password)
}