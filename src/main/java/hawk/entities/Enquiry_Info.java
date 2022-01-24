package hawk.entities;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Enquiry_Info")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = { "createdAt", "updatedAt" }, allowGetters = true)
public class Enquiry_Info {
	// @Override

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;

	public Long getId() {
		return Id;
	}

	public String getMobile_No() {
		return Mobile_No;
	}

	public void setMobile_No(String mobile_No) {
		Mobile_No = mobile_No;
	}

	public String getClient_Name() {
		return Client_Name;
	}

	public void setClient_Name(String client_Name) {
		Client_Name = client_Name;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getRemarks() {
		return Remarks;
	}

	public void setRemarks(String remarks) {
		Remarks = remarks;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		Gender = gender;
	}

	public String getVisual_Status() {
		return Visual_Status;
	}

	public void setVisual_Status(String visual_Status) {
		Visual_Status = visual_Status;
	}


	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	public String getCreateedBy() {
		return createedBy;
	}

	public void setCreateedBy(String createedBy) {
		this.createedBy = createedBy;
	}

	public String getFollow_Date() {
		return Follow_Date;
	}

	public void setFollow_Date(String follow_Date) {
		Follow_Date = follow_Date;
	}

	@Override
	public String toString() {
		return "Enquiry_Info [Id=" + Id + ", Mobile_No=" + Mobile_No + ", Client_Name=" + Client_Name + ", Address="
				+ Address + ", Email=" + Email + ", Remarks=" + Remarks + ", Gender=" + Gender + ", Visual_Status="
				+ Visual_Status + ", Referral_Source=" + Referral_Source + ", Referral=" + Referral + ", updatedBy="
				+ updatedBy + ", createedBy=" + createedBy + ", Follow_Date=" + Follow_Date + ", Create_Date="
				+ Create_Date + ", Update_Date=" + Update_Date + ", status=" + status + "]";
	}

	public void setId(Long id) {
		Id = id;
	}

	@Column(unique = true)
	String Mobile_No;

	public Timestamp getCreate_Date() {
		return Create_Date;
	}

	public String getReferral_Source() {
		return Referral_Source;
	}

	public void setReferral_Source(String referral_Source) {
		Referral_Source = referral_Source;
	}

	public String getReferral() {
		return Referral;
	}

	public void setReferral(String referral) {
		Referral = referral;
	}

	public void setCreate_Date(Timestamp create_Date) {
		Create_Date = create_Date;
	}

	public Timestamp getUpdate_Date() {
		return Update_Date;
	}

	public void setUpdate_Date(Timestamp update_Date) {
		Update_Date = update_Date;
	}
	
	

	
	String Client_Name, Address, Email, Remarks, Gender, Visual_Status, Referral_Source,Referral,updatedBy, createedBy,
			Follow_Date;

	Timestamp Create_Date, Update_Date;
	int status;

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}



}
