"use strict";

/* Copy to Clipboard */
let email = "brianvqugale@gmail.com";
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }

  alert("copied to clipboard successfully");
}
let facebook = "Brian-v Ugale";
async function copyFacebook() {
  try {
    await navigator.clipboard.writeText(facebook);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
  alert("copied to clipboard successfully");
}
