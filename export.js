import { jsPDF } from 'jspdf';
import Papa from 'papaparse';

export const exportToPDF = (data, title) => {
  const doc = new jsPDF();
  doc.text(title, 20, 10);
  
  let yPos = 30;
  data.forEach((item) => {
    Object.entries(item).forEach(([key, value]) => {
      doc.text(`${key}: ${value}`, 20, yPos);
      yPos += 10;
    });
    yPos += 10;
  });

  doc.save(`${title.toLowerCase()}-report.pdf`);
};

export const exportToCSV = (data, filename) => {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  link.href = URL.createObjectURL(blob);
  link.download = `${filename}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
};