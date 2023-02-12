const caesar = function(text, num) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        if (num < 0) {
            num = num % 26;
            if (charCode >= 65 && charCode <= 90) {
                result += String.fromCharCode(((charCode - 65 - (Math.abs(num) % 26) + 26) % 26) + 65);
                } 
                else if (charCode >= 97 && charCode <= 122) {
                    result += String.fromCharCode(((charCode - 97 - (Math.abs(num) % 26) + 26) % 26) + 97);
                } 
                else {
                result += text.charAt(i);
              }
        }
        else {
            if (charCode >= 65 && charCode <= 90) {
                result += String.fromCharCode(((charCode - 65 + num) % 26) + 65);
              } else if (charCode >= 97 && charCode <= 122) {
                result += String.fromCharCode(((charCode - 97 + num) % 26) + 97);
              } else {
                result += text.charAt(i);
              }
            }
        }
        
      return result;
};

// Do not edit below this line
module.exports = caesar;
