// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	if(typeof obj === "undefined"){
		return "";
	}

	if(typeof obj === "function" || typeof obj === "undefined"){
		return "";
	}

	if(obj === null){
		return "null";
	}

	if (Array.isArray(obj)){
     var stringArr = [];

     obj.forEach(function(element){
       stringArr.push(stringifyJSON(element));
	    })
	    return "[" + stringArr.toString() + "]";
	  }

     if (typeof obj === "object"){
       var keys = Object.keys(obj);
       var string = "";
       keys.forEach(function(i){
	    if(typeof i === "function" || typeof i === "undefined" || typeof obj[i] === "function" || typeof obj[i] === "undefined"){
		  return "";
	   }
	    else {
          string += stringifyJSON(i) + ':' + stringifyJSON(obj[i]) + ',';
	  }
    })
      return "{" + string.slice(0, string.length -1) + "}"
    }

    if (typeof obj === "string"){
    	return '"' + obj + '"';
    }
   return obj.toString();
 };




