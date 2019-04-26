(function($) {
    //activate cors support <-- for jQuery 1.5
    jQuery.support.cors = true;
 
    $.corsGET = function(url,callback){
        try{
           jQuery.get(url, callback);
        }catch(e){
            // jQuery get() failed, try IE8 CORS, or use the proxy
            if (jQuery.browser.msie && window.XDomainRequest) {
                // Use Microsoft XDR
                var xdr = new XDomainRequest();
                xdr.open("get", url);
                xdr.onload = function() {
                    callback(this.responseText, 'success');
                };
                xdr.send();
            } else{
                try {
                    // Ancient browser, use our proxy
                    var ancientcallback = function() {
                    var textstatus = 'error';
                    var data = 'error';
 
                    if ((this.readyState == 4)
                        && (this.status == '200')) {
                            textstatus = 'success';
                            data = this.responseText;
                        }
                        callback(data, textstatus);
                    };
 
                    // proxy_xmlhttp is a separate script you'll have to set up
                    request = new proxy_xmlhttp();
                    request.open('GET', url, true);
                    request.onreadystatechange = ancientcallback;
                    request.send();
                } catch(e) {
                    // Could not fetch using the proxy
                    alert('failed !!! ');
                }
            }
        }
    };
 
    $.corsPOST = function(url,data,callback){
        try{
            jQuery.post(url, data, callback);
        }catch(e){
             // jQuery post() failed, try IE8 CORS, or use the proxy
            if (jQuery.browser.msie && window.XDomainRequest) {
                // Use XDR
                var xdr = new XDomainRequest();
                xdr.open("post", url);
                xdr.send(params);
                xdr.onload = function() {
                    callback(xdr.responseText, 'success');
                };
            } else{
                try {
                    // Use the proxy to post the data.
                    request = new proxy_xmlhttp();
                    request.open("POST", url, true);
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    request.send(params);
                } catch(e2) {
                   // could not post using the proxy
                   alert('failed !!! ');
                }
            }
        }
    };
 
})(jQuery);