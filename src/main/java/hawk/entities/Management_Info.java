package hawk.entities;

import java.sql.Timestamp;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.annotation.Transient;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Management_Info")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = { "createdAt", "updatedAt" }, allowGetters = true)
public class Management_Info {
	// @Override

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getWeight() {
		return Weight;
	}

	public void setWeight(String weight) {
		Weight = weight;
	}

	public String getPARQ() {
		return PARQ;
	}

	public void setPARQ(String pARQ) {
		PARQ = pARQ;
	}
	  @Transient
 int leave_count;
	public int getLeave_count() {
		return leave_count;
	}

	public void setLeave_count(int leave_count) {
		this.leave_count = leave_count;
	}

	@Override
	public String toString() {
		return "Management_Info [Id=" + Id + ", leave_count=" + leave_count + ", Mobile_No=" + Mobile_No
				+ ", Client_Id=" + Client_Id + ", Client_Name=" + Client_Name + ", Address=" + Address + ", Email="
				+ Email + ", Remarks=" + Remarks + ", Weight=" + Weight + ", Gender=" + Gender + ", PARQ=" + PARQ
				+ ", Client_Review=" + Client_Review + ", DOB=" + DOB + ", Referral_Source=" + Referral_Source
				+ ", Feedback=" + Feedback + ", Referral=" + Referral + ", Work_out_module=" + Work_out_module
				+ ", Body_Type=" + Body_Type + ", Facebook_Id=" + Facebook_Id + ", Instagram_Id=" + Instagram_Id
				+ ", updatedBy=" + updatedBy + ", createdBy=" + createdBy + ", Type=" + Type + ", cus_date=" + cus_date
				+ ", create_Date=" + create_Date + ", Joining_Date=" + Joining_Date + ", update_Date=" + update_Date
				+ ", renewal_Date=" + renewal_Date + ", client_Quick_View=" + client_Quick_View + ", user_pwd="
				+ user_pwd + ", payment_History=" + payment_History + ", assessment_module=" + assessment_module + "]";
	}

	@Column(unique = true)
	String Mobile_No, Client_Id;
	String Client_Name, Address, Email, Remarks, Weight, Gender, PARQ, Client_Review, DOB,
	Referral_Source, Feedback, Referral, Work_out_module, Body_Type, Facebook_Id, Instagram_Id, updatedBy,
			createdBy,Type,cus_date;

	public String getCus_date() {
		return cus_date;
	}

	public void setCus_date(String cus_date) {
		this.cus_date = cus_date;
	}

	public String getType() {
		return Type;
	}

	public void setType(String type) {
		Type = type;
	}

	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	public String getcreatedBy() {
		return createdBy;
	}

	public void setcreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getFacebook_Id() {
		return Facebook_Id;
	}

	public String getWork_out_module() {
		return Work_out_module;
	}

	public String getBody_Type() {
		return Body_Type;
	}

	public void setBody_Type(String body_Type) {
		Body_Type = body_Type;
	}

	public void setWork_out_module(String work_out_module) {
		Work_out_module = work_out_module;
	}

	public void setFacebook_Id(String facebook_Id) {
		Facebook_Id = facebook_Id;
	}

	public String getInstagram_Id() {
		return Instagram_Id;
	}

