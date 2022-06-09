import { FC } from 'react';
import './customlabel.css';

export interface CustomLabelProps {
  /**
   * Is this the principal call to action on the page?bbb
   */
  label: string;
  /**
   * Is this the principal call to action on the page?bbb
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Is this the principal call to action on the page?bbb
   */
  capitalize?: boolean;
  color?: 'default' | 'primary' | 'secondary' | 'tertiary';
  textColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const CustomLabel: FC<CustomLabelProps> = ({
  label = 'Label example',
  size = 'normal',
  capitalize = false,
  color = 'default',
  textColor,
  ...props
}) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: textColor }}>
      {capitalize ? label.toUpperCase() : label}
    </span>
  );
};