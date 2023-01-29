// mot a verifier
let word = "Kayak"

// mot inverse
let reverseWord = ""

// Approche le plus basique avec une boucle on stocke le mot dans un variable et on compare les deux 👈
// On commence par la fin du mot 
for (let i = word.length -1; i >= 0; i--) {
    // pour chaque caractère de word, je vais l'ajoute a reverseWord
    reverseWord += word[i]
    if (word == reserveWord) {
        console.log("C'est un palindrome")
    } else {
        return "Ce n'est pas un palindrome"
    }
}


// Approche utilisant une transformation du string en array 👈
// split est un seprateur de caratère et les mets sous forme de array
// split("") la fonction vide prend lettre par lettre, avec un espace la fonction prend mot par mot 👈🛑
reverseWord = word.split("")
// Tableau inversé grace a reverse
reverseWord = reverseWord.reverse()
// Je reconstitue une string a partir du tabelau
reverseWord = reverseWord.join()

// Vaut la meme chose que les trois ligne du dessus 
reverseWord = word.split("").reverse().join("")
if (word == reserveWord) {
        console.log("C'est un palindrome")
    } else {
        return "Ce n'est pas un palindrome"
}


// Approche avec une fonction 
function isPalindrome (userWord) {
    let reverseUserWord = userWord.split("").reverse().join("")
    if (userWord == reverseUserWord){
        return true
    } else {
        return false
    }
}

const words = ["radar", "test", "ici", "paris", "kayak" ]


// element est une variable temporaire de la function 
words.forEach(function(element){
    //forEach permet de boucler sur un object itérable (comme un tableau)
    //elle prend en param un fonction qui recevra l'element courant du tableau et executera le code en utilisant la valeur de cet element
    console.log(element)
    // Pour appliquer la fonction precedente a notre function avec un petite boucle 
    isPalindrome(element)
})