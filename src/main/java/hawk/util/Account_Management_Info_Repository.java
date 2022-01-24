package hawk.util;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hawk.entities.Account_Management;
@Repository
public interface Account_Management_Info_Repository extends JpaRepository<Account_Management, Long> {

}

