package hawk.util;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hawk.entities.Management_Info;

@Repository
public interface Management_Info_Repository extends JpaRepository<Management_Info, Long> {

	@Query(value = "SELECT client.* FROM management_info client WHERE (client_id =:h_client_id or mobile_no =:h_mobile_no) and client_id  is not  null and client_id IN(SELECT client_id FROM client_quick_view WHERE client_Status='Active')  ", nativeQuery = true)
	public Management_Info find_by_search(
			@Param("h_client_id") String h_client_id, @Param("h_mobile_no") String h_mobile_no);

	@Query(value = "SELECT client.* FROM management_info client WHERE (client_id =:h_client_id or mobile_no =:h_mobile_no) and client_id  is not  null and user_pwd=:h_user_pwd  and client_id IN(SELECT client_id FROM client_quick_view WHERE client_Status='Active')", nativeQuery = true)
	public Management_Info find_by_login(@Param("h_user_pwd") String h_client_name,
			@Param("h_client_id") String h_client_id, @Param("h_mobile_no") String h_mobile_no);

	@Query(value = "SELECT client.* FROM management_info client WHERE (client_id =:h_client_id)", nativeQuery = true)
	public Management_Info find_by_client_Id(@Param("h_client_id") String h_client_id);

	@Query(value = "SELECT client.* FROM management_info client WHERE (client_id =:h_client_id)", nativeQuery = true)
	public Management_Info find_by_client_Id_for_active(@Param("h_client_id") String h_client_id);

	@Query(value = "SELECT count(*) FROM management_info client  WHERE (MONTH(create_Date)= MONTH(NOW())) and client_id IN(SELECT client_id FROM client_quick_view WHERE client_Status='Active')", nativeQuery = true)
	public String find_by_conversion();

	@Query(value = "SELECT client.* FROM management_info client WHERE (client_id  is NOT null)  AND  DATEDIFF(CURDATE(),create_date)>31 and client_id IN(SELECT client_id FROM client_quick_view WHERE client_Status='Active')", nativeQuery = true)
	public List<Management_Info> find_by_client_list();
	
	@Query(value = "SELECT id  FROM management_info client WHERE (client_id  is not null ) ORDER BY ID DESC LIMIT 1;", nativeQuery = true)
	public  int find_by_desc();

	@Query(value = "SELECT client.* FROM management_info client WHERE (client_id  is  not null) and client_id IN(SELECT client_id FROM `attendance_info` WHERE DATE(`create_date`) =DATE(:date) GROUP BY client_id)", nativeQuery = true)
	public List<Management_Info> attendance_by_today(@Param("date") String date);
	
	@Query(value = "SELECT client.* FROM management_info client WHERE (client_id  is  not null) and client_id IN(SELECT client_id FROM client_quick_view WHERE client_Status='Active')", nativeQuery = true)
	public List<Management_Info> attendance_by_today();
	

	@Query(value = "SELECT client.* FROM management_info client WHERE (client_id like %:keyword% or client_name like %:keyword% or mobile_no like %:keyword%)", nativeQuery = true)
	public List<Management_Info> search(@Param("keyword") String keyword);
	
	
	
	
	
	
	
	
	
	
	
	
	// @Query(value = "SELECT client.* FROM management_info client WHERE (client_id
	// like %:client_id_keyword% or client_name like %:client_name_keyword% or
	// mobile_no like %:mobile_no_keyword%)", nativeQuery = true)
	// public List<String> search(@Param("client_id_keyword") String
	// keyword,@Param("client_name_keyword") String
	// client_name_keyword,@Param("mobile_no_keyword") String mobile_no_keyword);

}
