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
    console.log("blogid -------------"+ blogId);
    
    function handleSubmit(event){
        event.preventDefault(); 
        if(!userInput.val() || !bodyInput.val()){
            return;
        }
        blogId= getBlogs();
         console.log("blogid -------------handle submit"+ blogId);
        var newComment = {
            user: userInput.val().trim(),
            body: bodyInput.val().trim(),
            BlogId: $(".blogId").text()
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
                console.log("no data to be found");
                window.location.href = "/blog";
            }
            console.log("*********************renderBlogList id" + data[data.length -1]);
            blogId = data[data.length-1];
            console.log("blogid -----------render"+ blogId);
            return blogId;
        }
});