package com.lb.memory.service;

import java.util.List;

import com.lb.memory.pojo.User;

public interface UserService {

	public abstract List<User> selectAll(Integer in);
	
}
