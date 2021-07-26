package com.ssafy.api.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.api.request.UserRegisterUpdateReq;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.UserRepository;
import com.ssafy.db.repository.UserRepositorySupport;

import lombok.RequiredArgsConstructor;

/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
 */
@Service("userService")
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepository userRepository;

	@Autowired
	UserRepositorySupport userRepositorySupport;

	@Override
	public Optional<User> createUser(UserRegisterPostReq userRegisterPostReq) {
		User user = new User();
		user.setKakaoIdNum(userRegisterPostReq.getKakaoIdNum());
		user.setName(userRegisterPostReq.getName());
		user.setIsOpen(userRegisterPostReq.getIsOpen());
		user.setUsercode(101); // 기본값으로 일반 회원 코드 사용
		user.setCategory(userRegisterPostReq.getCategory());
		return Optional.ofNullable(userRepository.save(user));
	}

	@Override
	public Optional<User> getUserByKakaoIdNum(String kakaoIdNum) {
		// 디비에 유저 정보 조회 (kakaoIdNum 를 통한 조회).
		Optional<User> user = userRepositorySupport.findUserByKakaoIdNum(kakaoIdNum);
		return user;
	}

//	@Override
//	@Transactional
//	public User updateUserByKakao_idnum(String kakao_idnum, UserRegisterUpdateReq registerInfo) {
//		User user = userRepository.findByKakao_idnum(kakao_idnum).get();
//		
//		if (user.getId() == null) {
//			return null;
//		}
//
//		user.setDepartment(registerInfo.getDepartment());
//		user.setPosition(registerInfo.getPosition());
//		user.setName(registerInfo.getName());
//		return user;
//	}

}
