"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Content Section */}
      <main className="flex-grow container mx-auto p-4 py-12">
        <div className="flex justify-end items-center mb-4">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Printer className="mr-2" size={20} />
            Print
          </Button>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <Image
              src="/next.svg" 
              alt="Vercel Logo"
              width={500} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="overflow-x-auto">
              <Table aria-label="Example Table" className="min-w-full bg-white border rounded-xl border-neutral-200">
                <TableHeader>
                  <TableRow className="bg-[#1E3A8A] hover:bg-[#1E3A8A] rounded-xl">
                    <TableHead className="px-4 py-2 text-left text-white">Codice</TableHead>
                    <TableHead className="px-4 py-2 text-left text-white">Desc</TableHead>
                    <TableHead className="px-4 py-2 text-left text-white">CF</TableHead>
                    <TableHead className="px-4 py-2 text-left text-white">Prezzo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...Array(4)].map((_, i) => (
                    <TableRow key={i} className="hover:bg-neutral-50">
                      <TableCell className="px-4 py-2 border">{`Row ${i + 1}, Col 1`}</TableCell>
                      <TableCell className="px-4 py-2 border">{`Row ${i + 1}, Col 2`}</TableCell>
                      <TableCell className="px-4 py-2 border">{`Row ${i + 1}, Col 3`}</TableCell>
                      <TableCell className="px-4 py-2 border">{`Row ${i + 1}, Col 4`}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

        </div>

        <hr className="my-10 border-gray-300" />

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <Image
              src="/next.svg" 
              alt="Vercel Logo"
              width={500} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="overflow-x-auto">
              <Table aria-label="Example Table" className="min-w-full bg-white border rounded-xl border-neutral-200">
                <TableHeader>
                  <TableRow className="bg-[#1E3A8A] hover:bg-[#1E3A8A] rounded-xl">
                    <TableHead className="px-4 py-2 text-left text-white">Codice</TableHead>
                    <TableHead className="px-4 py-2 text-left text-white">Desc</TableHead>
                    <TableHead className="px-4 py-2 text-left text-white">CF</TableHead>
                    <TableHead className="px-4 py-2 text-left text-white">Prezzo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...Array(4)].map((_, i) => (
                    <TableRow key={i} className="hover:bg-neutral-50">
                      <TableCell className="px-4 py-2 border">{`Row ${i + 1}, Col 1`}</TableCell>
                      <TableCell className="px-4 py-2 border">{`Row ${i + 1}, Col 2`}</TableCell>
                      <TableCell className="px-4 py-2 border">{`Row ${i + 1}, Col 3`}</TableCell>
                      <TableCell className="px-4 py-2 border">{`Row ${i + 1}, Col 4`}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}