package user.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import user.bean.UserDTO;

public interface UserService {

	public void write(UserDTO userDTO);

	public List<UserDTO> getUserList();

	public String isExistId(String id);

	public List<UserDTO> search(Map<String, String> map);

	public Optional<UserDTO> getUser(String searchId);

	public void update(UserDTO userDTO);

	public void delete(UserDTO userDTO);


}
