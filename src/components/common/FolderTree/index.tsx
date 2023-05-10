import {
  EyeClosedIcon,
  EyeFilledIcon,
  FileCodeIcon,
  FolderIcon,
} from '@/components/icons';
import React, { useState } from 'react';

const FolderTree = ({ explorer }: any) => {
  const [isExpand, setIsExpand] = useState(false);
  const [visible, setVisible] = useState(true);

  const getIcon = () => {
    if (!explorer.name.includes('.')) {
      return <FolderIcon className='w-6 h-6' />;
    }
    return <FileCodeIcon className='w-6 h-6' />;
  };

  return (
    <section>
      <div className='w-full flex justify-between items-center gap-2'>
        <button
          type='button'
          className='flex flex-grow items-center font-medium gap-2 my-1 text-ellipsis overflow-hidden whitespace-nowrap hover:text-primary_blue '
          onClick={() => setIsExpand(!isExpand)}
        >
          {getIcon()} {explorer.name}
        </button>
        {visible ? (
          <EyeFilledIcon
            onClick={() => setVisible(!visible)}
            className='w-6 h-6 text-inherit'
          />
        ) : (
          <EyeClosedIcon
            onClick={() => setVisible(!visible)}
            className='w-6 h-6 text-inherit'
          />
        )}
      </div>
      <div
        className={`ml-4 ${
          !isExpand ? 'max-h-0' : 'max-h-[1000px]'
        } transition-all ease-in duration-200 overflow-hidden `}
      >
        {!explorer.name.includes('.') &&
          explorer?.children?.map((child: any, index: number) => (
            <FolderTree explorer={child} key={explorer.name + index} />
          ))}
      </div>
    </section>
  );
};

export default FolderTree;
