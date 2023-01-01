// ================= Nav mobile =================
let btn_nav_more = document.getElementsByClassName("header-nav-more")[0];
let nav_more = document.getElementsByClassName("nav-more")[0];
let close_nav_more = document.getElementsByClassName("close-nav-more")[0];
btn_nav_more.addEventListener("click", event=> {
    nav_more.style.display = "block";
})

close_nav_more.addEventListener("click", event=> {
    nav_more.style.display = "none";
})

// =================== Search mobile ============
let open_search = document.getElementById("btn-search");
let nav_2 = document.getElementsByClassName("header-nav-2")[0];
let search_nav = document.getElementsByClassName("search-nav")[0];
let close_search = document.getElementById("close-search");

open_search.addEventListener("click", event=> {
    nav_2.style.display = "none";
    search_nav.style.display = "block";
})

close_search.addEventListener("click", event=> {
    nav_2.style.display = "block";
    search_nav.style.display = "none";
})


// ================== Favourite ======================
function add_fav(e) {
    e.style.display = "none"
    e.parentElement.children[3].style.display = "inline-block"
    src_img = e.parentElement.children[0].style.backgroundImage.slice(5, -2);

}

function clear_fav(e) {
    e.style.display = "none"
    e.parentElement.children[2].style.display = "inline-block"
}

// ================== Thong bao ======================
let open_notice = document.getElementById("btn-notice");
let notice_container = document.getElementById("notice-container")
let close_notice = notice_container.children[0];

open_notice.addEventListener("click", event =>{
    notice_container.style.display = "block";
})

close_notice.addEventListener("click", event => {
    notice_container.style.display = "none";
})


