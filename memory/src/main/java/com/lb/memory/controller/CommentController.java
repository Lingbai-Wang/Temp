package com.lb.memory.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lb.memory.pojo.Comment;
import com.lb.memory.service.CommentService;

@Controller
@RequestMapping(value = "/comment")
public class CommentController {

	@Autowired
	private CommentService service;

	@RequestMapping(value = "/selectComment")
	@ResponseBody
	public List<Comment> selectCommentMessage(@RequestParam Integer pageNumber, @RequestParam Integer cid, @RequestParam Integer ancestor) {
		
		System.out.println("pageNumber:"+pageNumber);
		System.out.println("cid:"+cid);
		
		Comment comment = new Comment();
		comment.setCid(cid);
		comment.setAncestor(ancestor);
		Integer rowCount = service.selectRowCount(comment);
		System.out.println("rowCount:"+rowCount);
		Integer pageRowCount = 1;
		// 根据满足条件的行数与每页显示的行数，求出最后一页的页数
		Double lastPageTemp = Math.ceil(rowCount / pageRowCount.doubleValue());
		Integer lastPageNumber = lastPageTemp.intValue();
		// 用于在删除某页唯一一行数据时，进行当前页pageNumber的重置
		if (pageNumber > lastPageNumber) {
			pageNumber = lastPageNumber;
		}
		Integer endRowCount = pageRowCount * pageNumber;
		Integer startRowCount = endRowCount - (pageRowCount - 1) - 1;

		// 创建一个arraylist，用于显示5个分页
		ArrayList<Integer> pages = new ArrayList<Integer>();
		// 起始页
		Integer startPageNumber = null;

		if (lastPageNumber < 5) {
			startPageNumber = 1;
			for (int j = 0; j < lastPageNumber; j++) {
				pages.add(startPageNumber);
				startPageNumber++;
			}
		} else if ((pageNumber + 2) <= lastPageNumber && pageNumber <= 3) {
			startPageNumber = 1;
			for (int j = 0; j < 5; j++) {
				pages.add(startPageNumber);
				startPageNumber++;
			}
		} else if ((pageNumber + 2) <= lastPageNumber && pageNumber > 3) {
			startPageNumber = pageNumber - 2;
			for (int j = 0; j < 5; j++) {
				pages.add(startPageNumber);
				startPageNumber++;
			}
		} else if ((pageNumber + 2) > lastPageNumber) {
			startPageNumber = lastPageNumber - 4;
			for (int j = 0; j < 5; j++) {
				pages.add(startPageNumber);
				startPageNumber++;
			}
		}
		System.out.println("startRowCount:"+startRowCount);
		System.out.println("pageRowCount:"+pageRowCount);
		List<Comment> list = service.selectAll(cid, startRowCount, pageRowCount, ancestor);
		comment.setPagination(pages);
		comment.setLastPageNumber(lastPageNumber);
		comment.setRowCount(rowCount);
		list.add(0,comment);
		return list;

	}
	
	@RequestMapping(value = "/insertComment")
	@ResponseBody
	public boolean insertCommentMessage(@RequestParam String text, @RequestParam String author, @RequestParam String mail, @RequestParam String url,
			@RequestParam Integer cid,@RequestParam Integer created,@RequestParam Integer parent,@RequestParam Integer ancestor){
		Comment comment = new Comment();
		comment.setText(text);
		comment.setAuthor(author);
		comment.setMail(mail);
		comment.setUrl(url);
		comment.setCid(cid);
		comment.setCreated(created);
		comment.setParent(parent);
		comment.setAncestor(ancestor);
		service.insert(comment);
		return false;
	}
	
}
