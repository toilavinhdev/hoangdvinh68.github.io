let index = 1;
show();

function show() {
    let i;
    let list_slide = document.getElementsByClassName("slide-item");//123

    //an het slide
    for (i=0; i< list_slide.length; i++) {
        list_slide[i].style.display = "none"
    }

    //hien index slide
    list_slide[index-1].style.display = "block"; 
    
    index++; //auto slide
    
    if (index > list_slide.length) { //reset index
        index = 1;
    }

    setTimeout(show, 2000);
}