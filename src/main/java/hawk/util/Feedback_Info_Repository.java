package hawk.util;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hawk.entities.Feedback_Info;
import hawk.entities.Management_Info;
@Repository
public interface Feedback_Info_Repository extends JpaRepository<Feedback_Info, Long> {
	@Query(value = "SELECT feedback.* FROM feedback_info feedback WHERE (client_id =:h_client_id)", nativeQuery = true)
	public List<Feedback_Info> feedback_find_by_client_Id(@Param("h_client_id") String h_client_id);
	
}

