import { ChevronRight } from 'lucide-react';

export function ShareholderAlert() {
  return (
    <div className="mx-4 my-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-gray-900">주주알림</h2>
        <ChevronRight size={18} className="text-gray-400" />
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <span className="text-xl">💡</span>
          <div className="flex-1 text-sm">
            <span className="text-gray-700">최근 주주님께 도착한 알림을 확인하세요.</span>
            <br />
            <span className="text-gray-700">보유하신 </span>
            <span className="text-pink-600">27종목</span>
            <span className="text-gray-700">에 새소식이 있습니다.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
