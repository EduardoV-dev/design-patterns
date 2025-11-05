import {
  CsvExporter,
  Exporter,
  HtmlExporter,
  PdfExporter,
} from "./04-file-exporter-bad";

interface ExporterFactory {
  create(): Exporter;
}

class PdfExporterFactory implements ExporterFactory {
  create(): Exporter {
    return new PdfExporter();
  }
}

class CsvExporterFactory implements ExporterFactory {
  create(): Exporter {
    return new CsvExporter();
  }
}

class HtmlExporterFactory implements ExporterFactory {
  create(): Exporter {
    return new HtmlExporter();
  }
}

export function exportReport(
  exporterFactory: ExporterFactory,
  content: string,
  filename: string,
) {
  const exporter = exporterFactory.create();
  exporter.export(content, filename);
}

export default function run() {
  // Example usage
  exportReport(new PdfExporterFactory(), "Sales Q1 numbers", "sales-q1");
  exportReport(new CsvExporterFactory(), "name,amount\nAlice,100", "sales-q1");
  exportReport(new HtmlExporterFactory(), "<h1>Report</h1>", "sales-q1");
}
