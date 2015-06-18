
TrackMan.useModule([TrackMan.Modules.BasicTracking, TrackMan.Modules.SocialMediaTracking], function success(basicTracking) {

    PageTracking.trackPage = function(pageName){
    	if(pageName != null)
    	    		basicTracking(pageName);
    	    	else
    		basicTracking.trackPage();
    }   
});   