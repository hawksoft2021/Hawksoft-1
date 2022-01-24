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
	@Table(name = "Friday_Challenge_Info")
	@EntityListeners(AuditingEntityListener.class)
	@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
	        allowGetters = true)
	public class Friday_Challenge_Info {
		 @Override
		public String toString() {
			return "Friday_Challenge_Info [Id=" + Id + ", WOD=" + WOD + ", Reps_count=" + Reps_count + ", Target_Limit="
					+ Target_Limit + ", Event_date=" + Event_date + ", Create_date=" + Create_date + "]";
		}


		public String getTarget_Limit() {
			return Target_Limit;
		}


		public void setTarget_Limit(String target_Limit) {
			Target_Limit = target_Limit;
		}


		public Timestamp getCreate_date() {
			return Create_date;
		}
		public void setCreate_date(Timestamp create_date) {
			Create_date = create_date;
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
		
		public String getEvent_date() {
			return Event_date;
		}
		public void setEvent_date(String event_date) {
			Event_date = event_date;
		}
		public String getWOD() {
			return WOD;
		}
		public void setWOD(String wOD) {
			WOD = wOD;
		}
		public String getReps_count() {
			return Reps_count;
		}
		public void setReps_count(String reps_count) {
			Reps_count = reps_count;
		}
	String WOD,Reps_count,Target_Limit,Event_date;
Timestamp Create_date;
}
