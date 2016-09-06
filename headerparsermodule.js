/**********************
 * HEADER PARSER MODULE *
 **********************/

exports.parseHeaders =  function(h){	
	
	try{ 
		return {
                	"ipaddress": h["x-forwarded-for"],
	                "language": (h["accept-language"]).substring(0,2),
			"software": (h['user-agent']).match(/\(([^)]+)\)/)[1]
        	}
	} catch(err){
		return {"error" : "Error in header: " + err}
	}
}
