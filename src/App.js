import Header from "./Components/Layout/Header";
import classes from "./App.module.css";
import CV from "./Components/CV/CV";
import "react-tooltip/dist/react-tooltip.css";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <CV id="my-cv" />
      <button className={classes.download} onClick={captureElement}>
        Download CV
      </button>
    </div>
  );
}

const captureElement = () => {
  const cvElement = document.getElementById("my-cv");
  const addDeleteButtons = document.querySelectorAll("#add-delete-btn");

  addDeleteButtons.forEach((button) => {
    button.style.visibility = "hidden";
  });

  html2canvas(cvElement, { useCORS: true }).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    const pdf = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: [canvas.width, canvas.height],
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    let position = 0;

    // Handle overflow by generating multiple pages
    while (position < canvas.height) {
      pdf.addImage(imgData, "JPEG", 0, -position, pdfWidth, pdfHeight);
      position += pdfHeight;
      if (position < canvas.height) {
        pdf.addPage();
      }
    }

    pdf.save("resume.pdf");

    addDeleteButtons.forEach((button) => {
      button.style.visibility = "visible";
    });
  });
};

export default App;
