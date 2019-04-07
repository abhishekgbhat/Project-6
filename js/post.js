var noOFLikes = 0;
var like = document.getElementById("likebtn");
var likesOfPeople = document.getElementById("p2");
var editIcon = document.getElementById("editIcon");
var saveIcon = document.getElementById("saveIcon");
var editableParagraph = document.getElementById("blogBody");
var commentTemplate = document.getElementById("addComment");
var commentText = "";

function likeFunction(){
    noOFLikes++;
    if(noOFLikes==1) {
        like.innerHTML = "<i class='fa fa-thumbs-up'></i>Liked!";
        likesOfPeople.innerHTML = "1 person likes this!";
    }
    else{
        like.innerHTML = "<i class='fa fa-thumbs-up'></i>Liked!";
        likesOfPeople.innerHTML = noOFLikes+ " people have liked this!";
    }
}

function editAndSave() {
  if (blogBody.contentEditable == 'true') {
      blogBody.contentEditable = 'false';
      blogBody.style.border = 'none';
      blogTitleNew.contentEditable = 'false';
      blogTitleNew.style.border = 'none';
      button.innerHTML = 'Edit <i class="fa fa-edit"></i>';
  } else {
      blogBody.contentEditable = 'true';
      blogBody.style.border = '1px solid red';
      blogTitleNew.contentEditable = 'true';
      blogTitleNew.style.border = '1px solid red';
      button.innerHTML = 'Save <i class="fa fa-save"></i>';
  }
}
function addComments(id) {
    if(id.value == "") {
        return;
    }
    else{
    commentText = id.value +'<br>';
    commentTemplate.innerHTML += "<p class='p4'>"+commentText+"</p>";
    id.value = id.defaultValue;
    }
}
