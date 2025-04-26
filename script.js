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
