import Image from 'next/image';
import React from 'react'
import { AiOutlineUpload } from 'react-icons/ai'
import { cx } from 'src/hooks/helper';

type Props = {
    demoImgSrc: string;
    width: number;
    height: number;
    name: string;
    imgCss?: string;
    labelCss?: string;
    label: string;
    onChange?: any;
    alt: string;
}

const ImageBox = ({ demoImgSrc, width, height, name, onChange, imgCss, labelCss, label, alt }: Props) => {
    return (
        <div className='border border-dashed border-primary rounded-md p-4 h-full relative'>

            <Image
                width={width}
                height={height}
                src={demoImgSrc}
                alt={alt}
                className={cx(
                    ' w-full h-full rounded-lg', imgCss
                )}
            />

            <>
                <input
                    type="file"
                    name={name}
                    id={name}
                    className="opacity-0 overflow-hidden w-[0.1px] h-[0.1px]" accept="image/png, image/jpeg, image/webp, image/jpg"
                    onChange={onChange}
                />
                <label htmlFor={name} className={cx(
                    "px-3.5 py-3 text-white bg-primary-400 hover:bg-primary-600 trans cursor-pointer rounded-md absolute top-7 right-7",
                    labelCss,
                )}>
                    <AiOutlineUpload className='text-[24px]' />
                </label>
            </>
        </div>
    )
}

export default ImageBox