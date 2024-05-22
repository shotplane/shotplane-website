import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { ellipseAddress } from "../lib/helpers/format-helpers";
import { Tooltip } from "react-daisyui";
import { FaCheck, FaCopy } from "react-icons/fa";

const Address = ({
  className = "d-flex",
  linkClassName = "",
  showCopy = true,
  address,
  link,
  wordsCount = 12,
}: {
  linkClassName?: string;
  className?: string;
  address: string;
  showCopy?: boolean;
  link?: string;
  wordsCount?: number;
}) => {
  return (
    <span className={className}>
      <Tooltip message={address}>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={linkClassName}
          >
            <span>{ellipseAddress(address, wordsCount)}</span>
          </a>
        ) : (
          <span>{ellipseAddress(address, wordsCount)}</span>
        )}
      </Tooltip>
    </span>
  );
};
export { Address };
