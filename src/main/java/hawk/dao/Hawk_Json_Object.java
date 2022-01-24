package hawk.dao;

import java.util.HashMap;

public class Hawk_Json_Object {
String view,user_roll,status;
int count,sessionStatus;
String userName;
HashMap<String,?> visual_object;
String object_list;
public String getStatus() {
	return status;
}
public int getSessionStatus() {
	return sessionStatus;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public void setSessionStatus(int sessionStatus) {
	this.sessionStatus = sessionStatus;
}
public String getObject_list() {
	return object_list;
}
public void setObject_list(String object_list) {
	this.object_list = object_list;
}
public int getCount() {
	return count;
}
public void setCount(int count) {
	this.count = count;
}
public HashMap<String, ?> getVisual_object() {
	return visual_object;
}
public void setVisual_object(HashMap<String, ?> visual_object) {
	this.visual_object = visual_object;
}
public void setStatus(String status) {
	this.status = status;
}
public String getView() {
	return view;
}
public void setView(String view) {
	this.view = view;
}
public String getUser_roll() {
	return user_roll;
}
public void setUser_roll(String user_roll) {
	this.user_roll = user_roll;
}

public Object getData() {
	return data;
}
public void setData(Object data) {
	this.data = data;
}


@Override
public String toString() {
	return "Hawk_Json_Object [view=" + view + ", user_roll=" + user_roll + ", status=" + status + ", count=" + count
			+ ", visual_object=" + visual_object + ", object_list=" + object_list + ", data=" + data
			+ ", suporting_data=" + suporting_data + "]";
}
public Object getSuporting_data() {
	return suporting_data;
}
public void setSuporting_data(Object suporting_data) {
	this.suporting_data = suporting_data;
}


Object data,suporting_data;

}
