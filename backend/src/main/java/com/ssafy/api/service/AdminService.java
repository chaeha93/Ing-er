package com.ssafy.api.service;

import java.util.List;
import java.util.Optional;

import com.ssafy.api.request.AdminRegisterUpdateReq;
import com.ssafy.api.request.NotifyRegisterReq;
import com.ssafy.api.response.DetailsCodeRes;
import com.ssafy.db.entity.CommonCode;
import com.ssafy.db.entity.DetailsCode;
import com.ssafy.db.entity.Notify;
import com.ssafy.db.entity.User;

/**
 * 관리자 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface AdminService {
	User updateUserByKakaoIdnum(AdminRegisterUpdateReq adminRegisterUpdateReq);

	Optional<List<CommonCode>> getCommonCodeList();

	CommonCode createCommonCode(String kind);

	CommonCode updateCommonCodeById(Long id, String kind);

	void deleteCommonCodeById(Long id);

	List<DetailsCodeRes> getDetailsCodeList();

	DetailsCode createDetailsCode(String name, Long type);

	DetailsCode updateDetailsCodeById(Long id, String name);

	void deleteDetailsCodeById(Long id);

	Notify createNotify(NotifyRegisterReq notifyRegisterReq);
}
