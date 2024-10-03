import {
  faCheckDouble,
  faClock,
  faExchangeAlt,
  faMessage,
  faShieldAlt,
  faWifi,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { faListNumeric } from '@fortawesome/free-solid-svg-icons/faListNumeric';

export interface CircularItem {
  title: string;
  icon: IconDefinition;
  description: string;
}

export const circularItems: CircularItem[] = [
  {
    title: 'message',
    icon: faMessage,
    description:
      '<strong>ALERTS υπενθυμίσεων προς <u>εργαζόμενους</u> και προς <u>επιχείρηση</u> με το Intime Portal.</strong> </br> Υπενθύμιση στο προσωπικό κινητό του εργαζόμενου για χτύπημα της κάρτας κατά την προσέλευση και αποχώρησή του. Σε όλες τις περιπτώσεις ασυμβατότητας ενεργειών',
  },
  {
    title: 'wifi',
    icon: faWifi,
    description:
      '<strong>Αυτόματη διαβίβαση χτυπημάτων  και επαναδιαβίβαση(εντός 15 λεπτών)</strong>. <br> Σε περίπτωση που εντός 15 λεπτών δεν μπορέσουν να διαβιβαστούν τα χτυπήματα στο ΕΡΓΑΝΗ, γίνεται αυτόματη αποστολή email προς τον ΕΦΚΑ της επιχείρησης με αιτιολογία αδυναμίας διαβίβασης.',
  },
  {
    title: 'clock',
    icon: faClock,
    description:
      '<strong>Διαχείριση Βαρδιών</strong> <br> Εντάσσοντας τους εργαζόμενους σε ομάδες, το λογισμικό προγραμματίζει τα ωράρια εργασίας τους με κυκλικό τρόπο.',
  },
  {
    title: '10',
    icon: faListNumeric,
    description: 'Φύλαξη ιστορικού χτυπημάτων εργαζομένων για τουλάχιστον 10 έτη',
  },
  {
    title: 'shield-star',
    icon: faShieldAlt,
    description: 'Σε συμμόρφωση με τον GDPR, σύννομο με την ελληνική εργατική νομοθεσία.',
  },
  {
    title: 'curved-connector',
    icon: faExchangeAlt,
    description:
      '<strong>Σύνδεση με Μισθοδοσία</strong> <br> Το λογισμικό μπορεί να συνδεθεί με όλα τα προγράμματα μισθοδοσίας της αγοράς με μεταφορά όλων των απαραίτητων στοιχείων (κανονικές ώρες εργασίας, υπερωρία κ.λ.π.)',
  },
  {
    title: 'double-check',
    icon: faCheckDouble,
    description:
      '<strong>"Δυο σε ένα" Ωρομέτρηση και Έλεγχος Πρόσβασης</strong> <br/> Η εφαρμογή υποστηρίζει και τον έλεγχο πρόσβασης με ενεργοποίηση κυπρί ή σειρήνας (χωρίς επιπλέον κόστος αγοράς λογισμικού)',
  },
];
