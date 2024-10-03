import type { PanelProps } from './PanelProps';

export interface AccordionProps extends PanelProps {
  open: boolean;
  headerColor: 'text-primary-green' | 'text-primary-red';
}
