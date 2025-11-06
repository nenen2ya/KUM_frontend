import { RefreshCw, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Stock {
  rank: number;
  name: string;
  price: string;
  change: number;
  changePercent: string;
}

interface StockSectionProps {
  title: string;
  stocks: Stock[];
  showTabs?: boolean;
}

export function StockSection({ title, stocks, showTabs = false }: StockSectionProps) {
  const [activeTab, setActiveTab] = useState('실시간 조회');

  return (
    <div className="mx-4 my-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-gray-900">{title}</h2>
        <div className="flex items-center gap-2">
          <button className="text-gray-400">
            <RefreshCw size={18} />
          </button>
          <button className="text-gray-400">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      {showTabs && (
        <div className="flex gap-2 mb-3">
          {['실시간 조회', '조회수 급등', '대비 상위', '거래 상위'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded text-sm ${
                activeTab === tab
                  ? 'bg-indigo-950 text-white'
                  : 'bg-white text-gray-500 border'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Stock List */}
      <div className="space-y-2">
        {stocks.map((stock) => (
          <div key={stock.rank} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 w-4">{stock.rank}</span>
              <span className="text-gray-900">{stock.name}</span>
            </div>
            <div className="flex items-center gap-3 text-right">
              <div>
                <div className={`${stock.change > 0 ? 'text-red-500' : 'text-blue-500'}`}>
                  {stock.price.toLocaleString()}
                </div>
              </div>
              <div className="w-12">
                <div className={`text-sm ${stock.change > 0 ? 'text-red-500' : 'text-blue-500'}`}>
                  {stock.change > 0 ? '▲' : '▼'}
                </div>
              </div>
              <div className={`text-sm w-16 ${stock.change > 0 ? 'text-red-500' : 'text-blue-500'}`}>
                {stock.changePercent}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
