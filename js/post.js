/*Edit event*/

function editContent(){
	 var edit = document.getElementById("edit");
	 
	 var blogTitleNew =document.getElementById("blogTitleNew");
	 
	 var blogBody= document.getElementById("blogBody");
	 
  if (blogBody.contentEditable == "false" && blogTitleNew.contentEditable == "false") {
		blogBody.contentEditable = "true";
		blogBody.style.border="2px solid pink";
		blogTitleNew.contentEditable ="true";
		blogTitleNew.style.border="2px solid pink";
    edit.innerHTML = "Save";
  } else {
    blogBody.contentEditable = "false";
    blogBody.style.border="none";
	
	blogTitleNew.contentEditable = "false";
    blogTitleNew.style.border="none";
	
    edit.innerHTML = "Edit";
  
  }
}


/*Count Like */


var numberOfClicks=0;
function postLiked(){
    document.getElementById("likeBlog").innerHTML ='<i class="fa fa-thumbs-up"></i>'+ "Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
        }
        }
    }
	
/*add and Display Comment*/

var x=0;
var cmt = Array();


function addComments(){
    //store value in cmt []
    cmt[x] = document.getElementById("userComments").value;
    x++;
    document.getElementById("userComments").value = "";
    
   //fetch comments from Array
   var e = "";   
    
   for (var y=(cmt.length)-1; y>-1; y--)
   {
     e += '<p class="cmtPara"> '  + cmt[y] + '</p>';
	
   }
   document.getElementById("addEventNames").innerHTML = e;
    
}