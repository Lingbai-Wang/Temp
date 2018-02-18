package com.lb.memory.mapper;

import java.util.List;

import com.lb.memory.pojo.User;

public interface UserMapper {

	List<User> selectAll(Integer in);
}
