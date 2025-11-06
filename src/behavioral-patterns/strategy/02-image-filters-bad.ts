// A small "bad" example that uses conditionals to choose an image filter.
// Your task: refactor this to use the Strategy pattern.

export type FilterType = "grayscale" | "blur" | "sharpen";

export interface Image {
  // For this exercise we keep Image minimal — just a string representing pixels or path.
  data: string;
}

export function applyGrayscale(img: Image): Image {
  // pretend implementation (just annotate data for visibility)
  return { data: img.data + " | grayscale" };
}

export function applyBlur(img: Image): Image {
  return { data: img.data + " | blur" };
}

export function applySharpen(img: Image): Image {
  return { data: img.data + " | sharpen" };
}

// Single function that picks a filter with if/else (violates open/closed and is hard to test)
export function processImage(filter: FilterType, image: Image): Image {
  if (filter === "grayscale") {
    return applyGrayscale(image);
  }

  if (filter === "blur") {
    return applyBlur(image);
  }

  if (filter === "sharpen") {
    return applySharpen(image);
  }

  throw new Error("Unsupported filter");
}

export default function run() {
  const original: Image = { data: "raw-pixels" };

  console.log(processImage("grayscale", original).data);
  console.log(processImage("blur", original).data);
  console.log(processImage("sharpen", original).data);
}