	public void setInstagram_Id(String instagram_Id) {
		Instagram_Id = instagram_Id;
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

	public String getFeedback() {
		return Feedback;
	}

	public void setFeedback(String feedback) {
		Feedback = feedback;
	}

	Timestamp create_Date, Joining_Date, update_Date,renewal_Date;

	public Timestamp getRenewal_Date() {
		return renewal_Date;
	}

	public void setRenewal_Date(Timestamp renewal_Date) {
		this.renewal_Date = renewal_Date;
	}

	public Timestamp getUpdate_Date() {
		return update_Date;
	}

	public void setUpdate_Date(Timestamp update_Date) {
		this.update_Date = update_Date;
	}

	/**
	 * Management_Info
	 * 
	 * @return the id
	 * 
	 *         public String getClient_Id() { return Client_Id; } /**
	 * @param client_Id the client_Id to set
	 */
	public void setClient_Id(String client_Id) {
		Client_Id = client_Id;
	}

	/**
	 * @return the name
	 */

	/**
	 * @param name the name to set
	 */

	/*
	 * public String get_field_toString() { return
	 * "{'Name':'Name','Address':'Address','Mobile_No':'Mobile_No','Email':'Email','Client_review':'Client_review','Remarks':'Remarks','Injuries':'Injuries','Gender':'Gender','Medications':'Medications','create_Date':'create_Date','DOB':'DOB','Joining_Date':'Joining_Date','Renewal_Date':'Renewal_Date'}";
	 * }
	 */

	/**
	 * @return the address
	 */
	public String getAddress() {
		return Address;
	}

	public String getClient_Name() {
		return Client_Name;
	}

	public void setClient_Name(String client_Name) {
		Client_Name = client_Name;
	}

	public String getClient_Id() {
		return Client_Id;
	}

	/**
	 * @param address the address to set
	 */
	public void setAddress(String address) {
		Address = address;
	}

	/**
	 * @return the mobile_No
	 */
	public String getMobile_No() {
		return Mobile_No;
	}

	/**
	 * @param mobile_No the mobile_No to set
	 */
	public void setMobile_No(String mobile_No) {
		Mobile_No = mobile_No;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return Email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		Email = email;
	}

	/**
	 * @return the client_review
	 */

	/**
	 * @return the remarks
	 */
	public String getRemarks() {
		return Remarks;
	}

	/**
	 * @return the caterogy
	 */

	/**
	 * @return the client_Review
	 */
	public String getClient_Review() {
		return Client_Review;
	}

	/**
	 * @param client_Review the client_Review to set
	 */
	public void setClient_Review(String client_Review) {
		Client_Review = client_Review;
	}

	public void setRemarks(String remarks) {
		Remarks = remarks;
	}

	/**
	 * @return the injuries
	 */
	/**
	 * @return the gender
	 */
	public String getGender() {
		return Gender;
	}

	/**
	 * @param gender the gender to set
	 */
	public void setGender(String gender) {
		Gender = gender;
	}

	public Timestamp getCreate_Date() {
		return create_Date;
	}

	public void setCreate_Date(Timestamp create_Date) {
		this.create_Date = create_Date;
	}

	public Timestamp getJoining_Date() {
		return Joining_Date;
	}

	public void setJoining_Date(Timestamp joining_Date) {
		Joining_Date = joining_Date;
	}

	/**
	 * @return the dOB
	 */
	public String getDOB() {
		return DOB;
	}

	/**
	 * @param dOB the dOB to set
	 */
	public void setDOB(String dOB) {
		DOB = dOB;
	}

	public Client_Quick_View getClient_Quick_View() {
		return client_Quick_View;
	}

	public void setClient_Quick_View(Client_Quick_View client_Quick_View) {
		this.client_Quick_View = client_Quick_View;
	}

	@ManyToOne(cascade = CascadeType.PERSIST)
	Client_Quick_View client_Quick_View;
	String user_pwd;

	public String getUser_pwd() {
		return user_pwd;
	}

	public void setUser_pwd(String user_pwd) {
		this.user_pwd = user_pwd;
	}

	@ManyToOne(cascade = CascadeType.PERSIST)
	Payment_History payment_History;

	@ManyToOne(cascade = CascadeType.ALL)
	Feedback_Info feedback_Info;
	
	public Payment_History getPayment_History() {
		return payment_History;
	}

	public Feedback_Info getFeedback_Info() {
		return feedback_Info;
	}

	public void setFeedback_Info(Feedback_Info feedback_Info) {
		this.feedback_Info = feedback_Info;
	}

	public void setPayment_History(Payment_History payment_History) {
		this.payment_History = payment_History;
	}
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	Workout_Module assessment_module;

	public Workout_Module getAssessment_module() {
		return assessment_module;
	}

	public void setAssessment_module(Workout_Module assessment_module) {
		this.assessment_module = assessment_module;
	}
	

}
