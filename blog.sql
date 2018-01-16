-- --------------------------------------------------------

--
-- 数据库: `memory`
--

DROP DATABASE IF EXISTS memory;
CREATE DATABASE memory DEFAULT CHARACTER SET utf8;
USE memory;

-- --------------------------------------------------------

--
-- 表的结构 `blog_comments`
--

CREATE TABLE `blog_comments` (
  `coid` int(10) unsigned NOT NULL auto_increment,
  `cid` int(10) unsigned default '0',
  `created` int(10) unsigned default '0',
  `author` varchar(200) default NULL,
  `authorId` int(10) unsigned default '0',
  `ownerId` int(10) unsigned default '0',
  `mail` varchar(200) default NULL,
  `url` varchar(200) default NULL,
  `ip` varchar(64) default NULL,
  `agent` varchar(200) default NULL,
  `text` text,
  `type` varchar(16) default 'comment',
  `status` varchar(16) default 'approved',
  `parent` int(10) unsigned default '0',
  PRIMARY KEY  (`coid`),
  KEY `cid` (`cid`),
  KEY `created` (`created`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `blog_contents`
--

CREATE TABLE `blog_contents` (
  `cid` int(10) unsigned NOT NULL auto_increment,
  `title` varchar(200) default NULL,
  `slug` varchar(200) default NULL,
  `created` int(10) unsigned default '0',
  `modified` int(10) unsigned default '0',
  `text` longtext,
  `order` int(10) unsigned default '0',
  `authorId` int(10) unsigned default '0',
  `template` varchar(32) default NULL,
  `type` varchar(16) default 'post',
  `status` varchar(16) default 'publish',
  `password` varchar(32) default NULL,
  `commentsNum` int(10) unsigned default '0',
  `allowComment` char(1) default '0',
  `allowPing` char(1) default '0',
  `allowFeed` char(1) default '0',
  `parent` int(10) unsigned default '0',
  PRIMARY KEY  (`cid`),
  UNIQUE KEY `slug` (`slug`),
  KEY `created` (`created`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `blog_fields`
--

CREATE TABLE `blog_fields` (
  `cid` int(10) unsigned NOT NULL,
  `name` varchar(200) NOT NULL,
  `type` varchar(8) default 'str',
  `str_value` text,
  `int_value` int(10) default '0',
  `float_value` float default '0',
  PRIMARY KEY  (`cid`,`name`),
  KEY `int_value` (`int_value`),
  KEY `float_value` (`float_value`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `blog_metas`
--

CREATE TABLE `blog_metas` (
  `mid` int(10) unsigned NOT NULL auto_increment,
  `name` varchar(200) default NULL,
  `slug` varchar(200) default NULL,
  `type` varchar(32) NOT NULL,
  `description` varchar(200) default NULL,
  `count` int(10) unsigned default '0',
  `order` int(10) unsigned default '0',
  `parent` int(10) unsigned default '0',
  PRIMARY KEY  (`mid`),
  KEY `slug` (`slug`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `blog_options`
--

CREATE TABLE `blog_options` (
  `name` varchar(32) NOT NULL,
  `user` int(10) unsigned NOT NULL default '0',
  `value` text,
  PRIMARY KEY  (`name`,`user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `blog_relationships`
--

CREATE TABLE `blog_relationships` (
  `cid` int(10) unsigned NOT NULL,
  `mid` int(10) unsigned NOT NULL,
  PRIMARY KEY  (`cid`,`mid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `blog_users`
--

CREATE TABLE `blog_users` (
  `uid` int(10) unsigned NOT NULL auto_increment,
  `name` varchar(32) default NULL,
  `password` varchar(64) default NULL,
  `mail` varchar(200) default NULL,
  `url` varchar(200) default NULL,
  `screenName` varchar(32) default NULL,
  `created` int(10) unsigned default '0',
  `activated` int(10) unsigned default '0',
  `logged` int(10) unsigned default '0',
  `group` varchar(16) default 'visitor',
  `authCode` varchar(64) default NULL,
  PRIMARY KEY  (`uid`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8;
