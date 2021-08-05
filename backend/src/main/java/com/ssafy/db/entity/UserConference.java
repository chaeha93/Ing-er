package com.ssafy.db.entity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class UserConference extends BaseEntity{
	@ManyToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "userId", nullable = false)
	User user;

	@ManyToOne
	@JoinColumn(name = "conferenceId", nullable = false)
	Conference conference;
}
