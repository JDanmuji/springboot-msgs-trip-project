package user.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import user.bean.UserDTO;
import user.dao.UserDAO;


@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDAO userDAO;

	@Override
	public void write(UserDTO userDTO) {
		userDAO.save(userDTO);
	}

	@Override
	public List<UserDTO> getUserList() {
		return 	userDAO.findAll();
	}

	@Override
	public String isExistId(String id) {
		String result = "non_exist"; 
		
		Optional<UserDTO> userDTO = userDAO.findById(id); //id가 없으면 Optional.empty 출력된다.
		
		if(userDTO.isPresent()) {
			result = "exist";
		}
		
		return result; 
	}

//	@Override
//	public List<UserDTO> search(Map<String, String> map) {
//		
//		String searchOption = map.get("searchOption");
//		String keyword = map.get("keyword");
//		
//		if (searchOption.equals("name")) {
//			return userDAO.findByNameContaining(keyword);
//		} else {
//			return userDAO.findByNameContaining(keyword);
//		}
//		
//	}
	
	//@Query 어노테이션
	@Override
	public List<UserDTO> search(Map<String, String> map) {
		
		String searchOption = map.get("searchOption");
		String keyword = map.get("keyword");
	
		if (searchOption.equals("name")) {
			return userDAO.getUserSearchName(keyword);
		} else {
			return userDAO.getUserSearchId(keyword);
		}
		
	}

	@Override
	public Optional<UserDTO> getUser(String searchId) {
		Optional<UserDTO> userDTO = userDAO.findById(searchId); //id가 없으면 Optional.empty 출력된다.
		return userDTO;
	}

	@Transactional
	@Override
	public void update(UserDTO userDTO) {
		
		userDAO.save(userDTO); //없으면 insert, 있으면 update
		
		/* 변경감지
		 * String id = userDTO.getId(); Optional<UserDTO> datalist =
		 * userDAO.findById(id);
		 * 
		 * datalist.get().changeName(userDTO.getName());
		 * datalist.get().changePwd(userDTO.getPwd());
		 */
	}

	@Override
	public void delete(UserDTO userDTO) {
		
		//deleteByID()는 내부적으로 findById()를 수행하고 delete를 수행한다.
		//만약 아이디가 없으면 Empty Result DataAcessException이 발생한다.
		// select * from 테이블 where id = ? select 문 진행 후, 데이터가 있으며
		// delete from 테이블 where id=? delete 진행
		userDAO.deleteById(userDTO.getId());
		 
	}

}


/*
쿼리 메소드
JPA에서 제공하는 CrudRepository, 또는 JpaRepository를 이용해서 기본적인 CRUD 기능을 수행했다.
일반적으로 JPA를 이용해서 목록 기능을 구현할 때는 JPQL(Java Persistence Query Language)을 이용하면 된다.
JPQL은 검색 대상이 테이블이 아닌 엔티티 라는 것만 제외하고는 기본 구조와 문법이 기존의 SQL과 유사하다.

스프링 JPA에서는 복잡한 JPQL을 대신해서 처리할 수 있는 쿼리 메소드라는 기능을 제공한다.
쿼리 메소드는 메소드의 이름으로 필요한 쿼리를 만들어주는 기능이다.

쿼리 메소드를 작성할 때 엔티티 이름은 생략할 수 있다.
현재 사용하는 Repository 인터페이스에서 선언된 타입 정보를 기준으로 자동 엔티티 이름이 적용된다.

쿼리 메소드의 리턴 타입은 Page<T>, Slice<T>, List<T> 이며 모두 Collection<T> 타입이다.
이 중에서 가장 많이 사용하는 것은 Page<T>, List<T>로서, 단순히 목록을 검색하려면 List<T>를 사용하고 페이징 처리를 하려면 Page<T>를 사용하면 된다.
------------------------

@Query 어노테이션
일반적인 쿼리는 지금까지 학습한 스프링 데이터 JPA의 쿼리 메소드만으로도 충분하다. 
하지만 복잡한 쿼리를 사용하거나 연관관계에 기반한 조인 검색을 처리하기 위해서는 JPQL(Java Persistence Query Language)을 사용해야 한다. 
또는 성능상 어쩔 수 없이 특정 데이터베이스에 종속적인 네이티브 쿼리를 사용해야하는 경우도 있다.

JPQL은 일반적인 SQL과 유사한 문법을 가지고 있지만 검색 대상이 테이블이 아니라 영속성 컨텍스트에 등록된 엔티티이다.
따라서 FROM 절에 엔티티 이름과 컬럼 대신 엔티티가 가지고 있는 변수를 조회하기 때문에
SELECT나 WHERE 절에서 사용하는 변수 이름은 대소문자를 구분하여 정확하게 지정해야 한다.
 
 */
