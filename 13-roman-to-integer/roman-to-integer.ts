function romanToInt(s: string): number {
    const romanToInt: {[key: string]: number} = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    }
    
    let result: number = 0;
    
    for(let i = 0; i < s.length; i++){
        if(i < s.length - 1 && romanToInt[s[i]] < romanToInt[s[i + 1]]){
            result -= romanToInt[s[i]];
        } else {
            result += romanToInt[s[i]];
        }
    }
    
    return result;
}
