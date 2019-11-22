// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  var matchedElements = [];
  
  function getElements(element) {
    
    // if(element.className === classname) {
    //   matchedElements.push(element);
    // }
    
    if(element.classList){
      for (var i = 0; i < element.classList.length; i++){
        if (element.classList[i] === className){
        matchedElements.push(element);
        break;
      }
     }
    }

    element.childNodes.forEach(element => {
      getElements(element);
    });

  };

  getElements(document.body);

  return matchedElements;

};

