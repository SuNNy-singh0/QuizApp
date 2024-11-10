package hello;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;


@Service
public class QuizService {
@Autowired
QuizRepository repo;
public String setContent(QuizRequest request) {
	Quiz quiz = new Quiz();
	quiz.setProblem(request.getProblem());;
	quiz.setOption1(request.getOption1());
	quiz.setOption2(request.getOption2());
	quiz.setOption3(request.getOption3());
	quiz.setOption4(request.getOption4());
	quiz.setCorrectoption(request.getCorrectoption());
	repo.save(quiz);
	return "sucessfully data entered";
}
public List<Quiz> getAllUserDetails() 
{ 
	return repo.findAll(); 
}
public  Quiz getQuestionById(int empId) {
    Optional<Quiz> optionalEmployee = repo.findById(empId);
    return optionalEmployee.orElse(null);
}
public String deleteQuizById(int quizId) {
    try {
        repo.deleteById(quizId);
        return "Quiz with ID " + quizId + " deleted successfully";
    } catch (EmptyResultDataAccessException e) {
        return "Quiz with ID " + quizId + " not found";
    }
}
public String updateQuiz(int quizId, QuizRequest updatedQuizData) {
    Optional<Quiz> optionalQuiz = repo.findById(quizId);

    if (optionalQuiz.isPresent()) {
        Quiz quiz = optionalQuiz.get();

        // Update the quiz properties with the new data
        quiz.setProblem(updatedQuizData.getProblem());
        quiz.setOption1(updatedQuizData.getOption1());
        quiz.setOption2(updatedQuizData.getOption2());
        quiz.setOption3(updatedQuizData.getOption3());
        quiz.setOption4(updatedQuizData.getOption4());
        quiz.setCorrectoption(updatedQuizData.getCorrectoption());

        repo.save(quiz); // Save the updated quiz
        return "Quiz with ID " + quizId + " updated successfully";
    } else {
        return "Quiz with ID " + quizId + " not found";
    }
}

}
