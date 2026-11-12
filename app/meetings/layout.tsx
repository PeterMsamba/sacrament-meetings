import Link from 'next/link';

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex gap-4 mb-8 border-b pb-4 dark:border-gray-700">
        <Link
          href="/meetings"
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          All Meetings
        </Link>
        <Link
          href="/meetings/current"
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          Current Sunday
        </Link>
      </div>
      {children}
    </main>
  );
}