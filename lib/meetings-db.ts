import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },
  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Davis',
    openingHymn: { number: 136, title: 'I Know That My Redeemer Lives' },
    openingPrayer: 'Brother Johnson',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
    speakers: [], // Fast and testimony meeting has no assigned speakers
    closingHymn: { number: 249, title: 'Called to Serve' },
    closingPrayer: 'Sister Smith',
    announcements: ['Stake Conference next weekend']
  },
  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 67, title: 'Glory to God on High' },
    openingPrayer: 'Brother Thomas',
    wardBusiness: [{ description: 'Release of Sunday School presidency' }],
    stakeBusiness: false,
    sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
    speakers: [
      { name: 'Brother White', topic: 'Following the Prophet', type: 'speaker' },
      { name: 'Sister Green', topic: 'Personal Revelation', type: 'speaker' }
    ],
    closingHymn: { number: 152, title: 'God Be With You Till We Meet Again' },
    closingPrayer: 'Sister Taylor',
    announcements: ['Youth activity on Wednesday at 6 PM']
  },
  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Davis',
    openingHymn: { number: 30, title: 'Come, Let Us Anew' },
    openingPrayer: 'Sister Anderson',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 178, title: 'O Lord of Hosts' },
    speakers: [
      { name: 'Brother Martin', topic: 'Missionary Work', type: 'speaker' },
      { name: 'Sister Clark', topic: 'Temple Attendance', type: 'speaker' }
    ],
    closingHymn: { number: 270, title: 'I Need Thee Every Hour' },
    closingPrayer: 'Brother Lee',
    announcements: ['Fast Sunday next week']
  },
  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'stake',
    presiding: 'Stake President',
    conducting: 'First Counselor',
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Brother Martinez',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 174, title: 'While of These Emblems We Partake' },
    speakers: [
      { name: 'Stake High Councilor', topic: 'Covenant Keeping', type: 'speaker' },
      { name: 'Stake President', topic: 'Zion Building', type: 'speaker' }
    ],
    closingHymn: { number: 304, title: 'God Be With You Till We Meet Again' },
    closingPrayer: 'Sister White',
    announcements: ['Stake Leadership Training on Tuesday']
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}