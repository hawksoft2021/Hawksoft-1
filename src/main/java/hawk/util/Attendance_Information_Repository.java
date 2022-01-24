package hawk.util;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hawk.entities.Attendance_Info;
@Repository
public interface Attendance_Information_Repository extends JpaRepository<Attendance_Info, Long> {
	
/*    @Query(value = "SELECT client.* FROM Attendance_Info client WHERE (Client_Id=:client_Id)", nativeQuery = true)
public List<Attendance_Info> find_Assement_Information_type(@Param("client_Id") String client_Id);

*/


	/*
	 * @Query(value =
	 * "SELECT DISTINCT CAST(in_time AS DATE) AS In_Time  FROM Attendance_Info att  WHERE MONTH(att.In_Time) = MONTH(CURRENT_DATE())AND YEAR(att.In_Time) = YEAR(CURRENT_DATE()) and (Client_Id=:client_Id)"
	 * , nativeQuery = true) public List<?>
	 * find_Assement_Information_type(@Param("client_Id") String client_Id);
	 */

	//@Query(value = "SELECT DISTINCT  CAST(att.in_time AS DATE) AS In_Time FROM Attendance_Info att  WHERE MONTH(att.In_Time) = MONTH(CURRENT_DATE())AND YEAR(att.In_Time) = YEAR(CURRENT_DATE())AND (Client_Id=:client_Id)", nativeQuery = true)
	//public List<?> find_Assement_Information_type(@Param("client_Id") String client_Id);

	@Query(value = "SELECT DISTINCT  CAST(att.in_time AS DATE) AS In_Time FROM attendance_info att  WHERE  (client_id=:client_Id)", nativeQuery = true)
	public List<?> find_Assement_Information_type(@Param("client_Id") String client_Id);

	@Query(value = "SELECT attaendance.* FROM attendance_info attaendance WHERE  (client_Id=:client_Id) ORDER BY `create_date` DESC LIMIT 1", nativeQuery = true)
	public Attendance_Info find_by_client_id(@Param("client_Id") String client_Id);


	@Query(value = " SELECT * FROM `attendance_info` WHERE DATE(`create_date`) =DATE(:date) GROUP BY client_id", nativeQuery = true)
	public List<Attendance_Info> attendance_by_today(@Param("date") String date);
	
	
//	@Query(value = "SELECT * FROM attendance_info WHERE MONTH(create_date)=MONTH(NOW()) AND YEAR(create_date)=YEAR(NOW()) and  (client_Id=:client_Id) ORDER BY `create_date`", nativeQuery = true)
//	public List<Attendance_Info> attendance_by_currentmoth_clientid(@Param("client_Id") String client_Id);
	 
	@Query(value = "SELECT * FROM `attendance_info` WHERE `client_id` =:client_Id ORDER BY id DESC LIMIT 1", nativeQuery = true)
	public  Attendance_Info attendance_by_currentmoth_clientid(@Param("client_Id") String client_Id);






/*
	 * @Query(value =
	 * "SELECT client.* FROM Assement_Information client  ORDER BY Assement_Type DESC "
	 * , nativeQuery = true) public List<Attendance_Info>
	 * find_Assement_Information_all();
	 */

}

