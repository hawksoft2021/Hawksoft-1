package hawk.entities;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

	/**
	 * @author ABC
	 *
	 */
	@Entity
	@Table(name = "Work_Group", uniqueConstraints={@UniqueConstraint(columnNames = "workout")})
	
	@EntityListeners(AuditingEntityListener.class)
	@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
	        allowGetters = true)
	public class Work_Group {
		Timestamp Create_date=new Timestamp(System.currentTimeMillis()); ;
		public Timestamp getCreate_date() {
			return Create_date;
		}
		public void setCreate_date(Timestamp create_date) {
			if(create_date!=null)
			{	Create_date = create_date;
			}
			else
Create_date =new Timestamp(System.currentTimeMillis());
		
		}


		@Override
		public String toString() {
			return "Work_Group [Create_date=" + Create_date + ", Id=" + Id + ", workout=" + workout + "]";
		}
		public Long getId() {
			return Id;
		}
		public void setId(Long id) {
			Id = id;
		}
		public String getWorkout() {
			return workout;
		}
		public void setWorkout(String workout) {
			this.workout = workout;
		}
	


		@Id
		    @GeneratedValue(strategy = GenerationType.IDENTITY)
		    private Long Id;


	String workout;
	}