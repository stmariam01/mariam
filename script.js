function toggleBiodata() {
  const sections = document.querySelectorAll(".card");
  const button = document.getElementById("toggleButton");

  const visible = Array.from(sections).some(section => section.style.display !== "none");

  sections.forEach(section => {
    section.style.display = visible ? "none" : "block";
  });

  button.textContent = visible ? "🔁 Tampilkan Biodata" : "🔁 Sembunyikan Biodata";
}
