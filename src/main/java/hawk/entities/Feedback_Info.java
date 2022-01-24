package hawk.entities;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

	
	@Entity
	@Table(name = "Feedback_Info")
	@EntityListeners(AuditingEntityListener.class)
	@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
	        allowGetters = true)
	public class Feedback_Info {
		@Id
		    @GeneratedValue(strategy = GenerationType.IDENTITY)
		    private Long Id;
	public Long getId() {
			return Id;
		}
		public void setId(Long id) {
			Id = id;
		}
	public String getClient_Id() {
			return Client_Id;
		}
		public void setClient_Id(String client_Id) {
			Client_Id = client_Id;
		}
	String remarks,status,feedback_category, Client_Id;;
public String getFeedback_category() {
		return feedback_category;
	}
	public void setFeedback_category(String feedback_category) {
		this.feedback_category = feedback_category;
	}
Timestamp Create_date,Update_date;
public Timestamp getUpdate_date() {
	return Update_date;
}
public void setUpdate_date(Timestamp update_date) {
	Update_date = update_date;
}
public String getRemarks() {
	return remarks;
}
public void setRemarks(String remarks) {
	this.remarks = remarks;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public Timestamp getCreate_date() {
	return Create_date;
}
public void setCreate_date(Timestamp create_date) {
	Create_date = create_date;
}
@Override
public String toString() {
	return "Feedback_Info [Id=" + Id + ", remarks=" + remarks + ", status=" + status + ", feedback_category="
			+ feedback_category + ", Client_Id=" + Client_Id + ", Create_date=" + Create_date + ", Update_date="
			+ Update_date + "]";
}


}
