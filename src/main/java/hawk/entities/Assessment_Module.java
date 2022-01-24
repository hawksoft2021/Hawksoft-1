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
	@Table(name = "Assessment_Module")
	@EntityListeners(AuditingEntityListener.class)
	@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
	        allowGetters = true)
	public class Assessment_Module {
		@Id
		    @GeneratedValue(strategy = GenerationType.IDENTITY)
		    private Long Id;
		public String getClient_Id() {
			return Client_Id;
		}
		public Long getId() {
			return Id;
		}
		public void setId(Long id) {
			Id = id;
		}
		public String getAssement_Type() {
			return Assement_Type;
		}
		public void setAssement_Type(String assement_Type) {
			Assement_Type = assement_Type;
		}
		public String getTest() {
			return Test;
		}
		public void setTest(String test) {
			Test = test;
		}
		public String getMeasurement() {
			return Measurement;
		}
		public void setMeasurement(String measurement) {
			Measurement = measurement;
		}
		public String getRemarks() {
			return Remarks;
		}
		public void setRemarks(String remarks) {
			Remarks = remarks;
		}
		@Override
		public String toString() {
			return "Assessment_Module [Id=" + Id + ", Client_Id=" + Client_Id + ", Assement_Type=" + Assement_Type
					+ ", Test=" + Test + ", Measurement=" + Measurement + ", Remarks=" + Remarks + ", create_date="
					+ create_date + ", Update_date=" + Update_date + "]";
		}
		public void setClient_Id(String client_Id) {
			Client_Id = client_Id;
		}
		String Client_Id,Assement_Type,Test,Measurement,Remarks;
		public Timestamp getCreate_date() {
			return create_date;
		}
		public void setCreate_date(Timestamp create_date) {
			this.create_date = create_date;
		}
		public Timestamp getUpdate_date() {
			return Update_date;
		}
		public void setUpdate_date(Timestamp update_date) {
			Update_date = update_date;
		}
		Timestamp create_date,Update_date;
	}