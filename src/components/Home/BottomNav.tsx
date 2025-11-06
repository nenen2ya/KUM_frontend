import { Menu, TrendingUp, Activity, User } from 'lucide-react';

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="max-w-md mx-auto grid grid-cols-4 py-2">
        <button className="flex flex-col items-center gap-1 py-2 bg-purple-600 text-white">
          <Menu size={20} />
          <span className="text-xs">메뉴</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2 text-gray-400">
          <TrendingUp size={20} />
          <span className="text-xs">종합뉴스</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2 text-gray-400">
          <Activity size={20} />
          <span className="text-xs">주식분석</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2 text-gray-400">
          <User size={20} />
          <span className="text-xs">투자정보</span>
        </button>
      </div>
    </div>
  );
}
