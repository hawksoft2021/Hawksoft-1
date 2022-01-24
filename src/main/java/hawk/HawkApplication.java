package hawk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class HawkApplication extends SpringBootServletInitializer {
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	      return application.sources(HawkApplication.class);

	   }
	public static void main(String[] args) {
		SpringApplication.run(HawkApplication.class, args);
	}

}
