package com.lb.memory.service;

import java.util.List;

import com.lb.memory.pojo.Content;

public interface ContentService {

	public abstract List<Content> selectAll(Integer cid);
	
}
