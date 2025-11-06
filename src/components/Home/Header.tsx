import { ChevronLeft, Settings } from 'lucide-react';
import { Badge } from '../ui/badge';

export function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-3">
        <button className="text-gray-400">
          <ChevronLeft size={24} />
        </button>
        <Badge className="bg-purple-600 hover:bg-purple-700">간편</Badge>
        <span className="text-gray-900">간편</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-r from-orange-100 to-orange-50 px-3 py-1.5 rounded-lg flex items-center gap-2">
          <div>
            <div className="text-xs text-gray-500">대페커넥스 가입</div>
            <div className="text-sm text-gray-900">대페커넥스</div>
            <div className="text-sm text-gray-900">신규 하면</div>
          </div>
          <div className="bg-red-600 text-white px-2 py-1 rounded">
            NXT
          </div>
        </div>
        <button className="text-gray-400">
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
}
