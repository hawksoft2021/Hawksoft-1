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
@Table(name = "Payment_History")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class Payment_History {
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getPackage_Duration() {
		return package_Duration;
	}
	public void setPackage_Duration(String package_Duration) {
		this.package_Duration = package_Duration;
	}
	public String getTarget() {
		return target;
	}
	public void setTarget(String target) {
		this.target = target;
	}
	public Long getTraiff_Amount() {
		return traiff_Amount;
	}
	public void setTraiff_Amount(Long traiff_Amount) {
		this.traiff_Amount = traiff_Amount;
	}
	public Long getDiscount() {
		return discount;
	}
	public void setDiscount(Long discount) {
		this.discount = discount;
	}
	public Long getPaid_Amount() {
		return paid_Amount;
	}
	public Long getDue_Amount() {
		return due_Amount;
	}
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
	
	String client_Id,payment_Type,source_Category,create_By,update_By,category,package_Duration,target,due_Date,extension ;
	Long paid_Amount,due_Amount,traiff_Amount,discount,duePay;
	Timestamp create_Date, update_Date,renewal_Date;
	
	
	public Long getDuePay() {
		return duePay;
	}
	public void setDuePay(Long duePay) {
		this.duePay = duePay;
	}
	public Timestamp getRenewal_Date() {
		return renewal_Date;
	}
	public String getExtension() {
		return extension;
	}
	public void setExtension(String extension) {
		this.extension = extension;
	}
	public String getDue_Date() {
		return due_Date;
	}
	public void setDue_Date(String due_Date) {
		this.due_Date = due_Date;
	}
	public void setRenewal_Date(Timestamp renewal_Date) {
		this.renewal_Date = renewal_Date;
	}
	public void setPaid_Amount(Long paid_Amount) {
		this.paid_Amount = paid_Amount;
	}
	public void setDue_Amount(Long due_Amount) {
		this.due_Amount = due_Amount;
	}
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getClient_Id() {
		return client_Id;
	}
	public void setClient_Id(String client_Id) {
		this.client_Id = client_Id;
	}
	public String getPayment_Type() {
		return payment_Type;
	}
	public void setPayment_Type(String payment_Type) {
		this.payment_Type = payment_Type;
	}
	public String getSource_Category() {
		return source_Category;
	}
	public void setSource_Category(String source_Category) {
		this.source_Category = source_Category;
	}
	public String getCreate_By() {
		return create_By;
	}
	public void setCreate_By(String create_By) {
		this.create_By = create_By;
	}
	public String getUpdate_By() {
		return update_By;
	}
	public void setUpdate_By(String update_By) {
		this.update_By = update_By;
	}
	public Timestamp getCreate_Date() {
		return create_Date;
	}
	public void setCreate_Date(Timestamp create_Date) {
		this.create_Date = create_Date;
	}
	@Override
	public String toString() {
		return "Payment_History [Id=" + Id + ", client_Id=" + client_Id + ", payment_Type=" + payment_Type
				+ ", source_Category=" + source_Category + ", create_By=" + create_By + ", update_By=" + update_By
				+ ", category=" + category + ", package_Duration=" + package_Duration + ", target=" + target
				+ ", due_Date=" + due_Date + ", extension=" + extension + ", paid_Amount=" + paid_Amount
				+ ", due_Amount=" + due_Amount + ", traiff_Amount=" + traiff_Amount + ", discount=" + discount
				+ ", duePay=" + duePay + ", create_Date=" + create_Date + ", update_Date=" + update_Date
				+ ", renewal_Date=" + renewal_Date + "]";
	}
	public Timestamp getUpdate_Date() {
		return update_Date;
	}
	public void setUpdate_Date(Timestamp update_Date) {
		this.update_Date = update_Date;
	}


}
