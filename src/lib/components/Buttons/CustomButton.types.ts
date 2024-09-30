export interface CustomButtonProps {
  label: string;
  type: 'button';
  onClick?: (event: MouseEvent) => void;
  className?: string;
}
