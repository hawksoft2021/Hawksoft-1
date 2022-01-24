package hawk.util;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hawk.entities.Enquiry_Info;

@Repository
public interface Enquiry_Info_Repository extends JpaRepository<Enquiry_Info, Long> {
	@Query(value = "SELECT client.* FROM enquiry_info client   WHERE (mobile_No =:mobile)", nativeQuery = true)
	public Enquiry_Info find_by_mobile(@Param("mobile") String mobile);
	//@Query(value = "SELECT client.* FROM enquiry_info client  WHERE (MONTH(create_date)= MONTH(NOW()) AND status=1)", nativeQuery = true)
	@Query(value = "SELECT client.* FROM enquiry_info client  WHERE status=1 and  NOW() BETWEEN STR_TO_DATE(`follow_date`,'%d/%m/%Y') AND DATE_ADD(STR_TO_DATE(`follow_date`,'%d/%m/%Y'), INTERVAL 7 DAY)", nativeQuery = true)
	public List<Enquiry_Info> find_by_follow();
	@Query(value = "SELECT client.* FROM enquiry_info client  WHERE (status =1)",nativeQuery = true)
	public List<Enquiry_Info> find_by_enquiry();

}


