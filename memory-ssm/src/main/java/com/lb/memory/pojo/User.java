package com.lb.memory.pojo;

public class User {

	private Integer uid;
	
	private String name;
	
	private String password;
	
	private String mail;
	
	private String url;
	
	private String screenName;
	
	private Integer created;
	
	private Integer activated;
	
	private Integer logged;
	
	private String group;
	
	private String authCode;

	public Integer getUid() {
		return uid;
	}

	public void setUid(Integer uid) {
		this.uid = uid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public String getScreenName() {
		return screenName;
	}

	public void setScreenName(String screenName) {
		this.screenName = screenName;
	}

	public Integer getCreated() {
		return created;
	}

	public void setCreated(Integer created) {
		this.created = created;
	}

	public Integer getActivated() {
		return activated;
	}

	public void setActivated(Integer activated) {
		this.activated = activated;
	}

	public Integer getLogged() {
		return logged;
	}

	public void setLogged(Integer logged) {
		this.logged = logged;
	}

	public String getGroup() {
		return group;
	}

	public void setGroup(String group) {
		this.group = group;
	}

	public String getAuthCode() {
		return authCode;
	}

	public void setAuthCode(String authCode) {
		this.authCode = authCode;
	}

	@Override
	public String toString() {
		return "User [uid=" + uid + ", name=" + name + ", password=" + password + ", mail=" + mail + ", url=" + url
				+ ", screenName=" + screenName + ", created=" + created + ", activated=" + activated + ", logged="
				+ logged + ", group=" + group + ", authCode=" + authCode + "]";
	}
	
}
