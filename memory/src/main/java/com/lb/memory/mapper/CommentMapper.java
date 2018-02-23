package com.lb.memory.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.lb.memory.pojo.Comment;

public interface CommentMapper {

	List<Comment> selectAll(@Param("cid") Integer cid,@Param("start") Integer start,@Param("count") Integer count,@Param("ancestor") Integer ancestor);

	Integer selectRowCount(@Param("cid") Integer cid, @Param("ancestor") Integer ancestor);
	
	void insert(@Param("text") String text,@Param("author") String author,@Param("mail") String mail,@Param("url") String url,@Param("cid") Integer cid,@Param("created") Integer created,@Param("parent") Integer parent,@Param("ancestor") Integer ancestor);
	
}
