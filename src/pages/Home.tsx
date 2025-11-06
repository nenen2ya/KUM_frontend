import { useState } from 'react';
import { Header } from '../components/Home/Header';
import { SearchBar } from '../components/Home/SearchBar';
import { HashTags } from '../components/Home/HashTags';
import { PromoBanner } from '../components/Home/PromoBanner';
import { StockSection } from '../components/Home/StockSection';
import { MarketIndices } from '../components/Home/MarketIndices';
import { InvestorTrading } from '../components/Home/InvestorTrading';
import { ShareholderAlert } from '../components/Home/ShareholderAlert';
import { InvestmentNews } from '../components/Home/InvestmentNews';
import { BottomNav } from '../components/Home/BottomNav';

export default function Home() {
  const [activeTab, setActiveTab] = useState('국내');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        <Header />
        
        {/* Tab Navigation */}
        <div className="flex gap-6 px-4 pt-3 pb-2 border-b">
          {['국내', '해외', '상품'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 ${
                activeTab === tab
                  ? 'border-b-2 border-black'
                  : 'text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Hash Tags */}
        <HashTags />

        {/* Promo Banner */}
        <PromoBanner />

        {/* Big Data Stock Section */}
        <StockSection
          title="빅데이터"
          stocks={[
            { rank: 1, name: '삼성전자', price: '99,900', change: -4.77, changePercent: '4.77%' },
            { rank: 2, name: 'SK하이닉스', price: '575,000', change: -1.88, changePercent: '1.88%' },
            { rank: 3, name: '두산에너빌리티', price: '81,700', change: -8.72, changePercent: '8.72%' },
            { rank: 4, name: 'NAVER', price: '275,000', change: 3.00, changePercent: '3.00%' },
            { rank: 5, name: '한화솔루션', price: '28,650', change: -15.24, changePercent: '15.24%' },
          ]}
        />

        {/* Ranking Search Section */}
        <StockSection
          title="순위 검색"
          stocks={[
            { rank: 1, name: '한성크린텍', price: '1,465', change: 29.99, changePercent: '29.99%' },
            { rank: 2, name: '서울바이오시스', price: '2,840', change: 29.98, changePercent: '29.98%' },
            { rank: 3, name: '알파윈스', price: '9,080', change: 29.90, changePercent: '29.90%' },
            { rank: 4, name: '월스푸', price: '2,000', change: 29.87, changePercent: '29.87%' },
            { rank: 5, name: '유투바이오', price: '6,050', change: 29.83, changePercent: '29.83%' },
          ]}
          showTabs={true}
        />

        {/* AI Report Section */}
        <div className="mx-4 my-4 py-3 px-4 bg-white rounded-lg border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-blue-900">👁</span>
            <span className="text-gray-900">AI가 들려주는 리포트</span>
          </div>
          <span className="text-gray-400">›</span>
        </div>

        {/* Market Indices */}
        <MarketIndices />

        {/* Investor Trading */}
        <InvestorTrading />

        {/* Shareholder Alert */}
        <ShareholderAlert />

        {/* Investment News */}
        <InvestmentNews />

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
}
