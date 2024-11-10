package hello;


import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRegistration;

public class SpringInitializer implements WebApplicationInitializer {

	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		System.out.println("quiz");
		AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
		context.register(SpringConfig.class);
		DispatcherServlet dispatcherservlet = new DispatcherServlet(context);
		ServletRegistration.Dynamic mycustomservlet = servletContext.addServlet("myDispatcherServlet", dispatcherservlet);
		mycustomservlet.setLoadOnStartup(1);
		mycustomservlet.addMapping("/quiz/*");
		
	}

}
