
const trig = {
    sin: {
        zero: '0',
        thirtydegrees: '1/2',
        fortyfivedegrees: 'root(2)/2'
        sixtydegrees: 'root(3)/2'
        ninetydegrees: '1'
    },
    cosine: {
        zero: '1',
        thirtydegrees: 'root(3)/2',
        fortyfivedegrees: 'root(2)/2'
        sixtydegrees: '1/2'
        ninetydegrees: '0'
    },
    tangent: {
        zero: '0',
        thirtydegrees: 'root(3)/3',
        fortyfivedegrees: '1'
        sixtydegrees: 'root(3)'
        ninetydegrees: 'undefined'
    }

    
    var i = 0                 

    function trigLoop(i) {         
      setTimeout(function() {   
          
        i++;
        if i = 0 {
            console.log(trig(sin.zero, cosine.zero, tangent.zero))
        }
        if i = 1 {
            console.log(trig(sin.thirtydegrees, cosine.thirtydegrees, tangent.thirtydegrees))
        }    
        if i = 2 {
            console.log(trig(sin.fortyfivedegrees, cosine.fortyfivedegrees, tangent.fortyfivedegrees))
        }         
        if i = 3 {
            console.log(trig(sin.sixtydegrees, cosine.sixtydegrees, tangent.sixtydegrees))
        } 
        if i = 4 {
            console.log(trig(sin.sixtydegrees, cosine.sixtydegrees, tangent.sixtydegrees))
        }                 
        if (i < 5) {           
          myLoop();             
        }                       
      }, 10000)
    }
    
    trigLoop();                   