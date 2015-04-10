/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('RadioCloudPortal.MyGlobal', {
    singleton: true,
    
    // Local Grails instance
    url: 'http://127.0.0.1:9090/RadioCloudAppServer/' 
    
    // AWS Grails (run-app) instance
    //url: 'http://54.191.187.164:8080/RadioCloudAppServer/'
    
    
    // AWS Grails (war) instance
    //url: 'http://54.191.187.164:9090/RadioCloudAppServer/'
    
});
