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

	
	@Entity
	@Table(name = "Client_Workout_Info",uniqueConstraints= {@UniqueConstraint(columnNames= {"Client_Id","Create_date"})})
	@EntityListeners(AuditingEntityListener.class)
	@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
	        allowGetters = true)
	public class Client_Workout_Info {

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
		public String getDay() {
			return day;
		}
		public void setDay(String day) {
			this.day = day;
		}
		@Override
		public String toString() {
			return "Client_Workout_Info [Id=" + Id + ", Client_Id=" + Client_Id + ", day=" + day + ", Completion="
					+ Completion + ", Workout=" + Workout + ", Expected=" + Expected + ", Workout_Planner="
					+ Workout_Planner + ", Create_date=" + Create_date + ", Workout_date=" + Workout_date + "]";
		}
	
		public String getCompletion() {
			return Completion;
		}
		public void setCompletion(String completion) {
			Completion = completion;
		}
		public Timestamp getCreate_date() {
			return Create_date;
		}
		public String getWorkout_Planner() {
			return Workout_Planner;
		}
		public void setWorkout_Planner(String workout_Planner) {
			Workout_Planner = workout_Planner;
		}
		public void setCreate_date(Timestamp create_date) {
			Create_date = create_date;
		}
		public String getWorkout() {
			return Workout;
		}
		public void setWorkout(String workout) {
			Workout = workout;
		}
		public String getExpected() {
			return Expected;
		}
		public void setExpected(String expected) {
			Expected = expected;
		}
		public Timestamp getWorkout_date() {
			return Workout_date;
		}
		public void setWorkout_date(Timestamp workout_date) {
			Workout_date = workout_date;
		}
	String Client_Id,day,Completion,Workout,Expected,Workout_Planner;
Timestamp Create_date,Workout_date;
}
