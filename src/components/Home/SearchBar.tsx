import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="px-4 py-3">
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="종목·테마를 검색해주세요"
          className="flex-1 bg-transparent outline-none text-sm"
        />
      </div>
    </div>
  );
}
