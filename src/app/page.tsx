import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="bg-gray-700 h-screen">
     <Button component={Link} href="/">
      Next link button
    </Button>
   </div>
  );
}
