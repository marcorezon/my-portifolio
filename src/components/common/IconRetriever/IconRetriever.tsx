"use client";

import React from "react";

interface IconRetrieverProps {
  iconName: string;
  style?: string;
  width?: number;
  height?: number;
  pathVariant?: string;
  stroke?: string;
  color?: string;
}

export function IconRetriever({
  iconName,
  style = "",
  width = 20,
  height = 20,
  pathVariant = "",
}: IconRetrieverProps) {
  const pathFormatter = `\\images\\${pathVariant}${iconName
    .split(".")[0]
    .split(" ")[0]
    .toLocaleLowerCase()}.svg`;

  const [svgContent, setSvgContent] = React.useState("");

  React.useEffect(() => {
    fetch(pathFormatter)
      .then((response) => response.text())
      .then((data) => setSvgContent(data))
      .catch((err) => console.error("Error fetching SVG:", err));
  }, [pathFormatter]);

  return (
    <div className={style} style={{ width, height }}>
      <div
        dangerouslySetInnerHTML={{
          __html: svgContent.replace(
            "<svg",
            `<svg width=${width} height=${height} length`
          ),
        }}
      />
    </div>
  );
}
