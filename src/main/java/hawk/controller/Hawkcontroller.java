package hawk.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Hawkcontroller {
	String base_path="";

    @GetMapping({"/index"})
	    public String index() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
    	return base_path+"admin/hawk_admin_home";
	    }
    @GetMapping({"/"})
    public String login(HttpServletRequest request) {
        return base_path+"admin/login";
    }
    @GetMapping({"/new_client"})
    public String new_client() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/new_client";
    }
    @GetMapping({"/update_client"})
    public String update_client() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"client/client_modification";
    }
    
    @GetMapping({"/enquiry_follow"})
    public String enquiry_follow() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/enquiry_follow";
    }
    @GetMapping({"/friday_challenge"})
    public String friday_challenge() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/friday_challenge";
    }
    @GetMapping({"/view_client_details"})
    public String view_client_details() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/view_client_details";
    }
    
    @GetMapping({"/enquiry_report"})
    public String enquiry_details() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
            return base_path+"admin/enquiry_report";
    }
    
    @GetMapping({"/conversion_rate_report"})
    public String conversion_rate_report() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/conversion_rate_report";
    }
    
    @GetMapping({"/workout_chart_followup_report"})
    public String workout_chart_followup_report() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/workout_chart_followup_report";
    }

    
    @GetMapping({"/insanity_assesment_report"})
    public String follow_report() {
if(HawkRestController.hawk_Login==null)
	return base_path+"admin/login";
else
        return base_path+"admin/insanity_assesment_report";
    }
    
    @GetMapping({"/Conversion_report"})
    public String Conversion_report() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/Conversion_report";
    }
    
    @GetMapping({"/Renewal_report"})
    public String renewal_report() {
        return base_path+"admin/renewal_report";
    }
    
    
    @GetMapping({"/pending_due_report"})
    public String pending_due_report() {
    	System.out.println("pending_due_report ::");
        return base_path+"admin/pending_due_report";
    }
    
    @GetMapping({"/client_report"})
    public String client_report() {
        return base_path+"admin/client_report";
    }
    
    @GetMapping({"/account_management"})
    public String account_management() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/account_management";
    }
    @GetMapping({"/account_management_report"})
    public String account_management_report() {
    	if(HawkRestController.hawk_Login==null)
		return base_path+"admin/login";
	else
        return base_path+"admin/account_management_report";
    }
    @GetMapping({"/revenue_source"})
    public String revenue_source() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/revenue_source";
    }

    @GetMapping({"/assessment_module"})
    public String assement_module() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/assement_module";
    }
    @GetMapping({"/workout_module"})
    public String workout_module() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/workout_module";
    }
    
    @GetMapping({"/insanity_workout_module"})
    public String insanity_workout_module() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/insanity_workout_module";
    }
    @GetMapping({"/workout_module_entry"})
    public String workout_module_entry() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/workout_module_entry";
    }
    
    @GetMapping({"/calendar_report"})
    public String calendar_report() {
        return base_path+"admin/calendar_report";
    }
    @GetMapping({"/client_home"})
    public String hawk_client_home() {
        return base_path+"client/hawk_client_home";
	}
    
    
    
    @GetMapping({"/client_home2"})
    public String hawk_client_home2() {
    	
        return base_path+"client/hawk_client_home2";
	}
    @GetMapping({"/client"})
    public String hawk_client() {
    	
        return base_path+"client/client_login";
	}

    @GetMapping({"/client_quick_view"})
    public String client_quick_view() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/client_quick_view";
	}
    
    @GetMapping({"/feedback_report"})
    public String feedback_report() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/feedback_report";
	}
    
    @GetMapping({"/google_review_report"})
    public String google_review_report() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/google_review_report";
	}
    
    
    @GetMapping({"/client_workout_details"})
    public String client_workout_details() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"client/client_workout_details";
	}
    @GetMapping({"/attendance_report"})
    public String attendance_report() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/attendance_report";

	}
    @GetMapping({"/feedback"})
    public String feedback() {
    	if(HawkRestController.hawk_Login==null)
    		return base_path+"admin/login";
    	else
        return base_path+"admin/feedback";

	}
    


}
