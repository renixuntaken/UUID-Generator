document.getElementById("generate").addEventListener("click", () => {
  const uuid = generateUUID();
  document.getElementById("uuid").textContent = uuid;
});

document.getElementById("copy").addEventListener("click", () => {
  const uuidText = document.getElementById("uuid").textContent;
  if (uuidText && uuidText !== "Your UUID will appear here") {
    navigator.clipboard.writeText(uuidText).then(() => {
      alert("UUID copied to clipboard!");
    });
  } else {
    alert("No UUID to copy!");
  }
});

function generateUUID() {
  // Generate a UUID (RFC 4122 version 4)
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
