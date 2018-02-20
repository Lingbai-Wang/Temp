$(document).ready(function(){
	
	function posts(pageNumber){
		
		$("#content_main>*").remove();
		var url = "content/selectPost";
		var args = {"pageNumber" : pageNumber , "cid" : ""};
		
		$.post(url,args,function(data){
			if(data.length==0){
				console.log("后端无数据传入");
				return false;
			}
			
			var pagination = new Array();
			for(var i=0;i<data[0].pagination.length;i++){
				pagination[i] = data[0].pagination[i];
			}
			var lastPageNumber = data[0].lastPageNumber;
			
			var $content_posts = $("<div id='content_posts'></div>");
			for(var i=1;i<data.length;i++){
				var $content_post_1 = $("<div class='content_post-1'></div>");
				var $content_post_top = $("<div class='content_post-top'></div>");
				$content_post_top.append("<a href='javascript:void(0)'><img src='./imgs/紫.jpeg' alt=''></a>");
				$content_post_1.append($content_post_top);
				var $content_post_bottom = $("<div class='content_post-bottom'></div>");
				$content_post_bottom.append("<h2><a href='javascript:void(0)' cid='"+data[i].cid+"'>"+data[i].title+"</a></h2>");
				$content_post_bottom.append("<p>"+data[i].text.substr(0,300)+"</p>");
				$content_post_bottom.append("<div><a href='javascript:void(0)'>Keyword</a> <a href='javascript:void(0)'>Tag</a> <a href='javascript:void(0)'>Post</a></div>");
				var $ul = $("<ul></ul>");
				$ul.append("<li><a href='javascript:void(0)'><i class='fa fa-globe'></i> <span>"+new Date(data[i].created*1000).toString().slice(0,-17)+"</span></a></li>");
				$ul.append("<li><a href='javascript:void(0)'><i class='fa fa-comments'></i> <span>"+data[i].commentsNum+" Comments</span></a></li>");
				$ul.append("<li><a href='javascript:void(0)'><i class='fa fa-share-alt'></i> <span>14 Shares</span></a></li>");
				$content_post_bottom.append($ul);
				$content_post_1.append($content_post_bottom);
				$content_posts.append($content_post_1);
			}
			$("#content_main").append($content_posts);
			var $content_posts_pagination = $("<nav id='content_posts-pagination'></nav>");
			var $pagination = $("<ul class='pagination'></ul>");
			
			if(pageNumber==1){
				$pagination.append("<li class='disabled'><span>«</span></li><li class='disabled'><span>‹</span></li>");
			}else{
				$pagination.append("<li><a href='javascript:void(0)' title='1'>«</a></li><li><a href='javascript:void(0)' title='"+(pageNumber-1)+"'>‹</a></li>");
			}
			for(var i in pagination){
				if(pageNumber==pagination[i]){
					$pagination.append("<li class='active'><a href='javascript:void(0)' title='"+pagination[i]+"'>"+pagination[i]+"</a></li>");
				}else{
					$pagination.append("<li><a href='javascript:void(0)' title='"+pagination[i]+"'>"+pagination[i]+"</a></li>");
				}
			}
			if(pageNumber==lastPageNumber){
				$pagination.append("<li class='disabled'><span>›</span></li><li class='disabled'><span>»</span></li>");
			}else{
				$pagination.append("<li><a href='javascript:void(0)' title='"+(parseInt(pageNumber)+1)+"'>›</a></li><li><a href='javascript:void(0)' title='"+lastPageNumber+"'>»</a></li>");
			}
			
			$content_posts_pagination.append($pagination);
			$("#content_main").append($content_posts_pagination);
			
			$("#content_posts-pagination .pagination li a").click(function(){
				posts($(this).attr("title"));
				return false;
			});
			
			$("#content_posts .content_post-1 .content_post-bottom h2 a").click(function(){
				post($(this).attr("cid"));
				function post(cid){
					var url = "content/selectPost";
					var args = {"pageNumber" : 0 , "cid" : cid};
					
					$.post(url,args,function(data){
						if(data.length==0){
							console.log("后端无数据传入");
							return false;
						}
						
						var pageNumber = $("#content_post-1 .content_post-bottom h2 a").attr("data[1].cid");
						
						$("#content_main>*").remove();
						var $content_post_1 = $("<div id='content_post-1'></div>");
						var $content_post_top = $("<div class='content_post-top'></div>");
						$content_post_top.append("<a href='javascript:void(0)'><img src='./imgs/紫.jpeg' alt=''></a>");
						$content_post_1.append($content_post_top);
						var $content_post_bottom = $("<div class='content_post-bottom'></div>");
						$content_post_bottom.append("<h2><a href='javascript:void(0)' cid='"+data[1].cid+"'>"+data[1].title+"</a></h2>");
						$content_post_bottom.append("<div class='text'>"+data[1].text+"</div>");
						$content_post_bottom.append("<div class='tag'><a href='javascript:void(0)'>Keyword</a> <a href='javascript:void(0)'>Tag</a> <a href='javascript:void(0)'>Post</a></div>");
						var $ul = $("<ul></ul>");
						$ul.append("<li><a href='javascript:void(0)'><i class='fa fa-globe'></i> <span>"+new Date(data[1].created*1000).toString().slice(0,-17)+"</span></a></li>");
						$ul.append("<li><a href='javascript:void(0)'><i class='fa fa-comments'></i> <span>"+data[1].commentsNum+" Comments</span></a></li>");
						$ul.append("<li><a href='javascript:void(0)'><i class='fa fa-share-alt'></i> <span>14 Shares</span></a></li>");
						$content_post_bottom.append($ul);
						$content_post_bottom.append("<hr>");
						$content_post_bottom.append("<button onclick='javascript:window.location.reload()'>Read More</button>");
						$content_post_bottom.append("<br style='clear: both;'>");
						$content_post_1.append($content_post_bottom);
						$("#content_main").append($content_post_1);
						
						var $content_post_pager = $("<nav id='content_post-pager'></nav>");
						var $pager = $("<ul class='pager'></ul>");
						if(cid==1){
							$pager.append("<li class='previous disabled'><span>&larr; Older</span></li>");
						}else{
							$pager.append("<li class='previous'><a href='javascript:void(0)' title='"+(cid-1)+"'>&larr; Older</a></li>");
						}
						if(cid==data[0].rowCount){
							$pager.append("<li class='next disabled'><span>Newer &rarr;</span></li>");
						}else{
							$pager.append("<li class='next'><a href='javascript:void(0)' title='"+(parseInt(cid)+1)+"'>Newer &rarr;</a></li>");
						}
						$content_post_pager.append($pager);
						$("#content_main").append($content_post_pager);
						
						$("#content_post-pager .pager li a").click(function(){
							post($(this).attr("title"));
						});
						
						var $content_comments = $("<div id='content_comments'></div>");
		//				未完待续
					});
				}
			});
		});
	}
	posts(1);
	
});