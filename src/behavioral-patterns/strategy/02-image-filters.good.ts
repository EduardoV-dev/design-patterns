export type FilterType = "grayscale" | "blur" | "sharpen";

export interface Image {
  data: string;
}

interface FilterStrategy {
  applyFilter(img: Image): Image;
}

class GrayscaleStrategy implements FilterStrategy {
  applyFilter(img: Image): Image {
    return { data: img.data + " | grayscale" };
  }
}

class BlurStrategy implements FilterStrategy {
  applyFilter(img: Image): Image {
    return { data: img.data + " | blur" };
  }
}

class SharpenStrategy implements FilterStrategy {
  applyFilter(img: Image): Image {
    return { data: img.data + " | sharpen" };
  }
}

class FilterContext {
  constructor(private strategy: FilterStrategy) {}

  setFilterStrategy(strategy: FilterStrategy) {
    this.strategy = strategy;
  }

  applyFilter(img: Image) {
    return this.strategy.applyFilter(img);
  }
}

export default function run() {
  const original: Image = { data: "raw-pixels" };

  const ctx = new FilterContext(new GrayscaleStrategy());
  console.log(ctx.applyFilter(original).data);

  ctx.setFilterStrategy(new BlurStrategy());
  console.log(ctx.applyFilter(original).data);

  ctx.setFilterStrategy(new SharpenStrategy());
  console.log(ctx.applyFilter(original).data);
}
