package hawk.util;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hawk.entities.Client_Workout_Info;
@Repository
public interface Client_Workout_Info_Repository extends JpaRepository<Client_Workout_Info, Long> {
	
	/*
	 * @Query(value =
	 * "SELECT client.* FROM client_workout_info client WHERE Client_Id=:client_id and Workout_Planner=:workout_Planner ORDER BY Create_date DESC "
	 * , nativeQuery = true) public List<Client_Workout_Info>
	 * findby_Workout_Planner(@Param("client_id") String
	 * client_id,@Param("workout_Planner") String workout_Planner);
	 */
	  
	  
	  
	  
	  @Query(value =" SELECT client.* FROM client_workout_info client WHERE create_date= (SELECT MAX(create_date) FROM client_workout_info WHERE client_id=:client_id AND workout_planner=:workout_Planner) AND TIMESTAMPDIFF(HOUR,create_date,NOW())>10", nativeQuery = true)
	 public List<Client_Workout_Info> findby_Workout_Planner(@Param("client_id") String client_id,@Param("workout_Planner") String workout_Planner);

	  @Query(value =" SELECT client.* FROM client_workout_info client WHERE client_id=:client_id ORDER BY create_date", nativeQuery = true)
		 public List<Client_Workout_Info> findby_clientId(@Param("client_id") String client_id);

	 
	  @Query(value =" SELECT client.* FROM client_workout_info client WHERE  client_id=:client_id AND workout_planner=:workout_Planner ", nativeQuery = true)
	 public List<Client_Workout_Info> findby_Workout_Planner_status(@Param("client_id") String client_id,@Param("workout_Planner") String workout_Planner);

	 
	  @Query(value =" SELECT client.* FROM client_workout_info client WHERE  client_id=:client_id AND workout_planner=:workout_Planner ORDER BY create_date DESC LIMIT 1 ", nativeQuery = true)
	 public  Client_Workout_Info findby_Client_Workout_List(@Param("client_id") String client_id,@Param("workout_Planner") String workout_Planner);

	 
	  
	  @Transactional
	  @Modifying
		@Query(value = "DELETE  FROM client_workout_info workout  WHERE workout.client_id=:client_Id", nativeQuery = true)
		public void delete_by_client_id(@Param("client_Id") String client_Id);


}

