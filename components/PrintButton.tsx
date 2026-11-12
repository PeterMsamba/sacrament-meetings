'use client';

export default function PrintButton() {
  return (
    <div className="mt-8 text-center print:hidden">
      <button
        onClick={() => window.print()}
        className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors shadow"
      >
        Print Program
      </button>
    </div>
  );
}