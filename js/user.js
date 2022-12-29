// ================== Sign In ==================
let signin = document.getElementById("modal-signin");
let user = document.getElementById("btn-users");
let close_in = document.getElementsByClassName("modal-close")[0];

user.addEventListener('click', event => {
    signin.style.display = "block";
})

close_in.addEventListener("click", event => {
    signin.style.display = "none";
})


// ================== Sign out ====================
let res = document.getElementById("modal-register");
let create = document.getElementById("btn-create");
let close_out = document.getElementsByClassName("modal-close")[1];

create.addEventListener("click", event => {
    signin.style.display = "none";
    res.style.display = "block";
})
close_out.addEventListener("click", event => {
    res.style.display = "none";
})