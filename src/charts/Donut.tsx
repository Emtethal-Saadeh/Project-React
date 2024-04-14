import React from 'react'
import { defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import sourceData from "./DataDonut.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const centerTextPlugin = {
  id: 'centerText',
  beforeDraw(chart: { ctx: any; width: any; height: any; }) {
    const { ctx, width, height } = chart;
    ctx.restore();

    const textStyles = [
      { text: '$1,375', fontSize: 15, fontStyle: 'bold', color: 'black', offsetY: 0},
      { text: 'House rent', fontSize: 8, fontStyle: 'italic', color: 'gray', offsetY: 20 }
    ];

    textStyles.forEach((style) => {
      ctx.font = `${style.fontStyle} ${style.fontSize}px sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillStyle = style.color;
      const textX = Math.round(width / 2);
      const textY = Math.round(height / 2) + style.offsetY;
      ctx.fillText(style.text, textX, textY);
    });

    ctx.save();
  }
};

const Donut = () => {
  return (
    <div className="dataCard categoryCard">
        <Doughnut
          data={{
            labels: [],
            datasets: [
              {
                data: sourceData.map((data) => data.value),
                backgroundColor: 
                sourceData.map((data) => data.color),
                borderColor: sourceData.map((data) => data.color),
                offset:20,
                borderRadius: 5,
                
              },
            ],
          }}
          
          plugins={[centerTextPlugin]}
          
          
        />
      </div>
  )
}

export default Donut
