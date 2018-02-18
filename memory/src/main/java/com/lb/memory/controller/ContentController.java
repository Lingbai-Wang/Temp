package com.lb.memory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lb.memory.pojo.Content;
import com.lb.memory.service.ContentService;

@Controller
@RequestMapping(value="/content")
public class ContentController {
	
	@Autowired
	private ContentService service;

	@RequestMapping(value="/selectPost")
	@ResponseBody
	public List<Content> selectUserMessage(@RequestParam Integer in){
		
		List<Content> list = service.selectAll();
		System.out.println(list);
		return list;
		
	}
}
