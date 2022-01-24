package hawk.entities;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(value = { "createdAt", "updatedAt" }, allowGetters = true)
public class Client_Quick_View {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
	public String getClient_Id() {
		return Client_Id;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public void setClient_Id(String client_id) {
		Client_Id = client_id;
	}

	public String getDuration() {
		return Duration;
	}

	public void setDuration(String duration) {
		Duration = duration;
	}

	public String getClient_Status() {
		return Client_Status;
	}

	public void setClient_Status(String client_Status) {
		if(client_Status==null)
			client_Status="Active";
		Client_Status = client_Status;
	}

	public String getWorkout_Chart() {
		return Workout_Chart;
	}

	public void setWorkout_Chart(String workout_Chart) {
		Workout_Chart = workout_Chart;
	}

	public String getFeedback() {
		return Feedback;
	}

	public void setFeedback(String feedback) {
		Feedback = feedback;
	}

	public String getGoogle_review() {
		return Google_review;
	}

	public void setGoogle_review(String google_review) {
		Google_review = google_review;
	}

	public Timestamp getStart_Date() {
		return Start_Date;
	}

	public Timestamp getEnd_Date() {
		return End_Date;
	}


public void setStart_Date(Timestamp start_Date) {
		Start_Date = start_Date;
	}

	public void setEnd_Date(Timestamp end_Date) {
		End_Date = end_Date;
	}

public String getStretching() {
		return Stretching;
	}

	public void setStretching(String stretching) {
		Stretching = stretching;
	}

	public String getWarm_ups() {
		return Warm_ups;
	}

	public void setWarm_ups(String warm_ups) {
		Warm_ups = warm_ups;
	}

String Client_Id;
String Duration,Client_Status,Workout_Chart,Stretching,Warm_ups,Feedback,Google_review;
Timestamp Start_Date,End_Date,Update_Date;
public Timestamp getUpdate_Date() {
	return Update_Date;
}

public void setUpdate_Date(Timestamp update_Date) {
	Update_Date = update_Date;
}

@Override
public String toString() {
	return "Client_Quick_View [Id=" + Id + ", Client_Id=" + Client_Id + ", Duration=" + Duration + ", Client_Status="
			+ Client_Status + ", Workout_Chart=" + Workout_Chart + ", Stretching=" + Stretching + ", Warm_ups="
			+ Warm_ups + ", Feedback=" + Feedback + ", Google_review=" + Google_review + ", Start_Date=" + Start_Date
			+ ", End_Date=" + End_Date + ", Update_Date=" + Update_Date + "]";
}

}
