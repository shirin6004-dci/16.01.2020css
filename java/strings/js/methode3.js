let str = "hello world"

console.log(str.slice(0 , 5))  // or is same (str.slice(-11 , -6))

console.log(str.substring(0 , 5)) // or str.slice are SAME

console.log(str.substr(6 , 3)) // az khone 6 neshon mide ta 3 khone jolo ~ 

console.log(str.replace("o" , "a")) // replace just first

console.log(str.replace(/o/g , "x")) // replace alle   / ? /g ==== /?/g  or /?/i will replace horofe kochik v bozorg

str2 = "  i hate you , i hate prog , i hate  "
console.log(str2.replace(/hate/g , "love"))


console.log(str.toUpperCase())
console.log(str.toLowerCase())

console.log(str.concat(" " , " fbw5 hallo" , str2)) // join all

let str3 = " shirinuiu@yahoo.com hi "

console.log(str3.trim()) // remove just space **aval v **akhare text

console.log(str3.charAt(2))  // return charachter in welche position you want  gegen **indexOf**
console.log(str3.charCodeAt(2))  // return ASCII CODE