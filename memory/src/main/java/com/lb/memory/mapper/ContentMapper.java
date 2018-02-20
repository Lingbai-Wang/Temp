package com.lb.memory.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.lb.memory.pojo.Content;

public interface ContentMapper {

	List<Content> selectAll(@Param("cid") Integer cid,@Param("start") Integer start,@Param("count") Integer count);

	Integer selectRowCount(Content content);
	
}
