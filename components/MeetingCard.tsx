import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {meeting.meetingType} Meeting
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{meeting.date}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        Presided by: {meeting.presiding}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Conducted by: {meeting.conducting}
      </p>
      <Link
        href={`/meetings/${meeting.id}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors"
      >
        View Program
      </Link>
    </div>
  );
}