// Show extra fields when selected
document.getElementById("addField").addEventListener("click", () => {
  const selected = document.querySelector("select").value;

  if (selected === "1") document.getElementById("web").hidden = false;
  if (selected === "2") document.getElementById("dob").hidden = false;
  if (selected === "3") document.getElementById("pronouns").hidden = false;
});

// Download vCard
function download() {
  const fname = document.getElementById("fname").value;
  const mname = document.getElementById("mname").value;
  const lname = document.getElementById("lname").value;
  const nname = document.getElementById("nname").value;
  const pronouns = document.getElementById("pronouns").value;
  const phone = document.getElementById("ph").value;
  const email = document.getElementById("eml").value;
  const dob = document.getElementById("dob").value;
  const website = document.getElementById("web").value;

  let vcard = "BEGIN:VCARD\n";
  vcard += "VERSION:3.0\n";
  vcard += `FN:${fname} ${mname} ${lname}\n`;
  vcard += `N:${lname};${fname};${mname};;\n`;
  if (nname) vcard += `NICKNAME:${nname}\n`;
  if (pronouns) vcard += `X-PRONOUNS:${pronouns}\n`;
  if (phone) vcard += `TEL;TYPE=CELL:${phone}\n`;
  if (email) vcard += `EMAIL:${email}\n`;
  if (dob) vcard += `BDAY:${dob}\n`;
  if (website) vcard += `URL:${website}\n`;
  vcard += "END:VCARD";

  const blob = new Blob([vcard], { type: "text/vcard" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${fname || "contact"}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadText() {
  const fname = document.getElementById("fname").value;
  const mname = document.getElementById("mname").value;
  const lname = document.getElementById("lname").value;
  const nname = document.getElementById("nname").value;
  const pronouns = document.getElementById("pronouns").value;
  const phone = document.getElementById("ph").value;
  const email = document.getElementById("eml").value;
  const dob = document.getElementById("dob").value;
  const website = document.getElementById("web").value;

  // Get current date and time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("en-GB", { timeZoneName: "short" });

  let text = `LICENCED BY: Flower_r4sr0\n`;
  text += `CREATED ON: Flower Contact Maker\n`;
  text += `CREATED ON: ${formattedDate}\n\n`;
  text += `FULL NAME:\n`;
  text += `FIRST NAME: ${fname || "N/A"}\n`;
  text += `MIDDLE NAME: ${mname || "N/A"}\n`;
  text += `SURNAME: ${lname || "N/A"}\n`;
  text += `NICKNAME: ${nname || "N/A"}\n`;
  text += `PRONOUNS: ${pronouns || "N/A"}\n`;
  text += `PHONE NUMBER: ${phone || "N/A"}\n`;
  text += `EMAIL: ${email || "N/A"}\n`;
  text += `DATE OF BIRTH: ${dob || "N/A"}\n`;
  text += `WEBSITE: ${website || "N/A"}\n`;

  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${fname || "contact"}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
