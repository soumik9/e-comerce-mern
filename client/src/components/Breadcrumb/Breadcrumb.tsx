
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { cx } from "src/hooks/helper";
import { AiOutlineRotateRight, AiOutlineHome } from 'react-icons/ai';
import { dashboardLink } from "@/config/constants/constants";
import Button from "../Button/Button";
import BreadNavItem from "./partial/BreadNavItem";

export type GetLinkProps = {
  url: string;
  text: string;
  isActive: boolean
}

type Props = {
  title?: string;
  nextPageText?: string;
  nextPageLink?: string;
  getLinks?: GetLinkProps[];
};

const Breadcrumb = ({
  title,
  nextPageText,
  nextPageLink,
  getLinks
}: Props) => {

  // global
  const router = useRouter();

  // states
  const [links, setLinks] = useState([
    { url: dashboardLink, text: 'Dashboard', isActive: router.pathname === dashboardLink },
    ...(getLinks || [])
  ])

  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center breadcrumbLayout py-4 px-5">
      <div>
        <h2 className="text-[28px] text-white cursor-default font-secondary">
          {title ? title : 'Dashboard'}
        </h2>

        <ul className="flex items-center gap-x-1.5 mt-1.5">
          {links.map((item, index) => <BreadNavItem
            key={index}
            item={item}
            links={links}
            index={index}
          />)}
        </ul>
      </div>

      {(nextPageText && nextPageLink) ? <div className="mt-4 md:mt-0">
        <Button
          text={nextPageText}
          startIcon={<AiOutlineRotateRight className={cx('text-[26px] relative -top-[1px]')} />}
          onClick={() => router.push(nextPageLink ? nextPageLink : '')}
          css='font-secondary'
        />
      </div> : null}

    </div>
  );
};

export default Breadcrumb;
