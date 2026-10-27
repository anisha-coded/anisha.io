import * as React from "react";

const Image = React.forwardRef(({ alt = "", ...props }, ref) => (
  <img ref={ref} alt={alt} {...props} />
));

Image.displayName = "Image";

export { Image };
