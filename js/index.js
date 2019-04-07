var createPost = document.getElementById("createPostModal");
function createPostModal (){
    createPost.style.display = "block";
}

function hideModal3 () {
    createPost.style.display = "none";
}

function redirectToAllPosts () {
    window.location.href = 'html/bloglist.html';
}
