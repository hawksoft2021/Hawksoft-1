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
	@Table(name = "Calendar_Information")
	@EntityListeners(AuditingEntityListener.class)
	@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
	        allowGetters = true)
	public class Calendar_Information {
		Timestamp Create_Date;
	
		
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long Id;
		
	public String getEvent_Date() {
			return event_Date;
		}

		public void setEvent_Date(String event_Date) {
			this.event_Date = event_Date;
		}
	String message,title,font_color,backgroundColor,event_Date;

	@Override
	public String toString() {
		return "Calendar_Information [Create_Date=" + Create_Date + ", Id=" + Id + ", message=" + message + ", title="
				+ title + ", font_color=" + font_color + ", backgroundColor=" + backgroundColor + ", event_Date="
				+ event_Date + ", status=" + status + "]";
	}
	int status=0;

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getFont_color() {
		return font_color;
	}

	public void setFont_color(String font_color) {
		this.font_color = font_color;
	}

	public Timestamp getCreate_Date() {
		return Create_Date;
	}

	public void setCreate_Date(Timestamp create_Date) {
		Create_Date = create_Date;
	}

	public String getBackgroundColor() {
		return backgroundColor;
	}

	public void setBackgroundColor(String backgroundColor) {
		this.backgroundColor = backgroundColor;
	}
		
	}