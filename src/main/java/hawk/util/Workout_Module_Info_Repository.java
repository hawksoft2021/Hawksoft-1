package hawk.util;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hawk.entities.Workout_Module;
@Repository
public interface Workout_Module_Info_Repository extends JpaRepository<Workout_Module, Long> {

	
    @Query(value = "SELECT client.* FROM workout_module client WHERE (Workout_Planner in (:warm_ups,:Workout_Planner,:stretching) ) GROUP BY Workout_Planner ", nativeQuery = true)
public List<Workout_Module> find_Assement_Information_Workout_Planner(@Param("Workout_Planner") String warm_ups,@Param("warm_ups") String workout_Planner,@Param("stretching") String stretching);

@Query(value = "SELECT client.* FROM workout_module client WHERE (Workout_Planner in (:Workout_Planner) AND client_id IS NULL)  ", nativeQuery = true)
public List<Workout_Module> find_Assement_Information_workout_Planner_base(@Param("Workout_Planner") String Workout_Planner);

@Query(value = "SELECT client.* FROM workout_module client WHERE (Workout_Planner in (:Workout_Planner) )  ", nativeQuery = true)
public List<Workout_Module> find_Assement_Information_Workout_Planner_name(@Param("Workout_Planner") String Workout_Planner);

@Query(value = "SELECT client.* FROM workout_module client WHERE (Workout_Planner in (:planner,:planner1,:planner2))  ", nativeQuery = true)
public List<Workout_Module> find_Assement_Information_Workout_Planner_name(@Param("planner") String planner,@Param("planner1") String planner1,@Param("planner2") String planner2);
@Query(value = "SELECT client.* FROM workout_module client WHERE Workout_Planner in (:Workout_Planner) AND day=:workout_day  ", nativeQuery = true)
public List<Workout_Module> find_Assement_Information_Workout_Planner_day(@Param("Workout_Planner")String warm_ups,@Param("workout_day") String workout_day);

@Query(value = "SELECT client.* FROM workout_module client WHERE"
		+ " Workout_Planner in (:Workout_Planner) AND "
		+ "AND workout in(:workout) AND"
		+ " day in(:day) AND"
		+ " work_group in(:work_group)  AND rep_Time in(:rep_Time) ", nativeQuery = true)
public List<Workout_Module> find_Assement_Information_workout_Planner_base(@Param("Workout_Planner")String workout_Planner,@Param("workout") String workout,@Param("day") String day,@Param("work_group") String work_group,@Param("rep_Time") String rep_Time);







@Query(value = "SELECT client.* FROM workout_module client WHERE (client_module=:client_module) GROUP BY workout_Planner", nativeQuery = true)
public List<Workout_Module> find_Assement_Information_by_client_grouping(@Param("client_module") String client_module);

@Query(value = "SELECT client.* FROM workout_module client GROUP BY workout_planner", nativeQuery = true)
public List<Workout_Module> find_Assement_Information_by_client_grouping();



@Transactional
@Modifying
@Query(value ="DELETE FROM workout_module  WHERE workout_planner IN(:workout_planner_name)", nativeQuery = true)
public void delete_by_workout_planner_data(@Param("workout_planner_name") String workout_planner_name);

}


