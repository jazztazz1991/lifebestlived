$(document).ready(function() {
    
  // Getting jQuery references to the post body, title, form, and author select
  var bodyInput = $("#body");
  var userInput = $("#user");
    
    $("#cSubmit").on("click", handleSubmit);
    
    var url = window.location.search;
    var commentId;
    var blogId;
    
    var updating = false;
    
    getBlogs();
    
    
    function handleSubmit(event){
        event.preventDefault();
        console.log("running handleSubmit");
        if(!userInput.val() || !bodyInput.val()){
            return;
        }
        
        var newComment = {
            user: userInput.val().trim(),
            body: bodyInput.val().trim(),
            blogId: blogId
        };
        console.log("newcomment" + newComment);
        submitComment(newComment);
    }
        function submitComment(comment) {
            console.log("submitCOmment" + comment);
            $.post("/api/comments", comment, function() {
              window.location.href = "/blog";
            });
          }
        
        function getBlogs(){
            $.get("/api/blogs", renderBlogList);
        }
        
        function renderBlogList(data){
            if(!data.length){
                window.location.href = "/blog";
            }
            console.log("renderBlogList id" + data[data.length -1].id);
            blogId = data[data.length-1].id;
        }
});