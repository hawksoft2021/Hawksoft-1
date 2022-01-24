package hawk.util;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hawk.entities.Assessment_Module;

@Repository
public interface Assessment_Module_Repository extends JpaRepository<Assessment_Module, Long> {
	@Query(value = "SELECT client.* FROM assessment_module client WHERE Client_Id=:client_id",nativeQuery = true)
	public List<Assessment_Module> find_Assement_Information_client_id(@Param("client_id") String client_id);
	@Query(value = "SELECT client.* FROM assessment_module client WHERE  client_id=:client_id and create_date > :renewal_date ORDER BY create_date DESC ", nativeQuery = true)
	public List<Assessment_Module> find_Assement_Information_client_id_desc(@Param("client_id") String client_id,@Param("renewal_date")String renewal_date);
	
	
	
}
