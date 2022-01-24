package hawk.util;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hawk.entities.Calendar_Information;
@Repository
public interface Calendar_Information_Repository extends JpaRepository<Calendar_Information, Long> {
}

