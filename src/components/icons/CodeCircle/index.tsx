import { IIcon } from '@/interfaces';
import React from 'react';

const CodeCircle = ({
  width,
  height,
  fill,
  onClick,
  className,
  id,
  strokeWidth,
}: IIcon) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={'icon icon-tabler icon-tabler-code-circle-2 ' + className}
      id={id}
      width={width || '24'}
      height={height || '24'}
      viewBox='0 0 24 24'
      strokeWidth={strokeWidth || '2'}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      onClick={onClick}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M8.5 13.5l-1.5 -1.5l1.5 -1.5'></path>
      <path d='M15.5 10.5l1.5 1.5l-1.5 1.5'></path>
      <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
      <path d='M13 9.5l-2 5.5'></path>
    </svg>
  );
};

export default CodeCircle;
