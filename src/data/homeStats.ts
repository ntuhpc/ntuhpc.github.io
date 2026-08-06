export type HomeStatIcon = 'trophy' | 'users' | 'globe' | 'calendar';

export interface HomeStat {
  value: string;
  label: string;
  icon: HomeStatIcon;
}

// Update the values here when the verified figures are available.
export const homeStats: HomeStat[] = [
  { value: '27+', label: 'Awards Won Globally', icon: 'trophy' },
  { value: '30+', label: 'Active Members', icon: 'users' },
  { value: '20+', label: 'Competitions Participated', icon: 'globe' },
  { value: '12+', label: 'Years of Excellence', icon: 'calendar' },
];
