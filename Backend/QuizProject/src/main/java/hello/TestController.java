package hello;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;


@CrossOrigin(origins ="http://localhost:3000")
@Controller
public class TestController {
	@Autowired
    QuizService service; 
	
	
	@GetMapping("/test")
	@ResponseBody
	public String test() {
		return "run Sucessfully";
	}
	@RequestMapping(path="/register", method = RequestMethod.POST )
	public ResponseEntity<String> setQuestion(@RequestBody QuizRequest req) {
        String response = service.setContent(req);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
	@RequestMapping(path="/getall", method =RequestMethod.GET)
	@ResponseBody
	 public ResponseEntity<List<Quiz>> getAllQuestions() {
        List<Quiz> quizList = service.getAllUserDetails();
        return ResponseEntity.ok(quizList);
    }
	@RequestMapping(path="/get/{id}",method = RequestMethod.GET)
	@ResponseBody
	public Quiz getQuestionByid(@PathVariable int id) {
		return  service.getQuestionById(id);
	}
	@RequestMapping(path="/register2/{id}", method = RequestMethod.PUT )
	public String updatequestion(@RequestBody QuizRequest req ,@PathVariable int id) {
		String response = service.updateQuiz(id, req);
		return response;
	}
	@RequestMapping(path = "/delete/{id}",method = RequestMethod.DELETE )
	 public ResponseEntity<String> deleteQuestion(@PathVariable int id) {
        String response = service.deleteQuizById(id);
        if (response.equals("Quiz not found")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }
}
