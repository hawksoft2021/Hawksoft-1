package hawk.util;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hawk.entities.Client_Quick_View;
import hawk.entities.Management_Info;
@Repository
public interface Client_Quick_view_Repository extends JpaRepository<Client_Quick_View, Long> 
{
 @Query(value = "SELECT client.* FROM client_quick_view client WHERE (clientid like %:keyword% or client_name like %:keyword% or mobile_no like %:keyword%)" , nativeQuery = true)
 public List<Management_Info> search(@Param("keyword")String keyword);
 
@Query(value = "SELECT client.*  FROM management_info client ", nativeQuery = true)
public List<Management_Info> all_client();


@Query(value = "SELECT client.* FROM client_quick_view client WHERE (workout_chart in (:warm_ups) or stretching in (:warm_ups) or warm_ups in (:warm_ups)  )", nativeQuery = true)
public List<Client_Quick_View> find_client_Workout_Planner(@Param("warm_ups") String warm_ups);

}

