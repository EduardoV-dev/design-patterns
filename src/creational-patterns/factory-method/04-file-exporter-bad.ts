// WITHOUT Factory Method: client code chooses which exporter to construct.

type Format = "pdf" | "csv" | "html";

export interface Exporter {
  export(content: string, filename: string): void;
}

export class PdfExporter implements Exporter {
  export(content: string, filename: string): void {
    console.log(`Exporting to PDF ${filename}.pdf: ${content}`);
  }
}

export class CsvExporter implements Exporter {
  export(content: string, filename: string): void {
    console.log(`Exporting to CSV ${filename}.csv: ${content}`);
  }
}

export class HtmlExporter implements Exporter {
  export(content: string, filename: string): void {
    console.log(`Exporting to HTML ${filename}.html: ${content}`);
  }
}

// Central factory function with a switch (violates open/closed)
function createExporter(format: Format): Exporter {
  if (format === "pdf") return new PdfExporter();
  if (format === "csv") return new CsvExporter();
  if (format === "html") return new HtmlExporter();
  throw new Error("Unsupported format");
}

export function exportReport(
  format: Format,
  content: string,
  filename: string,
) {
  const exporter = createExporter(format);
  exporter.export(content, filename);
}

export default function run() {
  // Example usage
  exportReport("pdf", "Sales Q1 numbers", "sales-q1");
  exportReport("csv", "name,amount\nAlice,100", "sales-q1");
  exportReport("html", "<h1>Report</h1>", "sales-q1");
}
