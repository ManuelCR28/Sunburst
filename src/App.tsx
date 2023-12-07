import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import "./SummaryChartStyles.css";

interface App {
  data: any;
}

const App: React.FC<App> = ({ data }) => {
  const chartRef = useRef<SVGSVGElement>(null);

  console.log(data);

  useEffect(() => {
    if (chartRef.current && data) {
      const width = 928;
      const height = width;
      const radius = width / 10;
      let transitioning = false;

      const arcVisible = (d: any) => {
        return d.y1 <= 6 && d.y0 >= 1 && d.x1 > d.x0;
      };

      const clicked = (event: any, p: any) => {
        console.log("Clicked:", p);

        const targetDepth = p.depth === 0 ? 1 : p.depth;
      
        if (p.children) {
          p.children.forEach((child: any) => {
            child.target = {
              ...child,
              x0: Math.max(0, Math.min(1, (child.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
              x1: Math.max(0, Math.min(1, (child.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
              y0: Math.max(0, child.y0 - targetDepth + 1),
              y1: Math.max(0, child.y1 - targetDepth + 1),
            };
          });
        }
      
        console.log("Hierarchy updated:", p.children);
      }

      const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, 3));

      const format = d3.format(",d");

      const partition = (data: any) => {
        const root = d3.hierarchy(data)
          .sum((d: any) => d.value)
          .sort((a: any, b: any) => b.value - a.value);
        return d3.partition().size([2 * Math.PI, root.height + 1])(root);
      };

      const root = partition(data);
      root.each((d: any) => (d.current = d));

      const arc = d3
        .arc()
        .startAngle((d: any) => d.x0)
        .endAngle((d: any) => d.x1)
        .padAngle((d: any) => Math.min((d.x1 - d.x0) / 2, 0.005))
        .padRadius(radius * 1.5)
        .innerRadius((d: any) => d.y0 * radius)
        .outerRadius((d: any) => Math.max(d.y0 * radius, d.y1 * radius - 1));

      const svg = d3
        .select(chartRef.current)
        .attr("viewBox", [-width / 2, -height / 2, width, width])
        .style("font", "10px sans-serif");

      const tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

      const path = svg
        .append<SVGGElement>("g")
        .selectAll<SVGPathElement, any>("path")
        .data(root.descendants().slice(1))
        .join("path")
        .attr("fill", (d: any) => {
          while (d.depth > 1) d = d.parent;
          return color(d.data.color);
        })
        .attr("fill-opacity", (d: any) =>
          arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0
        )
        .attr("class", "arc")
        .attr("d", (d: any) => arc(d.current))
        .style("cursor", "pointer")
        .on("click", clicked)

        svg.selectAll(".arc")
          .on("mousemove", (event, d:any) => {
            tooltip.style("opacity", 0.9)
              .html(`<strong>${d.data.name}</strong><br/>Value: ${format(d.value)}`)
              .style("left", `${event.pageX}px`)
              .style("top", `${event.pageY}px`);
          })
          .on("mouseout", () => {
            tooltip.style("opacity", 0);
          });




      const text = svg
        .append("g")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .style("user-select", "none")
        .selectAll("text")
        .data(root.descendants())
        .join("text")
        .attr("dy", "0.35em")
        .text((d: any) => {
          if (arcVisible(d.current)) {
            const label = d.data.name;
            const maxLength = Math.abs(d.y1 - d.y0) * radius * 0.1;

            if ((d.y1 - d.y0) * radius > 20 && label.length > maxLength) {
              return label.slice(0, maxLength) + "...";
            } else {
              return label;
            }
          } else {
            return "";
          }
        })
        .attr("text-anchor", (d: any) => {
          return (d.y1 - d.y0) * radius > 20 ? "middle" : (d.x0 > Math.PI ? "end" : "start");
        })
        .attr("transform", (d: any) => {
          const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
          const y = ((d.y0 + d.y1) / 2) * radius;

          if ((d.y1 - d.y0) * radius > 20) {
            return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
          } else {
            return `rotate(${x < Math.PI ? x - 90 : x + 90}) translate(${(d.y0 + d.y1) / 2 * radius},0) rotate(${x < Math.PI ? 0 : 180})`;
          }
        });

    }
  }, [data]);

  return <svg ref={chartRef} />;
};

export default App;
