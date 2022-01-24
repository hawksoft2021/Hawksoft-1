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
	@Table(name = "Attendance_Info")
	@EntityListeners(AuditingEntityListener.class)
	@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
	        allowGetters = true)
	public class Attendance_Info {
		Timestamp Create_date,In_Time,Out_Time;
		String Client_Id;
		public Timestamp getCreate_date() {
			return Create_date;
		}
		public Timestamp getIn_Time() {
			return In_Time;
		}
		
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long Id;
		@Override
		public String toString() {
			return "Attendance_Info [Create_date=" + Create_date + ", In_Time=" + In_Time + ", Out_Time=" + Out_Time
					+ ", Client_Id=" + Client_Id + "]";
		}
		public void setIn_Time(Timestamp in_Time) {
			In_Time = in_Time;
		}
		public Timestamp getOut_Time() {
			return Out_Time;
		}
		public void setOut_Time(Timestamp out_Time) {
			Out_Time = out_Time;
		}
		public String getClient_Id() {
			return Client_Id;
		}
		public void setClient_Id(String client_Id) {
			Client_Id = client_Id;
		}
		public void setCreate_date(Timestamp create_date) {
			Create_date = create_date;
		}
		
	}