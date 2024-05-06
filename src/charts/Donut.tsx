/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { transactionsAPI } from '../dashboard/transactions-api';
import { dashboardStore } from '../context/useDateFilterStore';

interface DonutProps {}

interface DonutState {
  options: ApexCharts.ApexOptions;
  series: number[];
  labels: string[];
}

const Donut: React.FC<DonutProps> = () => {
  const { period } = dashboardStore();
  const [chartData, setChartData] = useState<DonutState>({
    options: { labels: [] },
    series: [],
    labels: []
  });

  useEffect(() => {
    const fetchData = () => {
      const mytransactionapi = new transactionsAPI();
      const { categories, amounts } = getChartData(period, mytransactionapi);
      setChartData({
        options: { labels: categories },
        series: amounts,
        labels: categories
      });
    };

    fetchData(); // Fetch data initially

    const unsubscribe = dashboardStore.subscribe(fetchData);

    return () => {
      unsubscribe(); // Cleanup subscription
    };
  }, [period]);

  const getChartData = (period: string, transactionsAPIInstance: transactionsAPI) => {
    let transactions;
    switch (period) {
      case 'today':
        transactions = transactionsAPIInstance.getTransactionsForLast24Hours();
        break;
      case 'month':
        transactions = transactionsAPIInstance.getTransactionsForLastMonth();
        break;
      case 'year':
        transactions = transactionsAPIInstance.getTransactionsForLastYear();
        break;
      default:
        transactions = transactionsAPIInstance.getAllTransactions();
    }

    const categoryMap = new Map<string, number>();
    transactions.forEach((transaction) => {
      const { category, amount } = transaction;
      if (categoryMap.has(category)) {
        categoryMap.set(category, categoryMap.get(category)! + amount);
      } else {
        categoryMap.set(category, amount);
      }
    });

    const categories: string[] = Array.from(categoryMap.keys());
    const amounts: number[] = Array.from(categoryMap.values());

    return { categories, amounts };
  };

  return (
    <div className="donut">
      <Chart options={chartData.options} series={chartData.series} type="donut" width="400" />
    </div>
  );
};

export default Donut;
