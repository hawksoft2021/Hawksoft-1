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

	/**
	 * @author ABC
	 *
	 */
	@Entity	

	@Table(name="Workout_Module")
	
	
	
	@EntityListeners(AuditingEntityListener.class)
	@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, allowGetters = true)
	public class Workout_Module {
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
		public String getDay() {
			return day;
		}
		public Long getId() {
			return Id;
		}
		public void setId(Long id) {
			Id = id;
		}
	
		public void setDay(String day) {
			this.day = day;
		}
		
		public String getWorkout() {
			return workout;
		}
		public void setWorkout(String workout) {
			this.workout = workout;
		}

		@Override
		public String toString() {
			return "Workout_Module [Create_date=" + Create_date + ", Id=" + Id + ", workout_Planner=" + workout_Planner
					+ ", workout=" + workout + ", day=" + day + ", work_group=" + work_group + ", rep_Time=" + rep_Time
					+ ", client_module=" + client_module + ", client_id=" + client_id + ", clone_id=" + clone_id
					+ ", clone_status=" + clone_status + "]";
		}

		@Id
		    @GeneratedValue(strategy = GenerationType.IDENTITY)
		    private Long Id;
	public String getWork_group() {
			return work_group;
		}
		public void setWork_group(String work_group) {
			this.work_group = work_group;
		}
	public String getRep_Time() {
			return rep_Time;
		}
		public void setRep_Time(String rep_Time) {
			this.rep_Time = rep_Time;
		}

	public String getClient_module() {
			return client_module;
		}
		public void setClient_module(String client_module) {
			this.client_module = client_module;
		}
		
		public void setWorkout_Planner(String workout_Planner) {
			this.workout_Planner = workout_Planner;
		}

	public String getClient_id() {
			return client_id;
		}
		public void setClient_id(String client_id) {
			if(client_id==null)
				client_id="0";
			else
			this.client_id = client_id;
		}
		
		public Long getClone_id() {
			return clone_id;
		}
		public void setClone_id(Long clone_id) {
			if(clone_id==null)
				clone_id=(long) 0;
			else
			this.clone_id = clone_id;
		}
		public String getClone_status() {
			return clone_status;
		}
		public void setClone_status(String clone_status) {
			if(clone_status==null)
				clone_status="0";
			else
			this.clone_status = clone_status;
		}
Long clone_id;
	String workout_Planner,workout,day,work_group,rep_Time,client_module,client_id,clone_status;
	public String getWorkout_Planner() {
		return workout_Planner;
	}
	}