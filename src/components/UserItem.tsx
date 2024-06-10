import React from 'react';

// Props の型定義を追加
interface UserItemProps {
  className?: string;
}

// Props を関数コンポーネントに渡す
export default function UserItem({ className = "" }: UserItemProps) {
  return (
    // 外部から渡された className を追加
    <div className={`flex items-center justify-between gap-2 lg:border rounded-[8px] p-2 ${className}`}>
      <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-bold flex items-center justify-center">
        <p>GD</p>
      </div>
      <div className="hidden lg:flex grow flex-col">
        <p className="text-[16px] font-bold">takahiro Ueno</p>
        <p className="text-[12px] text-neutral-500">takahiro0902@gmail.com</p>
      </div>
    </div>
  );
}
