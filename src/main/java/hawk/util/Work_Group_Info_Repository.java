package hawk.util;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import hawk.entities.Work_Group;
@Repository
public interface Work_Group_Info_Repository extends JpaRepository<Work_Group, Long> {


@Query(value = "SELECT  workout1.*  FROM work_group workout1 ", nativeQuery = true)
public List<Work_Group> find_all_workout();

}