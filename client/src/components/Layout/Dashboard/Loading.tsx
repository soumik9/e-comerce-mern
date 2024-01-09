import React from 'react'
import { cx } from 'src/hooks/helper';

type Props = {
    height?: boolean;
}

const Loading: React.FC<Props> = ({ height }) => {
    return (
        <div className={cx(
            'f-center',
            height ? '3xl:h-[62vh] lg:h-[50vh] h-[35vh]' : 'h-screen'
        )}
        >
            <span className="loader relative inline-block before:content-['Loading'] before:text-primary lg:before:text-[48px] before:text-[32px] before:tracking-[2px] before:inline-block after:content-[''] after:w-full after:h-[10px] after:absolute after:left-0 after:top-[100%] after:rounded-full"></span>
        </div>
    )
}

export default Loading