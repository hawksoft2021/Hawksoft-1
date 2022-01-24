package hawk.entities;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Hawk_Login")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class Hawk_Login {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
public Long getId() {
	return Id;
}
public void setId(Long id) {
	Id = id;
}
  
@Override
public String toString() {
	return "Hawk_Login [Id=" + Id + ", user_id=" + user_id + ", user_name=" + user_name + ", user_pwd=" + user_pwd
			+ ", user_type=" + user_type + ", mobile_No=" + mobile_No + ", user_group=" + user_group + "]";
}

String user_id,user_name,user_pwd,user_type,mobile_No;
int user_group;
/**
 * @return the user_id
 */
public String getUser_id() {
	return user_id;
}
public int getUser_group() {
	return user_group;
}
public void setUser_group(int user_group) {
	this.user_group = user_group;
}
public String getMobile_No() {
	return mobile_No;
}
public void setMobile_No(String mobile_No) {
	this.mobile_No = mobile_No;
}
/**
 * @param user_id the user_id to set
 */
public void setUser_id(String user_id) {
	this.user_id = user_id;
}
/**
 * @return the user_name
 */
public String getUser_name() {
	return user_name;
}
/**
 * @param user_name the user_name to set
 */
public void setUser_name(String user_name) {
	this.user_name = user_name;
}
/**
 * @return the user_pwd
 */
public String getUser_pwd() {
	return user_pwd;
}
/**
 * @param user_pwd the user_pwd to set
 */
public void setUser_pwd(String user_pwd) {
	this.user_pwd = user_pwd;
}
/**
 * @return the user_type
 */
public String getUser_type() {
	return user_type;
}
/**
 * @param user_type the user_type to set
 */
public void setUser_type(String user_type) {
	this.user_type = user_type;
}
	
	

}
