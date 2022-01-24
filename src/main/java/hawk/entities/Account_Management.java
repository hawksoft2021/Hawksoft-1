package hawk.entities;

import java.sql.Date;
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
	@Table(name = "Account_Management")
	@EntityListeners(AuditingEntityListener.class)
	@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
	        allowGetters = true)
	public class Account_Management {
		@Id
		    @GeneratedValue(strategy = GenerationType.IDENTITY)
		    private Long Id;
	@Override
	public String toString() {
		return "Account_Management [Id=" + Id + ", Category=" + Category + ", Mode=" + Mode + ", Remarks=" + Remarks
				+ ", Payment_Type=" + Payment_Type + ", create_date=" + create_date + ", Update_date=" + Update_date
				+ ", Amount=" + Amount + "]";
	}
	String Category,Mode,Remarks,Payment_Type,createdBy;
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	Timestamp create_date,Update_date;
	Long Amount;
	public String getPayment_Type() {
		if(this.Payment_Type==null||this.Payment_Type.equals("null"))
			Payment_Type="-";
		return Payment_Type;
	}
	public void setPayment_Type(String payment_Type) {
		if(payment_Type==null||payment_Type.equals("null"))
			payment_Type="-";
		Payment_Type = payment_Type;
	}
	public String getCategory() {
		return Category;
	}
	public Long getAmount() {
		return Amount;
	}
	public void setAmount(Long amount) {
		Amount = amount;
	}
	public void setCategory(String category) {
		Category = category;
	}
	public String getMode() {
		return Mode;
	}
	public void setMode(String mode) {
		Mode = mode;
	}
	public String getRemarks() {
		return Remarks;
	}
	public void setRemarks(String remarks) {
		Remarks = remarks;
	}
	public Timestamp getCreate_date() {
		return create_date;
	}
	public void setCreate_date(Timestamp now) {
		this.create_date = now;
	}
	public Timestamp getUpdate_date() {
		return Update_date;
	}
	public void setUpdate_date(Timestamp update_date) {
		Update_date = update_date;
	}
	}