package hello;

import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
@EnableJpaRepositories("hello")
public class SpringJpaConfiguration {
	  @Bean
	  public DataSource getDataSources() {
	 		DriverManagerDataSource dataSource = new DriverManagerDataSource();
	 		dataSource.setDriverClassName("oracle.jdbc.OracleDriver");
	 		dataSource.setUrl("jdbc:oracle:thin:@localhost:1521:orcl");
	 		dataSource.setUsername("system");
	 		dataSource.setPassword("654321");
	 		return dataSource;
	   }
	 @Bean("entityManagerFactory")
	 LocalContainerEntityManagerFactoryBean EntityManagerFactoryBean() {
	 	LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
	 	factory.setDataSource(getDataSources());
	 	factory.setPackagesToScan("hello");
	 	factory.setJpaProperties(hibernateProperties());
	 	HibernateJpaVendorAdapter adapter = new HibernateJpaVendorAdapter();
	 	factory.setJpaVendorAdapter(adapter);
	 	return factory;
	 }

	 @Bean("transactionManager")
	 public PlatformTransactionManager createTransactionManager() {
	 	JpaTransactionManager transactionManager = new JpaTransactionManager();
	 	transactionManager.setEntityManagerFactory(EntityManagerFactoryBean().getObject());
	 	return transactionManager;
	 }



	 Properties hibernateProperties() {
	 	Properties props = new Properties();
	 	props.setProperty("hibernate.hbm2ddl.auto", "update");
	 	props.setProperty("hibernate.show_sql", "true");
	 	return props;
	 	
	 }
}
