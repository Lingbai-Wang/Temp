package com.lb.memory.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lb.memory.mapper.ContentMapper;
import com.lb.memory.pojo.Content;
import com.lb.memory.service.ContentService;

@Service
public class ContentServiceImpl implements ContentService{

	@Autowired
	private ContentMapper contentMapper;
	
	@Override
	public List<Content> selectAll() {
		return contentMapper.selectAll();
	}

}
