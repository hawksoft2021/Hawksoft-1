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
@Table(name = "Assement_Information")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class Assement_Information {
	@Override
	public String toString() {
		return "Assement_Information [Id=" + Id + ", Assement_Type=" + Assement_Type + ", Test=" + Test + "]";
	}

	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long Id;
	
	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	String Assement_Type,Test;

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

	Timestamp Create_date;

	public Timestamp getCreate_date() {
		return Create_date;
	}

	public void setCreate_date(Timestamp create_date) {
		Create_date = create_date;
	}
	
}