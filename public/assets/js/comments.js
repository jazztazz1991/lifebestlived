$(document).ready(function(){
        var commentContainer = $(".comment-container");
        var comments;
    function getComments(){
        $.get("/api/comments", function(data){
            console.log("Comments", data);
            comments = data;
            if( !comments || !comments.length ){
                displayEmpty();
            }else{
                showComments();
            }
        });
    }
           //function to delete blogs
    function deleteComments(){
        var currentComments = $(this).parent().parent().data("comments");
        console.log("delete running");
        $.ajax({
            method: "DELETE",
            url: "/api/comments/" + currentComments.id
        }).done(function(){
            console.log("delete after running");
            getBlogs();
        });
    }  
    
     //initial call for blogs
    getComments();
    
    function showComments(){
        commentContainer.empty();
        var commentHold = [];
        console.log("These are Comments" + comments);
        for (var i=0; i < comments.length; i++){
            commentHold.push(comments[i]);
        }
        commentContainer.append(createCommentArea(comments));
       
    } 
    
    function createCommentArea(comment){
        var newCommentPanel = $("<div>");
        newCommentPanel.addClass("panel panel-default");
        var newCommentPanelHeading = $("<div>");
        newCommentPanelHeading.addClass("panel-heading");
        var deleteBtn = $("<button>");
        deleteBtn.text("x");
        deleteBtn.addClass("delete btn btn-danger");
        var newCommentUser = $("<h2>");
        var newCommentDate = $("<small>");
        var newCommentPanelBody = $("<div>");
        newCommentPanelBody.addClass("panel-body");
        var newCommentBody =$("<p>");
        newCommentUser.text(comment.user + " ");
        newCommentBody.text(comment.body);
        var formattedDate = new Date(comment.createdAt);
        formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        newCommentDate.text(formattedDate);
        newCommentUser.append(newCommentDate);
        newCommentPanelHeading.append(deleteBtn);
        newCommentPanelHeading.append(newCommentUser);
        newCommentPanelBody.append(newCommentBody);
        newCommentPanel.append(newCommentPanelHeading);
        newCommentPanel.append(newCommentPanelBody);
        newCommentPanel.data("comment", comment);
        
        return newCommentPanel;    
    }
    
    function displayEmpty(){
        commentContainer.empty();
        var emptyMessage = $("<h2>");
        emptyMessage.css({"text-align": "center", "margin-top": "50px"});
        emptyMessage.html("No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
        commentContainer.append(emptyMessage);
    }
    
});
             
 

                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  