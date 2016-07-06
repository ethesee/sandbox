    var Epromise = function(){
	    this.resolved = false;
	    this.rejected = false;
	    this.okCallback = function() {};
	    this.koCallback = function(){};
	}

	Epromise.prototype.then = function(callback){
	    if (this.resolved){
	        callback();
	    }else{
	        this.okCallback = callback;
	    }
	}

	Epromise.prototype.fail = function(callback){
	    if (this.rejected){
	        callback();
	    }else{
	        this.koCallback = callback;
	    }
	}
	
	Epromise.prototype.resolve = function(retval){
	    
        this.resolved = true;
        this.okCallback(retval);
	    
	}

	Epromise.prototype.reject = function(retval){
	    
        this.rejected = true;
        this.koCallback(retval);
	    
	}

