const shift = 3; // Shift amount for Caesar Cipher

/**
 * Encrypts the data from the input field and displays the result.
 */
function encryptData() {
    // Get the value from the input field with the ID "dataInput"
    const dataInput = document.getElementById("dataInput").value;
    // Encrypt the input data using the shift value
    const encrypted = shiftText(dataInput, shift);
    // Display the encrypted result in the element with the ID "encryptedOutput"
    document.getElementById("encryptedOutput").textContent = encrypted;
}

/**
 * Decrypts the data from the input field and displays the result.
 */
function decryptData() {
    // Get the value from the input field with the ID "encryptedInput"
    const encryptedInput = document.getElementById("encryptedInput").value;
    // Decrypt the input data using the negative shift value (opposite of encryption shift)
    const decrypted = shiftText(encryptedInput, -shift);
    // Display the decrypted result in the element with the ID "decryptedOutput"
    document.getElementById("decryptedOutput").textContent = decrypted;
}

/**
 * Shifts each character in the text by a given amount (Caesar Cipher).
 * 
 * @param {string} text - The text to be encrypted or decrypted.
 * @param {number} shift - The amount to shift each character (positive for encryption, negative for decryption).
 * @returns {string} - The shifted text.
 */
function shiftText(text, shift) {
    return text
        .split("") // Convert the text into an array of characters
        .map((char) => {
            // Get the Unicode value of the character
            let charCode = char.charCodeAt(0);
            // Check if the character is an uppercase letter
            if (char >= "A" && char <= "Z") {
                return String.fromCharCode(
                    // Shift the character code and wrap around if necessary
                    ((((charCode - 65 + shift) % 26) + 26) % 26) + 65
                );
            // Check if the character is a lowercase letter
            } else if (char >= "a" && char <= "z") {
                return String.fromCharCode(
                    // Shift the character code and wrap around if necessary
                    ((((charCode - 97 + shift) % 26) + 26) % 26) + 97
                );
            } else {
                // Non-alphabetic characters remain unchanged
                return char;
            }
        })
        .join(""); // Convert the array of characters back into a string
}
