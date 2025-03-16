"use client";

import { Printer } from "lucide-react";
import { Button } from "@/resusable/ui/button";
import Navbar from "@/resusable/Navbar";
import Footer from "@/resusable/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/resusable/ui/table";
import Image from "next/image";

export default function Home({ data }) {
  const showPrice = (input) => {
    // Replace the comma with a dot and remove leading zeros
    let formatted = input.replace(",", ".").replace(/^0+/, "");
    // Parse the number
    let number = parseFloat(formatted);
    // Ensure at least 2 decimal places, up to 5 decimal places, and remove trailing zeros beyond the second decimal
    let result = number
      .toFixed(5)
      .replace(/(\.\d{2,5}?)0+$/g, "$1")
      .replace(/\.0+$/, "");
    // Ensure at least 2 decimal places
    if (!result.includes(".")) result += ".00";
    if (result.split(".")[1]?.length === 1) result += "0";
    return result;
  };
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Navbar */}
      <Navbar />

      {/* Content Section */}
      <main className='flex-grow container mx-auto p-4 py-12'>
        <div className='flex justify-end items-center mb-4'>
          <Button
            className='bg-orange-500 hover:bg-orange-600 text-white'
            onClick={() => {
              print();
            }}
          >
            <Printer className='mr-2' size={20} />
            Print
          </Button>
        </div>

        {data.map((d, i) => {
          return (
            <div className='grid grid-cols-12 gap-6 my-4 mt-8' key={i}>
              <div className='col-span-5 sm:col-span-4 lg:col-span-1 md:col-span-2'>
                <div className='col-span-12 md:col-span-9'>
                  <Image
                    src={d.img_url}
                    alt={d.id}
                    width={300}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    className='rounded-lg shadow-lg'
                  />
                </div>
                <p
                  className='md:col-span-3'
                  style={{ wordBreak: "break-word" }}
                >
                  {d.description}
                </p>
              </div>

              <div className='col-span-12 lg:col-span-8 md:col-span-10 '>
                <div className='overflow-x-auto'>
                  <Table
                    aria-label='Example Table'
                    className='min-w-full bg-white border rounded-xl border-neutral-200'
                  >
                    <TableHeader>
                      <TableRow className='bg-[#1E3A8A] hover:bg-[#1E3A8A] rounded-xl'>
                        <TableHead className='px-4 py-2 text-left text-white'>
                          Codice
                        </TableHead>
                        <TableHead className='px-4 py-2 text-left text-white'>
                          Desc
                        </TableHead>
                        <TableHead className='px-4 py-2 text-left text-white'>
                          CF
                        </TableHead>
                        <TableHead className='px-4 py-2 text-left text-white'>
                          UOM
                        </TableHead>
                        <TableHead className='px-4 py-2 text-left text-white'>
                          Prezzo
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {d.variants.map((v, i) => (
                        <TableRow key={i} className='hover:bg-neutral-50'>
                          <TableCell className='px-4 py-2 border text-sm'>
                            {v.codice}
                          </TableCell>
                          <TableCell className='px-4 py-2 border text-sm min-w-[250px] lg:max-w-[300px] whitespace-pre-wrap'>
                            {v.descrizione}
                          </TableCell>
                          <TableCell className='px-4 py-2 border text-sm'>
                            {v.min_order_qty}
                          </TableCell>
                          <TableCell className='px-4 py-2 border text-sm'>
                            {v.uom}
                          </TableCell>
                          <TableCell className='px-4 py-2 border text-sm'>
                            {showPrice(v.price)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}
