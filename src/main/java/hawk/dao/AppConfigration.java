package hawk.dao;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public abstract  class AppConfigration {

	@Bean
	Testbean getbean() {
		return new Testbean();
	}
}
