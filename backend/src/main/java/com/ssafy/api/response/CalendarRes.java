package com.ssafy.api.response;

import java.sql.Date;

import com.ssafy.db.entity.Calendar;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("CalendarResponse")
public class CalendarRes {
	
	Long id;
	Long userid;
	Date date;
	String promise;
	String diary;
	Integer studyTime;
	
}
