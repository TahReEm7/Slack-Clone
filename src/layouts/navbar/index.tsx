"use client";

import { useState } from "react";
import {
  Box,
  Group,
  Popover,
  Text,
  Drawer,
  ActionIcon,
  ScrollArea,
} from "@mantine/core";
import { IconChevronDown, IconSearch, IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import Features from "./components/Features";
import Solution from "./components/Solution";
import Resources from "./components/Resources";

export default function Navbar() {
  const pathname = usePathname();
  const [openedPopover, setOpenedPopover] = useState<string | null>(null);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const renderDropdown = (label: string) => {
    switch (label) {
      case "Features":
        return <Features />;
      case "Solutions":
        return <Solution />;
      case "Resources":
        return <Resources />;
      default:
        return null;
    }
  };

  return (
    <nav className="max-w-7xl mx-auto flex mt-2 rounded-full bg-white  sticky top-4 z-10000  left-0 items-center justify-between py-6 px-4 md:px-8">
      {/* Left side: Logo + Nav Links */}
      <div className="flex flex-row gap-6 items-center">
        {/* Logo */}
      <Link href={"/"}>
        <Group gap="1px">
          <Image src="/logo.png" alt="Slack Logo" width={40} height={40} />
          <Box>
            <Text fw={900} fz="xl">
              slack
            </Text>
            <Text fz="xs" c="dimmed" mt={-5}>
              from Salesforce
            </Text>
          </Box>
        </Group>
      </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.label}>
                <Popover
                  opened={openedPopover === link.label}
                  onChange={(o) => setOpenedPopover(o ? link.label : null)}
                  width="auto"
                  position="bottom-start"
                  withArrow={false}
                  shadow="md"
                  offset={6}
                  withinPortal={false}
                >
                  <Popover.Target>
                    <button
                      onClick={() =>
                        setOpenedPopover(
                          openedPopover === link.label ? null : link.label
                        )
                      }
                      className={`flex items-center gap-1 font-semibold ${
                        openedPopover === link.label ? "text-[#611F69]" : ""
                      }`}
                    >
                      {link.label}
                      <IconChevronDown size={16} />
                    </button>
                  </Popover.Target>
                  <Popover.Dropdown
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-md"
                  >
                    {renderDropdown(link.label)}
                  </Popover.Dropdown>
                </Popover>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href!}
                  className={`font-semibold hover:text-[#611F69] transition-colors ${
                    pathname === link.href ? "text-[#611F69]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Right side buttons (Desktop) */}
      <div className="hidden md:block">
        <Group gap="md">
          <IconSearch size={20} style={{ cursor: "pointer" }} />
          <Link href="/signin" className="font-semibold">
            Sign in
          </Link>
          <Link
            href="/"
            className="bg-white px-[12px] py-[8px] rounded-sm text-[#611F69] border-[#611F69] border-2 font-semibold"
          >
            TALK TO SALES
          </Link>
          <Link
            href="/login"
            className="bg-[#611F69] px-[12px] py-[8px] rounded-sm text-white font-semibold"
          >
            GET STARTED
          </Link>
        </Group>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <ActionIcon
          variant="subtle"
          onClick={() => setDrawerOpened(true)}
          aria-label="Open menu"
        >
          <IconMenu2 size={26} />
        </ActionIcon>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        padding="md"
        position="right"
        size="md"
        overlayProps={{ backgroundOpacity: 0 }}
      >
        <div className="flex justify-between items-center mb-4">
              <Group gap="1px">
          <Image src="/logo.png" alt="Slack Logo" width={40} height={40} />
          <Box>
            <Text fw={900} fz="xl">
              slack
            </Text>
            <Text fz="xs" c="dimmed" mt={-5}>
              from Salesforce
            </Text>
          </Box>
        </Group>
        </div>
        <ScrollArea h="80vh">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label}>
                  <button
                    className="flex items-center justify-between w-full font-semibold text-left"
                    onClick={() =>
                      setOpenedPopover(
                        openedPopover === link.label ? null : link.label
                      )
                    }
                  >
                    {link.label}
                    <IconChevronDown size={16} />
                  </button>
                  {openedPopover === link.label && (
                    <Box className="mt-2 ml-4 border-l pl-3 text-sm">
                      {renderDropdown(link.label)}
                    </Box>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href!}
                    className={`font-semibold block py-1 ${
                      pathname === link.href ? "text-[#611F69]" : ""
                    }`}
                    onClick={() => setDrawerOpened(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <Link href="/signin" className="font-semibold">
              Sign in
            </Link>
            <Link
              href="/"
              className="bg-white px-[12px] py-[8px] rounded-sm text-[#611F69] border-[#611F69] border-2 font-semibold text-center"
            >
              TALK TO SALES
            </Link>
            <Link
              href="/login"
              className="bg-[#611F69] px-[12px] py-[8px] rounded-sm text-white font-semibold text-center"
            >
              GET STARTED
            </Link>
          </div>
        </ScrollArea>
      </Drawer>
    </nav>
  );
}
