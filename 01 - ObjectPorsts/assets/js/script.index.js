const posts = [];
let indexPost = -1;

function savePost(){
    const title = document.getElementById("title").value;
    const resume = document.getElementById("resume").value;
    const publisher = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;
    console.log(title, resume, publisher, date);

    if(indexPost == -1){
    if(title && resume && publisher && date){
        storePost(title, resume, publisher, date);
        clenFields();
    }}else{
        if(title && resume && publisher && date){
            posts[indexPost] = {
                title,
                resume,
                publisher,
                date
            };
            showPosts();
            indexPost = -1;
            clenFields();
        }
     }
}

function  storePost(title, resume, publisher, date){
    const post = {
        title,
        resume,
        publisher,
        date
    };

    posts.push(post);
    showPosts();
    console.log(post);
}

function showPosts(){
    let showContent = "";


    posts.forEach((post, index) => {
        showContent += `   
             <div class="post"> 
             <h2>${post.title}</h2>
             <p><strong>Resumo: </strong>${post.resume}</p>
             <p><strong>Autor:</strong> ${post.publisher}</p>
             <p><strong>Data:</strong> ${post.date}</p>

             <button onclick="editPost(${index})">Editar</button>
             <button onclick="removePost(${index})">Excluir</button>

              </div>
        `;
    })
    document.getElementById("list").innerHTML = showContent;
}


function clenFields(){
    document.getElementById("title").value = "";
    document.getElementById("resume").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("date").value = "";
}

function editPost(index){
           indexPost = index;
           const post = posts[index];

           document.getElementById("title").value = post.title;
           document.getElementById("resume").value = post.resume;
           document.getElementById("publisher").value = post.publisher;
           document.getElementById("date").value = post.date;
}

function removePost(index){
    posts.splice(index, 1);
    savePost();
}