package hawk.util;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hawk.entities.Friday_Challenge_Info;
@Repository
public interface Friday_Challenge_Info_Repository extends JpaRepository<Friday_Challenge_Info, Long> {
	
//	@Query(value = "SELECT client.* FROM friday_challenge_info client WHERE (Event_date=:event_date)", nativeQuery = true)
//	public List<Friday_Challenge_Info> find_Assement_Information_by_client_grouping(@Param("event_date") String event_date);
	
/*	
	@Query(value = "SELECT * FROM `friday_challenge_info` WHERE  DATE(STR_TO_DATE(event_date,'%d/%m/%Y'))>=CURRENT_DATE()  ORDER BY STR_TO_DATE(event_date,'%d/%m/%Y')", nativeQuery = true)
	public List<Friday_Challenge_Info> friday_Challenge_Info_find_by_day();
	
	*/
	
@Query(value = "SELECT * FROM `friday_challenge_info` WHERE CAST(`event_date` AS DATE)=CAST(NOW() AS DATE) AND event_date NOT IN( SELECT event_date FROM `client_friday_challenge_info` WHERE  client_id=:client_id AND CAST(`event_date` AS DATE)=CAST(NOW() AS DATE))", nativeQuery = true)
			public Friday_Challenge_Info friday_Challenge_Info_find_by_day(@Param("client_id") String client_id);
			
		
	
}

