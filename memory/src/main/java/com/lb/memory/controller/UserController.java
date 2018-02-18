package com.lb.memory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lb.memory.pojo.User;
import com.lb.memory.service.UserService;

@Controller
@RequestMapping(value="/user")
public class UserController {
	
	@Autowired
	private UserService service;

	@RequestMapping(value="/selectUserMessage")
	@ResponseBody
	public List<User> selectUserMessage(@RequestParam Integer in){
		
		List<User> list = service.selectAll(in);
		System.out.println(list);
		return list;
		
	}
}
