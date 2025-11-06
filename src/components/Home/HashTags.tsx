export function HashTags() {
  const tags = ['#삼성전자', '#SK하이닉스', '#두산에너빌리티', '#NAVI'];

  return (
    <div className="px-4 py-2 flex gap-2 overflow-x-auto">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-sm text-gray-500 whitespace-nowrap"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
