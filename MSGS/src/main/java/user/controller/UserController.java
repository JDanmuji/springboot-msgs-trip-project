package user.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import user.bean.UserDTO;
import user.service.UserService;

@RestController
@RequestMapping("user")
public class UserController {
	
	@Autowired
	private UserService userService;

	@GetMapping(value="writeForm")
	public String writeForm() {
		return "user/writeForm";
	}
	
	@PostMapping(value="write")
	@ResponseBody //무조건 jsp를 찾아감.
	public void write(@ModelAttribute UserDTO userDTO) {
		System.out.println(userDTO);
		
		userService.write(userDTO);
	}
	
	@GetMapping(value="list")
	public String listForm() {
		return "user/list";
	}
	
	@PostMapping(value="getUserList")
	public List<UserDTO> getUserList() {
		return userService.getUserList();
	}
	
	@PostMapping(value="isExistId")
	@ResponseBody //무조건 jsp를 찾아감.
	public String isExistId(@RequestParam String id) {
		return userService.isExistId(id);
	}
	

	@PostMapping(value="search")
	@ResponseBody //무조건 jsp를 찾아감.
	public List<UserDTO> search(@RequestParam Map<String, String> map) {
		List<UserDTO> list = userService.search(map); 
		return list;
	}
	
	@GetMapping(value="updateForm")
	public String updateForm() {
		return "user/updateForm";
	}
	
	@PostMapping(value="getUser")
	@ResponseBody //갖고있는 객체를 바로 JSON 형식으로 변경해준다.
	public Optional<UserDTO> getUser(@RequestParam String searchId)throws Exception  {
		return userService.getUser(searchId);
	}
	
	@PostMapping(value="update")
	@ResponseBody //무조건 jsp를 찾아감.
	public void update(@ModelAttribute UserDTO userDTO) {
		System.out.println(userDTO);
		userService.update(userDTO);
	}
	
	@GetMapping(value="deleteForm")
	public String deleteForm() {
		return "user/deleteForm";
	}
	
	@PostMapping(value="delete")
	@ResponseBody //무조건 jsp를 찾아감.
	public void delete(@ModelAttribute UserDTO userDTO) {
		System.out.println(userDTO);
		userService.delete(userDTO);
	}
}
