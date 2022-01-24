package hawk.util;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hawk.entities.Client_Friday_Challenge_Info;
@Repository
public interface Client_Friday_Challenge_Info_Repository extends JpaRepository<Client_Friday_Challenge_Info, Long> {
	
	@Query(value = "SELECT client.* FROM client_friday_challenge_info client WHERE (client_Id=:client_Id)", nativeQuery = true)
	public List<Client_Friday_Challenge_Info> find_by_client_id(@Param("client_Id") String client_Id);

	@Query(value = "SELECT client.* FROM client_friday_challenge_info client WHERE `event_date` =:event_date ORDER BY `competition` DESC", nativeQuery = true)
	public List<Client_Friday_Challenge_Info> find_by_date_desc(@Param("event_date") String event_date);
	
	
	@Query(value = "SELECT client.* FROM client_friday_challenge_info client WHERE `event_date` =:event_date ORDER BY `competition` ASC", nativeQuery = true)
	public List<Client_Friday_Challenge_Info> find_by_date_asc(@Param("event_date") String event_date);
	@Transactional
	@Modifying
	@Query(value = "DELETE  FROM client_friday_challenge_info friday  WHERE friday.Client_Id=:client_Id", nativeQuery = true)
	public void delete_by_client_id(@Param("client_Id") String client_Id);

	
}

