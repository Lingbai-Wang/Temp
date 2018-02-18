$(document).ready(function(){
	$("#content_main>*").remove();
	var url = "content/selectPost";
	var args = {"in" : ""};
	
	$.post(url,args,function(data){
		var $content_posts = $("<div id='content_posts'></div>");
		for(var i=0;i<data.length;i++){
			var $content_post_1 = $("<div class='content_post-1'></div>");
			var $content_post_top = $("<div class='content_post-top'></div>");
			$content_post_top.append("<a href='javascript:void(0)'><img src='./imgs/紫.jpeg' alt=''></a>");
			var $content_post_bottom = $("<div class='content_post-bottom'></div>");
			$content_post_bottom.append("<h2><a href='javascript:void(0)' cid='"+data[i].cid+"'>"+data[i].title+"</a></h2>");
			$content_post_bottom.append("<p>"+data[i].text.substr(0,300)+"</p>");
			$content_post_bottom.append("<div><a href='javascript:void(0)'>Keyword</a> <a href='javascript:void(0)'>Tag</a> <a href='javascript:void(0)'>Post</a></div>");
			var $ul = $("<ul></ul>");
			$ul.append("<li><a href='javascript:void(0)'><i class='fa fa-globe'></i> <span>"+new Date(data[i].created*1000).toString().slice(0,-17)+"</span></a></li>");
			$ul.append("<li><a href='javascript:void(0)'><i class='fa fa-comments'></i> <span>"+data[i].commentsNum+" Comments</span></a></li>");
			$ul.append("<li><a href='javascript:void(0)'><i class='fa fa-share-alt'></i> <span>14 Shares</span></a></li>");
			$content_post_bottom.append($ul);
			$content_post_1.append($content_post_top);
			$content_post_1.append($content_post_bottom);
			$content_posts.append($content_post_1);
		}
		$("#content_main").append($content_posts);
	});
	
});