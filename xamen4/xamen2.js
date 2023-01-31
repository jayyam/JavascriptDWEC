function borrarCookies(key, value, expires)
{
    document.cookie = `Movil=Android; max-age=0`;
}

document.getElementById("borrarCookie").innerHTML.addEventListener("click", borrarCookies);
