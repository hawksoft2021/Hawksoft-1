package hawk.util;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hawk.entities.Assement_Information;
import hawk.entities.Management_Info;
@Repository
public interface Assement_Information_Repository extends JpaRepository<Assement_Information, Long> {
	
    @Query(value = "SELECT client.* FROM assement_information client WHERE (assement_type=:assesment_type)", nativeQuery = true)
public List<Assement_Information> find_Assement_Information_type(@Param("assesment_type") String assesment_type);

@Query(value = "SELECT client.* FROM assement_information client  ORDER BY assement_type DESC ", nativeQuery = true)
public List<Assement_Information> find_Assement_Information_all();


}

