import { ChevronRight } from 'lucide-react';

export function MarketIndices() {
  return (
    <div className="mx-4 my-4 p-4 bg-white rounded-lg border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-900">지수 종합</h2>
        <ChevronRight size={18} className="text-gray-400" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* KOSPI */}
        <div>
          <div className="text-sm text-gray-500 mb-1">코스피</div>
          <div className="text-red-500 text-2xl mb-1">4,018.10</div>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-red-500">▼ 13.68</span>
            <span className="text-red-500">0.34%</span>
          </div>
          <div className="text-sm text-gray-500 mt-2 mb-1">다우존스 11/5</div>
          <div className="text-red-500">47,311.00</div>
          <div className="flex items-center gap-1 text-sm text-red-500">
            <span>▼ 225.76</span>
            <span>0.48%</span>
          </div>
        </div>

        {/* KOSDAQ */}
        <div>
          <div className="text-sm text-gray-500 mb-1">코스닥</div>
          <div className="text-red-500 text-2xl mb-1">902.34</div>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-red-500">▼ 0.45</span>
            <span className="text-red-500">0.05%</span>
          </div>
          <div className="text-sm text-gray-500 mt-2 mb-1">나스닥 11/5</div>
          <div className="text-blue-500">23,499.80</div>
          <div className="flex items-center gap-1 text-sm text-blue-500">
            <span>▲ 151.16</span>
            <span>0.65%</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        <div className="w-2 h-2 rounded-full bg-purple-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}
