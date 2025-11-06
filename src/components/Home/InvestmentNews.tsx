import { RefreshCw, ChevronRight, Edit3 } from 'lucide-react';
import { useState } from 'react';

export function InvestmentNews() {
  const [activeTab, setActiveTab] = useState('기업/산업분석');

  const newsItems = [
    { title: '(엔비스포트) 개인은 증거인 없다', source: '엔비스포트', date: '11/05' },
    { title: '(대주건설) 지속되는 해외 수주 기대 부담', source: '대주건설', date: '11/05' },
    { title: '(한미건설) \'26년 실적 일부와 바쁜한 현진 출품 것', source: '한미건설', date: '11/05' },
    { title: '(SK이노베이션) 정유 증산의 실적 개선', source: 'SK이노베이션', date: '11/05' },
    { title: '(콜러건업) 스럽더스 편액증 개선 중', source: '콜러건업', date: '11/05' },
  ];

  return (
    <div className="mx-4 my-4 mb-20">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-gray-900">투자정보</h2>
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
      <div className="flex gap-2 mb-4 border-b">
        {['기업/산업분석', '시황(데일리)', '단기투자'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 text-sm ${
              activeTab === tab
                ? 'border-b-2 border-indigo-950 text-gray-900'
                : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* News List */}
      <div className="space-y-3">
        {newsItems.map((item, index) => (
          <div key={index} className="py-2 border-b last:border-b-0">
            <div className="text-sm text-gray-900 mb-1">{item.title}</div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-pink-600">{item.source}</span>
              <span className="text-gray-400">{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Write Button */}
      <button className="w-full mt-6 py-3 border rounded-lg flex items-center justify-center gap-2 text-gray-600">
        <Edit3 size={16} />
        <span>글 편집</span>
      </button>
    </div>
  );
}
