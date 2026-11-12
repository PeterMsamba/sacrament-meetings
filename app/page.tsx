import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
        Sacrament Meeting Planner
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Manage ward meeting agendas, review sacrament programs, and print current or past Sunday programs with ease.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/meetings"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow"
        >
          View Meeting Schedule
        </Link>
        <Link
          href="/meetings/current"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors shadow"
        >
          Current Sunday Program
        </Link>
      </div>
    </main>
  );
}