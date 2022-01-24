package hawk.util;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hawk.entities.Hawk_Login;
@Repository
public interface Hawk_Login_Info_Repository extends JpaRepository<Hawk_Login, Long> {
	 @Query(value ="SELECT * FROM hawk_login  WHERE (user_name =:h_user_name and user_pwd =:h_user_pwd) or ( user_pwd =:h_user_pwd and mobile_No =:h_user_name)", nativeQuery = true)
	    public Hawk_Login login(@Param("h_user_name")String h_user_name,@Param("h_user_pwd")String h_user_pwd );
	  	    
}

