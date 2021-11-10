var isIsomorphic = function(s, t) {
	
	s = s.split("")
	t = t.split("")
	
	const resultS = [];
	const resultT = [];
	
    for(let i = 0; i < s.length; i++){
        
		if (resultS.indexOf(s[i]) >= 0) {
			s[i] = resultS.indexOf(s[i])
		
		} else {
			resultS.push(s[i])
			s[i] = resultS.length
			
			
		}
		
		if (resultT.indexOf(t[i]) >= 0) {
			t[i] = resultT.indexOf(t[i])
		} else {
			resultT.push(t[i])
			t[i] = resultT.length
			
			
		}
    }
    
	for(let j = 0; j < s.length; j++){
		const result = s[j] - t[j]
		if(result != 0){
			return false
		}
	}
	
	return true
	
    
};


console.log(isIsomorphic("bccbc", "adaad"))