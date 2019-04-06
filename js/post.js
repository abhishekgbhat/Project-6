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

function addComments(id){
        var addEventName = id.value +'<br>';
        var a = document.getElementById('userComments');
        document.getElementById('addEventNames').innerHTML += '<p style="background-color:white;color: red ;width:80%;padding:5px;">'+addEventName+'</p>';          
        a.value=a.defaultValue;
    }
