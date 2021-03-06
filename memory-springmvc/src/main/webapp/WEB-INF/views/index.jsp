<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" +request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
	<base href="<%=basePath%>">
	<meta charset="UTF-8">
	<title>Memory-Cloister Backend</title>
	<link rel="stylesheet" href="./css/font-awesome.min.css">
	<link rel="stylesheet" href="./css/index.css">
	<script type="text/javascript" src="./js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="./js/index.js"></script>
</head>
<body>
	<div id="layout">
		<header>
			<div id="home">
				<a href="javascript:void(0)">
					<i class="fa fa-paper-plane-o"></i>
					<span>Memory-Cloister</span>
				</a>
			</div>
			<div id="header_container">
				<div id="header_btn">
					<a href="javascript:void(0)" id="header_aside-btn">
						<i class="fa fa-tasks"></i>
					</a>
					<a href="javascript:void(0)" id="header_user-btn">
						<i class="fa fa-user-o"></i>
					</a>
				</div>
				<div id="header_search">
					<form action="" method="post">
						<input type="search" placeholder="输入关键词搜索..." id="header_search-content">
						<button type="submit" id="header_search-btn">
							<i class="fa fa-search"></i>
						</button>
					</form>
				</div>
				<div id="header_userinfo">
					<div id="header_userinfo-set">
						<a href="javascript:void(0)">
							<i class="fa fa-gears"></i>
						</a>
					</div>
					<div id="header_userinfo-email">
						<a href="javascript:void(0)">
							<i class="fa fa-envelope-o"></i>
						</a>
					</div>
					<div id="header_userinfo-message">
						<a href="javascript:void(0)">
							<i class="fa fa-bell-o"></i>
						</a>
					</div>
					<div id="header_userinfo-login">
						<a href="javascript:void(0)">
							<span>登录</span>
							<i class="fa fa-angle-double-down"></i>
						</a>
					</div>
				</div>
			</div>
		</header>
		<aside>
			<div id="aside_container">
				<div id="aside_wrap">
					<div id="aside_userinfo">
						<a href="javascript:void(0)">
							<span>
								<img src="./imgs/紫.jpeg" alt="" id="aside_userinfo-profilePhoto">
							</span>
						</a>
						<a href="javascript:void(0)">
							<span>
								<strong>Lingbai-Wang</strong>
								<i class="fa fa-angle-double-down"></i>
							</span>
							<span>
								As time goes by, do you remember what you did?
							</span>
						</a>
					</div>
					<div class="aside_line"></div>
					<nav id="aside_nav">
						<ul class="aside_nav-index0">
							<li class="aside_nav-title">
								<span>Navigation</span>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-home"></i>
									<span>Home</span>
								</a>
							</li>
						</ul>
						<div class="aside_line"></div>
						<ul class="aside_nav-index0">
							<li class="aside_nav-title">
								<span>Components</span>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-wpexplorer"></i>
									<span>Categories</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Code</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it</span>
										</a>
										<ul class="aside_nav-index2">
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-lemon-o"></i>
									<span>Pages</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Code!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-flag-o"></i>
									<span>Links</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Code!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!!</span>
										</a>
									</li>
								</ul>
							</li>

							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-wpexplorer"></i>
									<span>Test1</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Code</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it</span>
										</a>
										<ul class="aside_nav-index2">
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-lemon-o"></i>
									<span>Test1</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Code!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-flag-o"></i>
									<span>Test1</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Code!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!!</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-wpexplorer"></i>
									<span>Test3</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Code</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it</span>
										</a>
										<ul class="aside_nav-index2">
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-lemon-o"></i>
									<span>Test3</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Start!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Test!</span>
										</a>
										<ul class="aside_nav-index2">
											<li>
												<a href="javascript:void(0)">
													<span>Start</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Perfect</span>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Code!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Test!</span>
										</a>
										<ul class="aside_nav-index2">
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Code!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Code!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Code!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Code!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Code!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Test!</span>
										</a>
										<ul class="aside_nav-index2">
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Alive</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0)">
													<span>Enjoy</span>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Code!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Code!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Perfect!</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-flag-o"></i>
									<span>Test3</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Code!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!!</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-flag-o"></i>
									<span>Test6</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Code!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!!</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-flag-o"></i>
									<span>Test6</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Code!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!!</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-flag-o"></i>
									<span>Test6</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Code!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!!</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-flag-o"></i>
									<span>Test9</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Code!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!!</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-flag-o"></i>
									<span>Test9</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Code!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!!</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0)">
									<i class="fa fa-flag-o"></i>
									<span>Test9</span>
									<span class="aside_nav-arrow">
										<i class="fa fa-angle-right"></i>
										<i class="fa fa-angle-down"></i>
									</span>
								</a>
								<ul class="aside_nav-index1">
									<li>
										<a href="javascript:void(0)">
											<span>Code!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Do it!!</span>
										</a>
									</li>
									<li>
										<a href="javascript:void(0)">
											<span>Life!!</span>
										</a>
									</li>
								</ul>
							</li>


						</ul>
					</nav>
				</div>
			</div>
		</aside>
		<div id="content">
			
		</div>
		<footer>
			<div>
				<span>© 2017 Memory-Cloister by 0100</span>
			</div>
		</footer>
	</div>
	<div id="panel">
		<button id="panel_btn">
			<i class="fa fa-cog fa-spin"></i>
		</button>
		<div id="panel_header">
			<span>Setting</span>
			<button id="panel_btn-0">Reset</button>
		</div>
		<div id="panel_body">
			<div>
				<span>Fix head</span>
				<span class="panel_toggle" id="panel_btn-1">
					<i class="fa fa-toggle-off"></i>
					<i class="fa fa-toggle-on"></i>
				</span>
			</div>
			<div>
				<span>Box model</span>
				<span class="panel_toggle" id="panel_btn-2">
					<i class="fa fa-toggle-off"></i>
					<i class="fa fa-toggle-on"></i>
				</span>
			</div>
			<div>
				<span>Nav style 1</span>
				<span class="panel_toggle" id="panel_btn-3">
					<i class="fa fa-toggle-off"></i>
					<i class="fa fa-toggle-on"></i>
				</span>
			</div>
			<div>
				<span>Nav style 2</span>
				<span class="panel_toggle" id="panel_btn-4">
					<i class="fa fa-toggle-off"></i>
					<i class="fa fa-toggle-on"></i>
				</span>
			</div>
			<div>
				<span>Nav style 3</span>
				<span class="panel_toggle" id="panel_btn-5">
					<i class="fa fa-toggle-off"></i>
					<i class="fa fa-toggle-on"></i>
				</span>
			</div>
		</div>
		<div id="theme_container">
			
		</div>
	</div>
</body>
</html>