import * as Features from '$lib/assets/features';
import type { FeatureCardProps } from './Feature.types';

export const features: FeatureCardProps[] = [
  {
    imageUrl: Features.ergani,
    title: Features.ergani,
    description: 'Σε σύνδεση με το ΕΡΓΑΝΗ ΙΙ για την υλοποίηση της ψηφιακής  κάρτας εργασίας',
  },
  {
    imageUrl: Features.alert,
    title: Features.alert,
    description: 'Δικλείδες ασφαλείας Αυτόματες υπενθυμίσεις ALERTS',
  },
  {
    imageUrl: Features.hikvision,
    title: Features.hikvision,
    description: ' Aπευθείας ΣΥΝΔΕΣΗ με τερματικά των εταιρειών ZKTeco και HIKVISION ',
  },
  {
    imageUrl: Features.intimelogo,
    title: Features.intimelogo,
    description: 'Πλήθος ΠΑΡΑΜΕΤΡΟΠΟΙΗΣΕΩΝ για προστασία της επιχείρησης από ανθρώπινο λάθος',
  },
  {
    imageUrl: Features.setting19,
    title: Features.setting19,
    description: ' ΕΙΔΟΠΟΙΗΣΕΙΣ σε κάθε περίπτωση παραβίασης ωραρίου ή μη  επιτρεπτής  ενέργειας ',
  },
];
