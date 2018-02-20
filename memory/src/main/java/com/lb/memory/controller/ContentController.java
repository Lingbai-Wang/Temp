package com.lb.memory.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lb.memory.pojo.Content;
import com.lb.memory.service.ContentService;

@Controller
@RequestMapping(value = "/content")
public class ContentController {

	@Autowired
	private ContentService service;

	@RequestMapping(value = "/selectPost")
	@ResponseBody
	public List<Content> selectUserMessage(@RequestParam Integer pageNumber, @RequestParam Integer cid) {
		
		System.out.println("pageNumber:"+pageNumber);
		System.out.println("cid:"+cid);
		
		Content content = new Content();
		Integer rowCount = service.selectRowCount(content);
		System.out.println("rowCount:"+rowCount);
		Integer pageRowCount = 4;
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
		List<Content> list = service.selectAll(cid, startRowCount, pageRowCount);
		content.setPagination(pages);
		content.setLastPageNumber(lastPageNumber);
		content.setRowCount(rowCount);
		list.add(0,content);
		return list;

	}
}
