package com.lb.memory.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lb.memory.mapper.CommentMapper;
import com.lb.memory.pojo.Comment;
import com.lb.memory.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService{

	@Autowired
	private CommentMapper commentMapper;
	
	@Override
	public List<Comment> selectAll(Integer cid,Integer start,Integer count,Integer ancestor) {
		return commentMapper.selectAll(cid,start,count,ancestor);
	}

	@Override
	public Integer selectRowCount(Comment comment) {
		return commentMapper.selectRowCount(comment.getCid(),comment.getAncestor());
	}

	@Override
	public void insert(Comment comment) {
		commentMapper.insert(comment.getText(),comment.getAuthor(),comment.getMail(),comment.getUrl(),comment.getCid(),comment.getCreated(),comment.getParent(),comment.getAncestor());
	}

}
