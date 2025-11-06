import { RefreshCw, ChevronRight } from 'lucide-react';

export function InvestorTrading() {
  const data = [
    { name: '코스피', individual: '5,175억', foreign: '11,239억', institution: '5,566억' },
    { name: '코스닥', individual: '1,522억', foreign: '1,360억', institution: '102억' },
    { name: '코스피200', individual: '5,734억', foreign: '10,968억', institution: '5,130억' },
  ];

  return (
    <div className="mx-4 my-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-gray-900">투자자 매매동향</h2>
        <div className="flex items-center gap-2">
          <button className="text-gray-400">
            <RefreshCw size={18} />
          </button>
          <button className="text-gray-400">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-4 bg-gray-50 text-sm text-gray-600 py-2">
          <div></div>
          <div className="text-center">개인</div>
          <div className="text-center">외국인</div>
          <div className="text-center">기관</div>
        </div>

        {/* Table Rows */}
        {data.map((row) => (
          <div key={row.name} className="grid grid-cols-4 py-3 border-t text-sm">
            <div className="pl-3 text-gray-900">{row.name}</div>
            <div className="text-center text-red-500">{row.individual}</div>
            <div className="text-center text-blue-500">{row.foreign}</div>
            <div className="text-center text-red-500">{row.institution}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
