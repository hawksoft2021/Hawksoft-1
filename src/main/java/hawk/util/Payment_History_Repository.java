package hawk.util;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hawk.entities.Payment_History;
@Repository
public interface Payment_History_Repository extends JpaRepository<Payment_History, Long> {

}

