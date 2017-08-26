$(document).ready(function(){
    //blog container holding all post
    var blogContainer = $(".blog-container");
    //onclick events for blogs
//    $(document).on("click", "button.delete", deleteBlog);
//    $(document).on("click", "button.edit", editBlog);
    //variable to hold blogs
    var blogs;
    
    //getBlogs function retrieving from database
    function getBlogs(){
        $.get("/api/blogs", function(data){
            blogs = data;
            if( !blogs || !blogs.length ){
                displayEmpty();
            }else{
                showBlog();
            }
        });
    }
     
    //function to delete blogs
    function deleteBlog(){
        var currentPost = $(this).parent().parent().data("blog");
        $.ajax({
            method: "DELETE",
            url: "/api/blogs/" + currentPost.id
        }).done(function(){
            console.log("delete after running");
            getBlogs();
        });
    }
    
    //initial call for blogs
    getBlogs();
    
    function showBlog(){
        blogContainer.empty();
        blogContainer.append(createBlogArea(blogs[blogs.length-1]));
    }
    
    function createBlogArea(blog){
        //dynamically create the blog panel and data inside
        var newBlogPanel = $("<div>");
        newBlogPanel.addClass("panel panel-default");
        var newBlogPanelHeading = $("<div>");
        newBlogPanelHeading.addClass("panel-heading");
//        var deleteBtn = $("<button>");
//        deleteBtn.text("x");
//        deleteBtn.addClass("delete btn btn-danger");
//        var editBtn = $("<button>");
//        editBtn.text("EDIT");
//        editBtn.addClass("edit btn btn-default");
        var newBlogTitle = $("<h2>");
        var newBlogDate = $("<small>");
        var newBlogPanelBody = $("<div>");
        newBlogPanelBody.addClass("panel-body");
        var newBlogBody = $("<p>");
        newBlogTitle.text(blog.title + " ");
        newBlogBody.text(blog.text);
        var newBlogId = $("<p>");
        newBlogId.addClass("blogId");
        newBlogId.text(blog.id);
        var formattedDate = new Date(blog.createdAt);
        formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        newBlogDate.text(formattedDate);
        newBlogTitle.append(newBlogDate);
//        newBlogPanelHeading.append(deleteBtn);
//        newBlogPanelHeading.append(editBtn);
        newBlogPanelHeading.append(newBlogTitle);
        newBlogPanelBody.append(newBlogBody);
        newBlogPanelBody.append(newBlogId);
        newBlogPanel.append(newBlogPanelHeading);
        newBlogPanel.append(newBlogPanelBody);
        newBlogPanel.data("blog", blog);
        //return the blog panel
        return newBlogPanel;
    }
    
    function displayEmpty(){
        blogContainer.empty();
        var emptyMessage = $("<h2>");
        emptyMessage.css({"text-align": "center", "margin-top": "50px"});
        emptyMessage.html("No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
        blogContainer.append(emptyMessage);
    }
})