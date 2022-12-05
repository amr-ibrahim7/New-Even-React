import React from 'react'
import theme from '../../../../design-system/config';
import { Link } from './style'

export default function NavLinks({navLink,navText}) {
  return (
        <Link href={navLink}>{navText}</Link>
  );
}
