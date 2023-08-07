const posts = [];


function savePost(){
    const title = document.getElementById("title").ariaValueMax;
    const resume = document.getElementById("resume").ariaValueMax;
    const publisher = document.getElementById("publisher").ariaValueMax;
    const date = document.getElementById("date").ariaValueMax;


    if(title && resume && publisher && date){
        storePost(title, resume, publisher, date);
    }
}

function  storePost(title, resume, publisher, date){
    const post = {
        title,
        resume,
        publisher,
        date
    };
}