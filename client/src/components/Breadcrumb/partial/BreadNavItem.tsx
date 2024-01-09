import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { GetLinkProps } from '../Breadcrumb';
import { cx } from '@/hooks/helper';

type Props = {
    item: GetLinkProps;
    links: GetLinkProps[];
    index: number;
}

const BreadNavItem = ({ links, item, index }: Props) => {

    // global
    const router = useRouter();

    return (
        <>
            <li className="" key={index}>
                <Link
                    href={item.url}
                    className={cx(
                        'flex items-center gap-1 trans ',
                        router.pathname === item.url ?
                            '!text-warning hover:!text-warning-hover font-medium' : "hover:text-gray-300 text-white",
                    )}
                >
                    {index === 0 ? <AiOutlineHome className='text-[18px] relative top-[-2px]' /> : null} {item.text}
                </Link>
            </li>

            {index < links.length - 1 && <li className="cursor-default text-white">/</li>}
        </>
    )
}

export default BreadNavItem