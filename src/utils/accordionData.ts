// accordionData.ts

import type { PanelProps } from '$lib/components/Accordion/PanelProps';

export const accordionData: PanelProps[] = [
  {
    header: 'Μισθοδοσία & Ωρομέτρηση',
    details: [
      'Η μισθοδοσία και η ωρομέτρηση αν και άρρηκτα συνδεδεμένα, είναι δυο έννοιες διαφορετικές.',
      'Η εφαρμογή της ωρομέτρησης:',
      '-Ελέγχει και παρακολουθεί τις παρουσίες του προσωπικού',
      '-Επεξεργάζεται τα χτυπήματα των εργαζομένων με ανάλυση των ωρών εργασίας τους',
      '-Διαχειρίζεται τις άδειές τους',
      '-Προγραμματίζει τις βάρδιες όπου είναι αναγκαίο και',
      '-Εξάγει τα αποτελέσματα που χρειάζεται η εφαρμογή της μισθοδοσίας.',
    ],
  },
  {
    header: 'Υπέρβαση ωραρίου',
    details: [
      'Πρόωρη προσέλευση ή καθυστέρηση αποχώρησης. Το ΕΡΓΑΝΗ πρέπει να πάρει τα χτυπήματα με ακρίβεια λεπτού και δεν προβλέπεται από το υπουργείο εργασίας ελαστικότητα στο χτύπημα. ',
      'Σε περιπτώσεις επιχειρήσεων με μεγάλο αριθμό εργαζομένων αυτό δεν είναι εφικτό, ακόμα και με περισσότερα από ένα τερματικά. Για να αντιμετωπίσουμε αυτό το πρόβλημα, το λογισμικό στρογγυλοποιεί τα χτυπήματα εισόδου στο προδηλωμένο ωράριο εργασίας παρέχοντας ένα εύλογο χρονικό περιθώριο σύμφωνα με τον νόμο.',
    ],
  },
  {
    header: 'Δεδομένα βάσει της νομοθεσίας',
    details: [
      '15 λεπτά περιθώριο – δήλωση προσέλευσης/αποχώρησης-',
      'Η δήλωση προσέλευσης/αποχώρησης εργαζομένου μπορεί να υποβληθεί με μέγιστο χρόνο καθυστέρησης τα 15 λεπτά. Σε αντίθετη περίπτωση πρέπει να αιτιολογηθεί η εκπρόθεσμη δήλωση με μια από τις δοθείσες επιλογές (Πρόβλημα στα Συστήματα του Εργοδότη ή Πρόβλημα στην Ηλεκτροδότηση/Τηλεπικοινωνίες ή Πρόβλημα σύνδεσης με το Π.Σ ΕΡΓΑΝΗ)',
      '<strong><u>ΠΡΟΣΟΧΗ:</strong></u> Η επαναλαμβανόμενη καθυστέρηση υποβολής δηλώσεων έναρξης & λήξης στο ΕΡΓΑΝΗ, συνιστά αιτία ελέγχου από το ΣΕΠΕ.',
    ],
  },
];
