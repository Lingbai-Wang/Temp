package com.lb.memory.mapper;

import java.util.List;

import com.lb.memory.pojo.Content;

public interface ContentMapper {

	List<Content> selectAll(Integer cid);
}
