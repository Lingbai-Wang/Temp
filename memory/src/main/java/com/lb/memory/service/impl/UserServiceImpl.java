package com.lb.memory.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lb.memory.mapper.UserMapper;
import com.lb.memory.pojo.User;
import com.lb.memory.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserMapper userMapper;
	
	@Override
	public List<User> selectAll(Integer in) {
		return userMapper.selectAll(in);
	}

}
