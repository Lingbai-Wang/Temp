package com.lb.memory.service;

import java.util.List;

import com.lb.memory.pojo.Comment;

public interface CommentService {

	public abstract List<Comment> selectAll(Integer cid,Integer start,Integer count,Integer ancestor);
	
	public abstract Integer selectRowCount(Comment comment);
	
	public abstract void insert(Comment comment);
	
}
