package user.dao;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import user.bean.UserDTO;

@Repository
public interface UserDAO  extends JpaRepository<UserDTO, String>{

	//쿼리 메서드
	//select * from usertable where name like '%' || ? || '%'
	
	public List<UserDTO> findByNameContaining(String keyword);
	
	public List<UserDTO> findByIdContaining(String keyword);

	
	//-------------------------------------------------------------
	// 어노테이션 
	// 검색 대상이 테이블이 아니라 영속성 컨텍스트에 등록된 엔티티이다.
	// 변수 이름은 대소문자를 구분하여 정확하게 지정해야 된다.
	// ?1는 첫번째 파라미터를 의미
	 //UserDTO dto = new UserDTO();
	// @Query("select dto form UserDTO") 와일드 키트 * 사용 금지
	// UserDTO dto => from table alias 가 아닌 UserDTo dto = new UserDTO(); 에 있는 객체 명으로 인식
//	@Query("select dto form UserDTO dto where dto.name like '%' || ?1 || '%'")
//	public List<UserDTO> getUserSearchName(String keyword);
//
//	@Query("select dto form UserDTO dto where dto.id like '%' || ?1 || '%'")
//	public List<UserDTO> getUserSearchId(String keyword);
	
	//@Query(value="select dto from UserDTO dto where dto.name like '%' || :keyword || '%'" , nativeQuery = true)
	@Query("select dto from UserDTO dto where dto.name like '%' || ?1 || '%'")
	public List<UserDTO> getUserSearchName(String keyword);                      
	                                                                             
	//@Query(value="select dto from UserDTO dto where dto.id like '%' || :keyword || '%'" , nativeQuery = true)
	@Query("select dto from UserDTO dto where dto.id like '%' || ?1 || '%'")
	public List<UserDTO> getUserSearchId(String keyword);                        
}

