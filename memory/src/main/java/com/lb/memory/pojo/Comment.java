package com.lb.memory.pojo;

import java.util.ArrayList;

public class Comment {

	private Integer coid;
	
	private Integer cid;
	
	private Integer created;
	
	private String author;
	
	private Integer authorId;
	
	private Integer ownerId;
	
	private String mail;
	
	private String url;
	
	private String ip;
	
	private String agent;
	
	private String text;
	
	private String type;
	
	private String status;
	
	private Integer parent;
	
	private Integer ancestor;
	
	private ArrayList<Integer> pagination;
	
	private Integer lastPageNumber;
	
	private Integer rowCount;

	public Integer getCoid() {
		return coid;
	}

	public void setCoid(Integer coid) {
		this.coid = coid;
	}

	public Integer getCid() {
		return cid;
	}

	public void setCid(Integer cid) {
		this.cid = cid;
	}

	public Integer getCreated() {
		return created;
	}

	public void setCreated(Integer created) {
		this.created = created;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public Integer getAuthorId() {
		return authorId;
	}

	public void setAuthorId(Integer authorId) {
		this.authorId = authorId;
	}

	public Integer getOwnerId() {
		return ownerId;
	}

	public void setOwnerId(Integer ownerId) {
		this.ownerId = ownerId;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public String getAgent() {
		return agent;
	}

	public void setAgent(String agent) {
		this.agent = agent;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getParent() {
		return parent;
	}

	public void setParent(Integer parent) {
		this.parent = parent;
	}
	
	public Integer getAncestor() {
		return ancestor;
	}

	public void setAncestor(Integer ancestor) {
		this.ancestor = ancestor;
	}

	public ArrayList<Integer> getPagination() {
		return pagination;
	}

	public void setPagination(ArrayList<Integer> pagination) {
		this.pagination = pagination;
	}

	public Integer getLastPageNumber() {
		return lastPageNumber;
	}

	public void setLastPageNumber(Integer lastPageNumber) {
		this.lastPageNumber = lastPageNumber;
	}

	public Integer getRowCount() {
		return rowCount;
	}

	public void setRowCount(Integer rowCount) {
		this.rowCount = rowCount;
	}

	@Override
	public String toString() {
		return "Comment [coid=" + coid + ", cid=" + cid + ", created=" + created + ", author=" + author + ", authorId="
				+ authorId + ", ownerId=" + ownerId + ", mail=" + mail + ", url=" + url + ", ip=" + ip + ", agent="
				+ agent + ", text=" + text + ", type=" + type + ", status=" + status + ", parent=" + parent + "]";
	}
	
}
