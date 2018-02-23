$(document).ready(function(){
	
	posts(1);
	//posts开始
	function posts(pageNumber){
		$("#content_main>*").remove();
		
		var url = "content/selectPost";
		var args = {"pageNumber" : pageNumber , "cid" : ""};
		//posts的ajax开始
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
			
			//posts插入主体开始
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
			//posts插入主体结束
			
			//posts插入分页开始
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
			//posts插入分页结束
			
			//posts分页点击事件开始
			$("#content_posts-pagination .pagination li a").click(function(){
				posts($(this).attr("title"));
				return false;
			});
			//posts分页点击事件结束
			
			//点击文章列表的文章标题显示文章详情开始
			$("#content_posts .content_post-1 .content_post-bottom h2 a").click(function(){
				post($(this).attr("cid"));
				//post开始
				function post(cid){
					$("#content_main>*").remove();
					
					var url = "content/selectPost";
					var args = {"pageNumber" : 0 , "cid" : cid};
					//post的ajax开始
					$.post(url,args,function(data){
						if(data.length==0){
							console.log("后端无数据传入");
							return false;
						}
						
						var pageNumber = $("#content_post-1 .content_post-bottom h2 a").attr("data[1].cid");
						
						//post插入主体开始
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
						//post插入主体结束
						
						//post插入分页开始
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
						//post插入分页结束
						
						//post分页点击事件开始
						$("#content_post-pager .pager li a").click(function(){
							post($(this).attr("title"));
						});
						//post分页点击事件结束
						
						comments(1);
						//comments开始
						function comments(pageNumber){
							if($("#content_comments").length!=0){
								$("#content_comments").remove();
							}
							var $content_comments = $("<div id='content_comments'></div>");
							var $content_comments_top = $("<div class='content_comments-top'></div>");
							$content_comments_top.append("<h2>Leave a Comment:</h2><div><textarea name='' id=''></textarea><input type='text' placeholder='代号'> <input type='text' placeholder='邮箱'> <input type='text' placeholder='个站'><button>Submit</button></div>");
							$content_comments.append($content_comments_top);
							var $content_comments_bottom = $("<div id='content_comments-bottom'></div>");
							$content_comments_bottom.append("<h2>Comments:</h2>");
							var $comment_list = $("<ul class='comment-list'></ul>");
							
							var url = "comment/selectComment";
							var args = {"pageNumber" : pageNumber , "cid" : cid , "ancestor" : 0};
							//comments的ajax开始
							$.post(url,args,function(data){
								if(data.length==1){
									console.log("数据库无数据传入");
									$comment_list.append("<li style='color:#9ea7b3'>还没有人评论的说~ QAQ</li>");
									$content_comments_bottom.append($comment_list);
									$content_comments.append($content_comments_bottom);
									$("#content_main").append($content_comments);
									$(".comment-list-pagination").remove();
									
									//comments增加评论开始
									$("#content_comments>.content_comments-top button").click(function(){
										var url = "comment/insertComment";
										var args = {"text" : $(".content_comments-top textarea").val() , "author" : $(".content_comments-top input").eq(0).val() , "mail" : $(".content_comments-top input").eq(1).val() , "url" : $(".content_comments-top input").eq(2).val(),
												"cid" : $("#content_post-1 .content_post-bottom h2 a").attr("cid") , "created" : parseInt(new Date().getTime()/1000) , "parent" : 0 , "ancestor" : 0};
										//comment的ajax开始
										$.post(url,args,function(data){
											
										});
										comments(1);
									});
									//comments增加评论结束
									
									return false;
								}else if(data.length==0){
									console.log("error:后端无数据传入");
								}
								var pagination = new Array();
								for(var i=0;i<data[0].pagination.length;i++){
									pagination[i] = data[0].pagination[i];
								}
								var lastPageNumber = data[0].lastPageNumber;
								
								//comments插入评论循环开始
								for(var i=1;i<data.length;i++){
									var $comment = $("<li class='comment'></li>");
									$comment.append("<div class='comment-left'><a href='javascript:void(0)'><img src='./imgs/紫.jpeg' alt=''></a></div>");
									var $comment_body = $("<div class='comment-body'></div>");
									$comment_body.append("<h5>"+((data[i].author!="")?data[i].author:"匿名")+"</h5>");
									$comment_body.append("<p>"+data[i].text+"</p>");
									var $comment_info = $("<div class='comment-info'></div>");
									$comment_info.append("<span class='comment-floor'>#"+data[i].coid+"</span>");
									$comment_info.append("<span class='comment-time'>"+new Date(data[i].created*1000).toString().slice(0,-17)+"</span>");
									$comment_info.append("<span class='comment-like'><i class='fa fa-thumbs-o-up'></i> <span>13</span></span>");
									$comment_info.append("<span class='comment-hate'><i class='fa fa-thumbs-o-down'></i> <span>4</span></span>");
									$comment_info.append("<span class='comment-reply'>Reply</span>");
									$comment_info.append("<div class='comment-operation'><i class='fa fa-ellipsis-v'></i></div>");
									$comment_body.append($comment_info);
									
									comment(1,data[i].coid);
									//comment开始
									function comment(pageNumber,ancestor){
										var url = "comment/selectComment";
										var args = {"pageNumber" : pageNumber , "cid" : cid , "ancestor" : ancestor};
										//comment的ajax开始
										$.post(url,args,function(data){
											var pagination = new Array();
											for(var i=0;i<data[0].pagination.length;i++){
												pagination[i] = data[0].pagination[i];
											}
											var lastPageNumber = data[0].lastPageNumber;
											
											for(var i=1;i<data.length;i++){
												var $comment1 = $("<div class='comment'></div>");
												$comment1.append("<div class='comment-left'><a href='javascript:void(0)'><img src='./imgs/紫.jpeg' alt=''></a></div>");
												var $comment_body1 = $("<div class='comment-body'></div>");
												$comment_body1.append("<h5>"+((data[i].author!="")?data[i].author:"匿名")+"</h5>");
												$comment_body1.append("<p>"+data[i].text+"</p>");
												var $comment_info = $("<div class='comment-info'></div>");
												$comment_info.append("<span class='comment-floor'>#"+data[i].coid+"</span>");
												$comment_info.append("<span class='comment-time'>"+new Date(data[i].created*1000).toString().slice(0,-17)+"</span>");
												$comment_info.append("<span class='comment-like'><i class='fa fa-thumbs-o-up'></i> <span>13</span></span>");
												$comment_info.append("<span class='comment-hate'><i class='fa fa-thumbs-o-down'></i> <span>4</span></span>");
												$comment_info.append("<span class='comment-reply'>Reply</span>");
												$comment_info.append("<div class='comment-operation'><i class='fa fa-ellipsis-v'></i></div>");
												$comment_body1.append($comment_info);
												$comment1.append($comment_body1);
											}
											$comment_body.append($comment1);
											
											//comment插入分页开始
											var $comment_list_pagination = $("<nav class='comment-list-pagination'></nav>");
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
											$comment_list_pagination.append($pagination);
											$comment_body.append($comment_list_pagination);
											//comment插入分页结束
											
											//comment分页点击事件开始
											$(".comment .comment-list-pagination .pagination li a").click(function(){
												$(".comment .comment-list-pagination").remove();
												$(".comment .comment").remove();
												comment($(this).attr("title"),data[1].ancestor);
												return false;
											});
											//comment分页点击事件结束
											
											//comment点击reply触发开始
											$("div.comment>.comment-body>.comment-info>.comment-reply").click(function(){
												console.log("点击生效2");
												if($(this).parent().next().hasClass("content_comments-top")){
													$(this).parent().next().remove();
													return false;
												}
												$("#content_comments-bottom .content_comments-top").remove();
												$(this).parent().after($(".content_comments-top").clone());
												
												var temp = $(this);
												
												//comment增加评论（触发）开始
												$("div.comment>.comment-body>.content_comments-top button").click(function(){
													console.log("点击生效2内部"+temp.siblings(".comment-floor").html()+" "+temp.parents().eq(2).siblings(".comment-info").children(".comment-floor").html().slice(1));
													var url = "comment/insertComment";
													var args = {"text" : $("div.comment>.comment-body>.content_comments-top textarea").val() , "author" : $("div.comment>.comment-body>.content_comments-top input").eq(0).val() , "mail" : $("div.comment>.comment-body>.content_comments-top input").eq(1).val() , "url" : $("div.comment>.comment-body>.content_comments-top input").eq(2).val(),
															"cid" : $("#content_post-1 .content_post-bottom h2 a").attr("cid") , "created" : parseInt(new Date().getTime()/1000) , "parent" : temp.siblings(".comment-floor").html().slice(1) , "ancestor" : temp.parents().eq(2).siblings(".comment-info").children(".comment-floor").html().slice(1)};
													$.post(url,args,function(data){
														
													});
													comments(1);
												});
												//comment增加评论（触发）结束
												
											});
											//comment点击reply触发结束
											
											if(data.length==1){
												$(".comment .comment-list-pagination").remove();
											}
											
										});
										//comment的ajax结束
										
									}
									//comment结束
									$comment.append($comment_body);
									$comment_list.append($comment);
								}
								$content_comments_bottom.append($comment_list);
								//comments插入评论循环结束
								
								//comments插入分页开始
								var $comment_list_pagination = $("<nav class='comment-list-pagination'></nav>");
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
								$comment_list_pagination.append($pagination);
								$content_comments_bottom.append($comment_list_pagination);
								//comments插入分页结束
								
								//comments插入收尾开始
								$content_comments.append($content_comments_bottom);
								$("#content_main").append($content_comments);
								//comments插入收尾结束
								
								//comments分页点击事件开始
								$(".comment-list-pagination .pagination li a").click(function(){
									$(".comment-list-pagination").remove();
									$(".comment-list .comment").remove();
									comments($(this).attr("title"));
									return false;
								});
								//comments分页点击事件结束
								
								//comments增加评论开始
								$("#content_comments>.content_comments-top button").click(function(){
									var url = "comment/insertComment";
									var args = {"text" : $(".content_comments-top textarea").val() , "author" : $(".content_comments-top input").eq(0).val() , "mail" : $(".content_comments-top input").eq(1).val() , "url" : $(".content_comments-top input").eq(2).val(),
											"cid" : $("#content_post-1 .content_post-bottom h2 a").attr("cid") , "created" : parseInt(new Date().getTime()/1000) , "parent" : 0 , "ancestor" : 0};
									//comment的ajax开始
									$.post(url,args,function(data){
										
									});
									comments(1);
								});
								//comments增加评论结束
								
								//comments点击reply触发开始
								$("li.comment>.comment-body>.comment-info>.comment-reply").click(function(){
									console.log("点击生效1");
									if($(this).parent().next().hasClass("content_comments-top")){
										$(this).parent().next().remove();
										return false;
									}
									$("#content_comments-bottom .content_comments-top").remove();
									$(this).parent().after($(".content_comments-top").clone());
									
									var temp = $(this);
									
									//comments增加评论（触发）开始
									$("li.comment>.comment-body>.content_comments-top button").click(function(){
										console.log("点击生效1内部"+temp.siblings(".comment-floor").html());
										var url = "comment/insertComment";
										var args = {"text" : $("li.comment>.comment-body>.content_comments-top textarea").val() , "author" : $("li.comment>.comment-body>.content_comments-top input").eq(0).val() , "mail" : $("li.comment>.comment-body>.content_comments-top input").eq(1).val() , "url" : $("li.comment>.comment-body>.content_comments-top input").eq(2).val(),
												"cid" : $("#content_post-1 .content_post-bottom h2 a").attr("cid") , "created" : parseInt(new Date().getTime()/1000) , "parent" : temp.siblings(".comment-floor").html().slice(1) , "ancestor" : temp.siblings(".comment-floor").html().slice(1)};
										$.post(url,args,function(data){
											
										});
										comments(1);
									});
									//comments增加评论（触发）结束
									
								});
								//comments点击reply触发结束
								
							});
							//comments的ajax结束
							
						}
						//comments结束
					
					});
					//post的ajax结束
				}
				//post结束
			});
			//点击文章列表的文章标题显示文章详情结束
			
		});
		//posts的ajax结束
	}
	//posts结束
	
});