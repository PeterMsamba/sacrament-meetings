import { redirect } from 'next/navigation';
import { getMeetings } from '@/lib/meetings-db';

export default function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sun) to 6 (Sat)
  const sundayDate = new Date(today);
  sundayDate.setDate(today.getDate() - dayOfWeek);

  // Format as 'YYYY-MM-DD'
  const formattedDate = sundayDate.toISOString().split('T')[0];

  const matchingMeetings = getMeetings(formattedDate);

  if (matchingMeetings.length > 0) {
    redirect(`/meetings/${matchingMeetings[0].id}`);
  }

  // Fallback if no meeting is found for today's Sunday
  redirect('/meetings');
}