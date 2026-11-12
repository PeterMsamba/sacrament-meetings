import type { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto">
      <div className="text-center border-b pb-6 mb-6 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Sacrament Meeting Program</h2>
        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wide">
          {meeting.meetingType} Meeting — {meeting.date}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <div><strong>Presiding:</strong> {meeting.presiding}</div>
        <div><strong>Conducting:</strong> {meeting.conducting}</div>
      </div>

      <div className="space-y-6 text-gray-800 dark:text-gray-200">
        {/* Opening section */}
        <div>
          <h4 className="font-semibold text-blue-600 dark:text-blue-400 uppercase text-xs tracking-wider mb-2">Opening</h4>
          <ul className="space-y-1">
            <li><strong>Opening Hymn:</strong> #{meeting.openingHymn.number} - {meeting.openingHymn.title}</li>
            <li><strong>Opening Prayer:</strong> {meeting.openingPrayer}</li>
          </ul>
        </div>

        {/* Business */}
        <div>
          <h4 className="font-semibold text-blue-600 dark:text-blue-400 uppercase text-xs tracking-wider mb-2">Ward & Stake Business</h4>
          {meeting.wardBusiness.length > 0 ? (
            <ul className="list-disc list-inside space-y-1">
              {meeting.wardBusiness.map((item, index) => (
                <li key={index}>{item.description}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic text-sm">None</p>
          )}
          {meeting.stakeBusiness && <p className="text-sm font-medium mt-1 text-purple-600">Stake Business Conducted</p>}
        </div>

        {/* Sacrament */}
        <div>
          <h4 className="font-semibold text-blue-600 dark:text-blue-400 uppercase text-xs tracking-wider mb-2">Sacrament</h4>
          <p><strong>Sacrament Hymn:</strong> #{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}</p>
          <p className="text-sm text-gray-500 italic mt-1">Administration of the Sacrament</p>
        </div>

        {/* Speakers */}
        <div>
          <h4 className="font-semibold text-blue-600 dark:text-blue-400 uppercase text-xs tracking-wider mb-2">Speakers & Musical Numbers</h4>
          {meeting.speakers.length > 0 ? (
            <ul className="space-y-2">
              {meeting.speakers.map((speaker, index) => (
                <li key={index} className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                  <span className="font-semibold">{speaker.name}</span>
                  {speaker.type === 'speaker' ? (
                    <span className="text-gray-600 dark:text-gray-400 text-sm block">Topic: {speaker.topic}</span>
                  ) : (
                    <span className="text-blue-500 text-sm block font-medium">Musical Number</span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic text-sm">Fast and Testimony Meeting (No assigned speakers)</p>
          )}
        </div>

        {/* Closing */}
        <div>
          <h4 className="font-semibold text-blue-600 dark:text-blue-400 uppercase text-xs tracking-wider mb-2">Closing</h4>
          <ul className="space-y-1">
            <li><strong>Closing Hymn:</strong> #{meeting.closingHymn.number} - {meeting.closingHymn.title}</li>
            <li><strong>Closing Prayer:</strong> {meeting.closingPrayer}</li>
          </ul>
        </div>

        {/* Announcements */}
        {meeting.announcements && meeting.announcements.length > 0 && (
          <div className="border-t pt-4 dark:border-gray-700">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 uppercase text-xs tracking-wider mb-2">Announcements</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {meeting.announcements.map((announcement, index) => (
                <li key={index}>{announcement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Print Button */}
      <div className="mt-8 text-center print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors shadow"
        >
          Print Program
        </button>
      </div>
    </div>
  );
}